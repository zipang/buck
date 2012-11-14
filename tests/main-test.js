var buck = require("../lib/buck"),
	vows = require("vows"),
	assert = require("assert");

/**
 * This test suite doesn't intend to be complete on jquip or Deferred methods
 * We just check that the features are accessible here under a common namespace
 * 
 * We then launch in $.fetchDocument()
 */
vows.describe('Buck').addBatch({

	"Init": {
		topic : function() {return buck;},
		'is a method itself': function($) {
			assert.isFunction($, "a buck is a function");
		},
		'has expected jquip core methods': function($) {
			assert.isFunction($.each, "$.each() should be accessible");
			assert.isFunction($.extend, "$.extend() should be accessible");
		},
		'has the Deferred methods': function($) {
			assert.isFunction($.when);
			assert.isFunction($.Deferred);
		},
		'has the additional .fetchDocument() magic method': function($) {
			assert.isFunction($.fetchDocument);
		}

	},

	"DOM Builder": {
		topic : function() {return buck;},
		'can build a DOM element': function($) {
			var $p = $("<p>"),
				p = $p[0];
			assert.isDefined(p.nodeName);
			assert.isDefined($p.html);
			assert.equal('P', p.nodeName);
			assert.equal('P', $p.prop('nodeName'));
		},
		'can access DOM elements content': function($) {
			var $p = $("<p><em>I'm Bold</em></p>");
			assert.equal("I'm Bold", $p.text());
			assert.equal("<em>I'm Bold</em>", $p.html());
		},
		'can append content to DOM elements': function($) {
			var $p = $("<p>").append($("<em>").text("I'm Bold"));
			assert.equal("I'm Bold", $p.text());
			assert.equal("<em>I'm Bold</em>", $p.html());
		}

	},

	"CSS Expressions": { // Sizzle Query selector 
		topic : function() {return buck;},

		'With detached elements' : {

			topic: function($) {
				this.callback($, $(
					"<div id='container'>"
					+ "<hgroup><h1>Hello</h1>"
					+ "<h2>World</h2></hgroup>"
					+ "<p>We are coming</p>"
					+ "<p class='here'>We are here</p>"
					+ "</div>"
				));
			},

			'can search and filter content in detached elements': function($, $container) {
				assert.equal(1, $("hgroup", $container).length);
				assert.equal(2, $("h1, h2", $container).length);
			}
		},

		'Can fetch some document (I) - from local filesystem': {

			topic: function($) {
				var path = require("path"),
					test = this;

				console.log("(I) START fetching", "/test.html");
				$.fetchDocument(path.join(__dirname, "/test.html"))
					.done(function($) {
						console.log("(I) END fetching", "/test.html");
						test.callback($, this);
					});
			},

			'$ is now bound to local /test.html (I)': function($, doc) {
				assert.equal(1, $("#header.container").length, "Should find one div#container");
				assert.equal(1, $(".container").length, "Should find one div#container");
				assert.equal($(".container h1").text(), "Hello World");
			}
		},

		'Can fetch some document (II) - from Internet': {

			topic: function($) {
				var test = this;

				console.log("(II) START fetching", "https://github.com/zipang");
				$.fetchDocument("https://github.com/zipang")
					.done(function($) {
						console.log("(II) END fetching", this.URL, $("title").text());
						test.callback($, this);
					});
			},

			'$ is now bound to the 2nd fetched document': function($, doc) {
				assert.equal("Christophe Desguez", $("#site-container div.first.vcard h1 span").text(), "Zipang's page on github");
			}
		},

		'Can fetch some document (III) - from Internet': {

			topic: function($) {
				var topic = this;

				console.log("(III) START fetching", "https://github.com/zipang/buck");
				$.fetchDocument("https://github.com/zipang/buck")
					.done(function($) {
						console.log("(III) END fetching", this.URL);
						topic.callback($, this);
					});
			},

			'$ is now bound to the 3rd fetched document': function($, doc) {
				assert.equal("zipang", $.trim($("span.author.vcard").text()), "Zipang's jquip page on github");
			}
		}

	}


}).export(module);
