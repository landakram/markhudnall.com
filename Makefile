
build:
	lein build-site

run:
	lein ring server

run-js:
	lein figwheel

deploy:
	git push dokku master
