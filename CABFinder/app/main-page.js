var observable = require("data/observable");

// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;

    // TODO: Initialize binding context.
    var emptyContext = new observable.Observable();
    page.bindingContext = emptyContext;
}
exports.pageLoaded = pageLoaded;
