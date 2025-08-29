run:
	tsc | powershell ./node_modules/.bin/esbuild ./build/main.js --bundle --minify --sourcemap --outfile=./build/bundle.js | powershell cp -Force index/index.html C:/Apache24/htdocs/index.html | powershell cp -Force build/bundle.js C:/Apache24/htdocs/bundle.js 
