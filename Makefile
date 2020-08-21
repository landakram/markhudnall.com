clean:
	rm -rf resources/public/js/cljs-runtime
	rm -rf resources/public/js/manifest.edn
	find resources/public/js -name "*.js.map" | xargs rm

build-js: clean
	shadow-cljs release app

build-site:
	lein run -m markhudnall.core/export
	
build: clean build-js build-site

run:
	lein ring server

run-js:
	shadow-cljs watch app

deploy:
	git push dokku master
