clean:
	rm -rf resources/public/js/cljs-runtime
	rm -rf resources/public/js/manifest.edn
	find resources/public/js -name "*.js.map" | xargs rm

build-css:
	NODE_ENV=production npx brunch build -p -j 10

build-js: clean
	shadow-cljs release app

build-site:
	lein run -m markhudnall.core/export

build: clean build-css build-js build-site

run:
	lein ring server

run-js:
	shadow-cljs watch app

deploy:
	git push dokku master
