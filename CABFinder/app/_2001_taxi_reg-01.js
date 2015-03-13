var view = require("ui/core/view");
var count = 0;
function taxi-reg(args) {
    count++;
    var sender = args.object;
    var parent = sender.parent;
    if (parent) {
        var lbl = view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
exports.buttonTap = buttonTap;