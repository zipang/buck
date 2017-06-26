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
 * Date: 2017-06-26
 */
var IsomorphicFetch = require('real-isomorphic-fetch'),
	fetch = new IsomorphicFetch(require('node-fetch')),
	cheerio = require("cheerio");

(function roger() {


	var buck = {
		allreadyLogged: false,
		fetchDefaultOptions: {
			credentials: "include", // return cookies as they were set
		}
	};

	buck.fetch = async function(url, options) {

		try {
			if (options && options.login) {
				await buck.login(options.login.url, options.login.formData);
				options.credentials = "include";
			}

			console.log("FETCHIN " + url + "...");
			var resp = await fetch(url, options);

			// return $
			return cheerio.load(await resp.text());

		} catch(err) {
			console.error(err);
		}

	}

	/**
	 * POST user credentials to the login form
	 */
	buck.login = async function(formActionUrl, postData) {

		console.log("LOGIN to " + formActionUrl + "...");
		var resp = await fetch(formActionUrl, {
			method: "POST",
			credentials: "include",
			data: postData
		});

		// that's fine only if the returned code is 200
		buck.allreadyLogged = (resp.status === 200);

		if (resp.status !== 200) {
			throw new Error(`Login failed with the credentials and response status ${resp.status} ${resp.statusText}`);
		} else {
			console.log("LOGIN credentials accepted");
			return buck;
		}

	}

	module.exports = buck;

})();
