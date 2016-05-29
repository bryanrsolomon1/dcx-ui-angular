/**
 * Created by KGraham on 5/26/16.
 */
(function() {
    "use strict";
    
    angular.module("DCX")
        .constant("INVENTORY_STATES", {
            "NODES": "root.main.nodes",
            "DEVICES": "root.main.devices",
            "GATEWAYS": "root.main.gateways",
            "GROUPS": "root.main.groups",
            "PARAMETERS": "root.main.parameters"
        })
        .constant("ADMIN_STATES", {
            "EVENTS": "root.main.events",
            "MAP": "root.main.map",
            "DASHBOARD": "root.main.dashboard",
            "DEVICE_TEST": "root.main.deviceTest",
            "SETTINGS": "root.main.settings",
            "ABOUT": "root.main.about"
        })
        .constant("VCX_STATES", {
            "DEVICES": "root.main.vcxDevices",
            "PARAMETERS": "root.main.vcxParameters",
            "TEMPLATES": "root.main.vcxTemplates"
        });
    
})();