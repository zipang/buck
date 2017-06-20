/**
 * Buck.js
 * =======
 * Scrap HTML pages with $
 * - return only Promises so that you can handle response with async/await
 * - Uses cheerio as a light alternative to jQuery 
 *   that contains only DOM manipulation methods from jQuery
 * - Internally uses node-fetch and its Web Standard API so that 
 *   we handle correctly the document charset 
 *   (unlike many modern HTTP clients library like axios or request)
 * Author: Eidolon Labs (zipang)
 * Source : http://github.com/zipang/buck
 * Date: 2012-10-24
 */
var fetch = require("node-fetch"),
	cheerio = require("cheerio");

(function roger() {

	var buck = {
		fetch: async function(url, options) {
			var resp = await fetch(url, options);

			return cheerio.load(await resp.text());
		}
	}


	module.exports = buck;

})();
