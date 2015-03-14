var view = require("ui/core/view");
var dialogs = require("ui/dialogs");
var vmModule = require("./view-models/view_model");
var frameModule = require("ui/frame");
var LocationManager = require("location").LocationManager;
var locationManager = new LocationManager();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;

function buttonTap3(args) {
    var sender = args.object;
    var parent = sender.parent;
    
    var isEnabled = LocationManager.isEnabled();
    dialogs.alert("Location Services: " + isEnabled);

    var lbl = view.getViewById(parent, "Label1");

    locationManager.startLocationMonitoring(function (location) {
        lbl.text = 'Location received: ' + location.latitude;
    }, function (error) {
        console.log('Location error received: ' + error);
    });

}
exports.buttonTap3 = buttonTap3;

function buttonTap2(args) {
    var topmost = frameModule.topmost();

    dialogs.confirm("Do you wish to stop monitoring?").then(function (result) {
        if (result) {
            var sender = args.object;
            var parent = sender.parent;
            var lbl = view.getViewById(parent, "Label1");
            if (parent && lbl) {
                locationManager.stopLocationMonitoring();
                lbl.text = "Location monitoring stopped.";
            }
        } else {
            topmost.navigate("app/_2002_taxi_reg_02");
        }
    });

}
exports.buttonTap2 = buttonTap2;