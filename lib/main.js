// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
// https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/request.html
var Request = require("sdk/request").Request;
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
	include: ["*.reddit.com"],
	contentScriptFile: self.data.url("synccit.js"),
	onAttach: function(worker) {
		worker.port.on("apiRequest", function(opts) {
			var onComplete = opts.onComplete;
			opts.onComplete = function(response){ self.port.emit("onApiRequestComplete", response); };
			Request(opts);
		});
	}
});


