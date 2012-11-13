
BUCK
====

Who needs buck anyway?
----------------------

```js
	var $ = require('buck');
```

What for?
---------

```js
	var parseMyPage = $.fetchDocument("http://mypage.com");

	parseMyPage.done(
		function($) {
			console.log("Successfully parsed document " + this.title);
			var articleTitle = $("article h1").text();

		}
	);

```

Buck brings DOM manipulation with your favorite $ library to node.js

Buck is loaded once and for all, but can be tied to the context and evaluated inside many documents.

Buck doesn't contain events or CSS or animation because that doesn't make many sense server side.

More Bang
---------

```js
	$.when();
```

