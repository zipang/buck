
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

Motivation
----------

Status
------

Acknowledgement
---------------

Buck is basically a wrapper around three awesome libraries with some additional sugar..

* [jsdom] - Full DOM level 3 implementation out of the browser
* [jquip] - jQuery in Parts
* [Deferred] - jQuery Deferred

[jsdom]: git://github.com/tmpvar/jsdom.git
[jquip]: https://github.com/mythz/jquip
[Deferred]: https://github.com/webspinner/Deferred
