
BUCK
====

Who needs buck anyway?
----------------------

```js
	var buck = require('buck');
```

What for?
---------

Parse, manipulate, extract content from HTML pages with your favorite jQuery-flavored API.

Use promises or async/await to handle results.

```js
	async function parseBlog() {

		// load an external document
		var $ = await buck.fetch("http://blog.mysite.com");

		// $ is tied to the newly parsed document !
		return {
			title:   $("article h1").text(),
			content: $("article .content").toMarkdown()
		}

	}
```


Motivations
-----------

Scrapping web pages is a recurring occupation in our troubled times but it doesn't have to be a ... _nightmare_.

Well.. (cough, c*gh..) [Nightmare] _is_ a terrific project and it may well be your only way down if you are parsing _dynamic web pages_ (think single page apps), i.e. : if you must execute the javascript in your target pages to have the result you want.

However, if you are still dealing with XXst century server-side HTML pages, well, you could have more bang for your bucks with.. you see who.

buck is super simple and it doesn't come with 300Mo (counting..) of additional dependancies.
More than that, it guides you through the true bliss of asynchronous code that doesn't suck. No more callback hell, just pure Promises that you can deal with async/await.

[Nightmare]: https://github.com/segmentio/nightmare

Status
------
[![Build Status](https://secure.travis-ci.org/zipang/buck.png)](http://travis-ci.org/zipang/buck)
Buck is currently in Alpha.
Feel free to comment about the syntax, feature set..


Acknowledgements
----------------

Buck is basically a wrapper around two awesome libraries with some additional sugar..

* [node-fetch] - the fetch Web standard implementation for node.JS
* [cheerio] - Full DOM level 3 implementation out of the browser

[node-fetch]: https://github.com/bitinn/node-fetch
[cheerio]: https://github.com/cheeriojs/cheerio

# License

(The MIT License)

Copyright (c) 2017 Eidolon Labs. http://eidolon-labs.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
