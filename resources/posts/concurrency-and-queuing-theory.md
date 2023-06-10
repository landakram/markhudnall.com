Title: How many servers do we need?
Date: 2023-06-09
Draft: false

How much concurrency do we need to handle a given throughput and response time? 

This is a fundamental question when scaling software systems. Since software systems are queues, let us try to answer it with queuing theory.

## An initial guess using Little's law

[Little's law](https://en.wikipedia.org/wiki/Little\'s_law) states that the average number of jobs in a system (%\(L\)%) is equal to the arrival rate of jobs (%\(\lambda\)%) multiplied by the average time a job spends in the system (%\(W\)%).  In other words, %\(L = \lambda W\)%. 

Little's law can provide a simple estimate of the required concurrency --- we can set concurrency to the average number of jobs in the system, given some known arrival rate (throughput) and service time (response time).

Consider a web server where average response time is 100ms. Suppose we'd like to handle a throughput of 100 requests per second. Using Little's law, we would conclude that, on average, 10 requests are "in progress" from clients' perspectives (either queued or actively being serviced). We might then think to set concurrency to 10 in order to effectively handle this load.

However, because Little's law works with averages, it doesn't account for variability in the requests' arrival and service times. In practice, requests are not uniformly distributed over time, and some requests may take longer than others. There is a non-zero probability that an incoming request might find all servers busy and need to wait. 

So Little's law on its own is not enough. We need to consider a more sophisticated model.

## Erlang's C formula

We would like to find some level of concurrency that constrains the probability of waiting to some target. To do this, we turn to [Erlang's C formula](https://en.wikipedia.org/wiki/Erlang_\(unit\)#Erlang_C_formula), which provides us with the probability that an incoming job must wait because all servers are busy[^1]. Erlang's C formula is defined as follows:

%\[%
%C(L, S) = \frac{\frac{L^S}{S!} \times \frac{S}{S - L}}{\sum_{i=0}^{S-1} \frac{L^i}{i!} + \frac{L^S}{S!} \times \frac{S}{S - L}} %
%\]%

Here, %\(L\)% is the average number of jobs in the system, or %\(\lambda W\)% as above with Little's law. %\(S\)% is the number of servers. %\(L\)% is also referred to as ["offered traffic"](https://en.wikipedia.org/wiki/Offered_load) --- Erlang's C formula was developed in the context of efficient telephone line usage so "offered traffic" thus refers to the amount of traffic that could be carried given a certain volume of calls and unlimited lines. For our purposes, it is average load, or the average number of requests expected to be in-progress from clients' perspectives, given a certain throughput and response time.

To find the ideal level of concurrency, we can start with some number of servers (the initial guess using Little's law) and then increment it until %\(C(L,S)\)% is below some desired threshold (say 5% probability of waiting). We will write a script to do this.

We're faced with a challenge here, though. Due to the factorials, computing Erlang's C formula will underflow. To work around this, we will translate Erlang's C formula into log-probability space where underflows and overflows are less likely.

## Deriving the logarithmic Erlang C formula

We start with the original Erlang's C formula:

%\[%
%C(L, S) = \frac{\frac{L^S}{S!} \times \frac{S}{S - L}}{\sum_{i=0}^{S-1} \frac{L^i}{i!} + \frac{L^S}{S!} \times \frac{S}{S - L}} %
%\]%

We take the natural log of each term in the formula:

%\[%
%\log(C(L, S)) = \log(\frac{L^S}{S!}) + \log(\frac{S}{S - L}) - \log(\sum_{i=0}^{S-1} \frac{L^i}{i!} + \frac{L^S}{S!} \times \frac{S}{S - L})%
%\]%

Here, we've used the property of logarithms %\(\log(a/b) = \log(a) - \log(b)\)%.

We further simplify the above expression:

%\[ %
%\begin{align} %
%\log(C(L, S)) = S \log(L) &- \log\Gamma(S + 1) \\ %
%&+ \log(S) - \log(S - L) \\ %
%&- \log(\sum_{i=0}^{S-1} e^{i \log(L) - \log\Gamma(i + 1)} \\ %
%&+ e^{S \log(L) - \log\Gamma(S + 1) + \log(S) - \log(S - L)}) %
%\end{align} %
%\] %

Here, we've used the property of logarithms, %\(\log(a^b) = b \cdot \log(a)\)%, and replaced factorials with the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function) (%\(n! = \Gamma(n + 1)\)% for a non-negative integer %\(n\)%), as %\(\log(n!)\)% can be computed as %\(\log\Gamma(n + 1)\)%.

Note that the original denominator is now the log of a sum of exponentials. We can thus use the [log-sum-exp trick](https://en.wikipedia.org/wiki/LogSumExp) to calculate these terms without underflow.

Finally, we exponentiate the log-probability to get back to the original probability space:

%\[%
%C(L, S) = \exp(\log(C(L, S)))%
%\]%

## Python code

Let's look at how we'll calculate the minimum concurrency needed to meet a certain throughput, response time, and probability of queuing.

First, we'll choose an initial guess for the required number of servers using Little's law and a target throughput and response time. Then, we will update our initial guess using an iterative process. We will increment the number of servers until the probability of queuing, as given by our logarithmic Erlang's C formula, is below our desired max.

```python
import math

def log_sum_exp(numbers):
    max_num = max(numbers)
    return max_num + math.log(sum(math.exp(x - max_num) for x in numbers))

def erlang_c(L, S):
    log_numerator = S * math.log(L) - math.lgamma(S + 1) + math.log(S) - math.log(S - L)
    denominator_terms = [i * math.log(L) - math.lgamma(i + 1) for i in range(S)] + [S * math.log(L) - math.lgamma(S + 1) + math.log(S) - math.log(S-L)]
    log_denominator = log_sum_exp(denominator_terms)
    erlang_c = math.exp(log_numerator - log_denominator)
    return erlang_c

def calculate_servers(lambda_, W, max_prob):
    lambda_ = float(lambda_)
    W = float(W)
    L = lambda_ * W
    S = math.floor(L + 1)
    print(f'Starting with {S} servers')
    prob = erlang_c(L, S)
    while prob > max_prob:
        print(f'With {S} servers, the queuing probability is {prob}. Trying {S + 1} servers.')
        S += 1
        prob = erlang_c(L, S)
    return S, prob

requests_per_second = 1000.0
response_time_s = 0.1
max_prob = 0.05

num_servers, prob = calculate_servers(requests_per_second, response_time_s, max_prob)
print(f'The minimum number of servers required is: {num_servers} (queuing probability {prob})')
```

When we run this script, we see the following output:

```text
Starting with 101 servers
With 101 servers, the queuing probability is 0.8833145020395913. Trying 102 servers.
With 102 servers, the queuing probability is 0.7770966583320832. Trying 103 servers.
With 103 servers, the queuing probability is 0.6807968118039859. Trying 104 servers.
With 104 servers, the queuing probability is 0.593855705420894. Trying 105 servers.
With 105 servers, the queuing probability is 0.5157074268123086. Trying 106 servers.
With 106 servers, the queuing probability is 0.44578262621325715. Trying 107 servers.
With 107 servers, the queuing probability is 0.3835119575327338. Trying 108 servers.
With 108 servers, the queuing probability is 0.32832968002713697. Trying 109 servers.
With 109 servers, the queuing probability is 0.27967734713081166. Trying 110 servers.
With 110 servers, the queuing probability is 0.23700750028506098. Trying 111 servers.
With 111 servers, the queuing probability is 0.1997872798880628. Trying 112 servers.
With 112 servers, the queuing probability is 0.16750186339584125. Trying 113 servers.
With 113 servers, the queuing probability is 0.13965764259076413. Trying 114 servers.
With 114 servers, the queuing probability is 0.11578505827853611. Trying 115 servers.
With 115 servers, the queuing probability is 0.09544102105759475. Trying 116 servers.
With 116 servers, the queuing probability is 0.0782108608850327. Trying 117 servers.
With 117 servers, the queuing probability is 0.06370976519997625. Trying 118 servers.
With 118 servers, the queuing probability is 0.05158368436937104. Trying 119 servers.
The minimum number of servers required is: 119 (queuing probability 0.04150970303605052)
```

It's interesting to note that our initial guess has a very high probability of queuing. If we graph our findings, we see that Erlang's C formula is decreasing and convex in %\(S\)%:

![](/img/erlang-c.svg)

## Beyond the Erlang model

Our model here gives the impression that throughput scales linearly with concurrency. In practice, it does not.

[Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law) and the [Universal Scalability Law](https://en.wikipedia.org/wiki/Neil_J._Gunther#Universal_Law_of_Computational_Scalability) remind us that as we increase concurrency, total speedup is limited by sequential computation, as well as contention and coherence issues. 

Amdahl's law states that any speedup using multiple processors is limited by the time needed for the sequential fraction of the program. Similarly, for USL, our system may depend on a shared resource like a database, or require coordination to keep data consistent across multiple servers. Ultimately, the throughput we get from increasing concurrency diminishes with scale.

Perhaps we could measure the contention and coherence factors empirically as we scale, in pursuit of a better model.

### M/M/c queues

The analysis also relies on the [M/M/c queue model](https://en.wikipedia.org/wiki/M/M/c_queue), characterized by three properties:

* **Markovian (or Poisson) arrival process:** Jobs arrive independently at a constant average rate. In simpler terms, the timing of the next job arrival does not depend on when the previous job arrived --- this is what we mean by "Markovian". The arrivals could be at any time, and they are spaced apart randomly but with a constant average rate. 
* **Markovian service times:** Similar to arrivals, the time it takes to service the next job does not depend on how long it took to service the previous job, and there is a constant average rate.
* **c servers:** There are c identical servers each operating at the same average service rate. 

Many real-world systems don't adhere to these assumptions. For example, if clients retry requests or make sequential requests during page load, then arrivals are no longer memoryless --- there are dependencies between request arrival times. Similarly, if servers contend for a common database under load, service times may no longer be independent. And if an application has peak times, then request arrival times are unlikely to be Markovian, since the arrival process depends on the time of day.

The model is a simplification, and we must always keep that in mind. It can still useful, if we are judicious in how we apply it. For example, perhaps it's better to use throughput and response time at peak times, rather than their averages, even if it means over-provisioning most of the time. We must recognize that there might not be a definitive answer, but instead, an ongoing exploration that balances the tension of theory, observation, and good old tinkering.

[^1]: For an [M/M/c](https://en.wikipedia.org/wiki/M/M/c_queue) queue. See the last section for caveats.
