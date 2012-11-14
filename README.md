
BUCK
====

Who needs buck anyway?
----------------------

```js
	var $ = require('buck');
```

What for?
---------

Parse, Manipulate, Create new HTML content with your favorite jQuery-flavored API.

```js
	// load an external document
	var parse = $.fetchDocument("http://mypage.com");

	parse.done(
		function($) {
			// this is tied to the newly parsed document
			console.log("Successfully parsed document " + this.title);
			// the new $ var is tied to the document context
			var articleTitle = $("article h1").text();
			// (...)
		}
	);

```

Use Deferred and promises to handle asynchronous results.

```js
	// load multiple documents
	$.when();


```

Motivations
-----------

Status
------
[![Build Status](https://secure.travis-ci.org/zipang/buck.png)](http://travis-ci.org/zipang/buck)
Buck is currently in Alpha.
Feel free to comment about the syntax, feature set..


Acknowledgements
----------------

Buck is basically a wrapper around three awesome libraries with some additional sugar..

* [jsdom] - Full DOM level 3 implementation out of the browser
* [jquip] - jQuery in Parts
* [Deferred] - jQuery Deferred

[jsdom]: git://github.com/tmpvar/jsdom.git
[jquip]: https://github.com/mythz/jquip
[Deferred]: https://github.com/webspinner/Deferred

# License

(The MIT License)

Copyright (c) 2012 Eidolon Labs. http://eidolon-labs.com

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
