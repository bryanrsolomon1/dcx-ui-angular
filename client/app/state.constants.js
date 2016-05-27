/**
 * Created by KGraham on 5/26/16.
 */
(function() {
    "use strict";
    
    angular.module("DCX")
        .constant("NODES_STATE", "root.main.nodes")
        .constant("DEVICES_STATE", "root.main.devices")
        .constant("GATEWAYS_STATE", "root.main.gateways")
        .constant("GROUPS_STATE", "root.main.groups")
        .constant("PARAMETERS_STATE", "root.main.parameters")
        .constant("EVENTS_STATE", "root.main.events")
        .constant("MAP_STATE", "root.main.map")
        .constant("DASHBOARD_STATE", "root.main.dashboard")
        .constant("DEVICE_TEST_STATE", "root.main.deviceTest")
        .constant("SETTINGS_STATE", "root.main.settings")
        .constant("ABOUT_STATE", "root.main.about")
        .constant("VCX_DEVICES_STATE", "root.main.vcxDevices")
        .constant("VCX_PARAMETERS_STATE", "root.main.vcxParameters")
        .constant("VCX_TEMPLATES_STATE", "root.main.vcxTemplates");
    
})();