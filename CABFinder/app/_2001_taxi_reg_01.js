var view = require("ui/core/view");
var dialogs = require("ui/dialogs");
var vmModule = require("./view-models/view_model");
var frameModule = require("ui/frame");



function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;


function buttonTap2(args) {
    var topmost = frameModule.topmost();

    dialogs.confirm("Do you wish to continue?").then(function (result) {
        if (result) {
            var sender = args.object;
            var parent = sender.parent;
            var lbl = view.getViewById(parent, "Label1");
            if (parent && lbl) {
                lbl.text = "Confirmed";
            }
        } else {
            topmost.navigate("app/_2002_taxi_reg_02");
        }
    });

}
exports.buttonTap2 = buttonTap2;