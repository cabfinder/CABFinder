var view = require("ui/core/view");

function buttonTap(args) {

    var sender = args.object;
    var parent = sender.parent;
    if (parent) {
        var lbl = view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "Success";
        }
    }
}
exports.buttonTap = buttonTap;