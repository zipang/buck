#!/bin/sh
rm *.js
wget https://raw.github.com/zipang/jquip/master/src/jquip.js
uglifyjs jquip.js > jquip.min.js
wget https://raw.github.com/zipang/jquip/master/dist/jquip.q-sizzle.min.js
cat header.html.part jquip.min.js jquip.q-sizzle.min.js footer.html.part > ../lib/buck-loader.html
rm *.js
