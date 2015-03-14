var view = require("ui/core/view");
var dialogs = require("ui/dialogs");
var vmModule = require("./view-models/view-model");


function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;


function buttonTap2(args) {
    dialogs.confirm("Do you wish to continue?").then(function (result) {
        if (result) {
            var sender = args.object;
            var parent = sender.parent;
            if (parent) {
                var lbl = view.getViewById(parent, "Label1");
                if (lbl) {
                    lbl.text = "Confirmed";
                }
            }
        }
    });
}
exports.buttonTap2 = buttonTap2;