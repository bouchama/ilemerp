function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "acceuil";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.acceuil = Ti.UI.createWindow({
        id: "acceuil"
    });
    $.__views.acceuil && $.addTopLevelView($.__views.acceuil);
    $.__views.importe = Ti.UI.createButton({
        title: "Synchronisation",
        id: "importe"
    });
    $.__views.acceuil.add($.__views.importe);
    closeme ? $.__views.importe.addEventListener("click", closeme) : __defers["$.__views.importe!click!closeme"] = true;
    $.__views.authentification = Ti.UI.createButton({
        title: "authentification",
        id: "authentification"
    });
    $.__views.acceuil.add($.__views.authentification);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.importe!click!closeme"] && $.__views.importe.addEventListener("click", closeme);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;