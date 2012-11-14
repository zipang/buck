/**
 * Buck.js
 * =======
 * Recreates a window/DOM environment to load jQuip core
 * - a light alternative to jQuery -
 * that contains only DOM manipulation methods from jQuery
 * Author: Eidolon Labs (zipang)
 * Source : http://github.com/zipang/buck
 * Date: 2012-10-24
 */
(function roger() {

    var buck, 
        jsdom = require("jsdom").jsdom,
		Deferred = require('Deferred'),
        bootstrapDoc = jsdom(require("fs").readFileSync(
            require("path").join(__dirname, "buck-loader.html"), "utf-8"
        )),
        $ = bootstrapDoc.parentWindow.jquip;

    function memoize(doc) {
        return $.extend(
            function(sel, ctx) {
                if (typeof sel == 'string' && !ctx) {
                    return $(sel, doc);
                } else {
                    return $(sel, ctx);
                }
            }, buck);
    }


    buck = $.extend($, {

        Deferred : function(what) {
            return new Deferred(what);
        },

        when : Deferred.when,

        /**
         * Fetch a new document
         * @param url
         * @param {optional} callback to fetch document asyhrounousmy
         */
        fetchDocument : function(url) {
            var fetched = new Deferred();    

            jsdom.env({
              html: url,
              done: function (err, win) {

                if (err) {
                    fetched.reject(err);

                } else {
                    var doc = win.document;
                    fetched.resolve.call(doc, memoize(doc));
                }
              }
            });

            return fetched.promise();
        }

    });

    module.exports = buck;

})();
