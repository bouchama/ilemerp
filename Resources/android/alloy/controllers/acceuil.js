function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "acceuil";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.acceuil = Ti.UI.createWindow({
        id: "acceuil"
    });
    $.__views.acceuil && $.addTopLevelView($.__views.acceuil);
    $.__views.importe = Ti.UI.createButton({
        title: "Synchronisation",
        id: "importe"
    });
    $.__views.acceuil.add($.__views.importe);
    $.__views.authentification = Ti.UI.createButton({
        title: "authentification",
        id: "authentification"
    });
    $.__views.acceuil.add($.__views.authentification);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;