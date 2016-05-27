/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function NavBarCtrl(NODES_STATE, DEVICES_STATE, GATEWAYS_STATE, GROUPS_STATE, PARAMETERS_STATE,
                        EVENTS_STATE, MAP_STATE, DASHBOARD_STATE, DEVICE_TEST_STATE, SETTINGS_STATE, ABOUT_STATE,
                        VCX_DEVICES_STATE, VCX_PARAMETERS_STATE, VCX_TEMPLATES_STATE) {
        
        console.log("hello from the other side");

        var self = this; 

        self.menuItems = menuItems();
        self.inventoryMenuItems = inventoryMenuItems();
        self.adminMenuItems = adminMenuItems();
        self.vcxMenuItems = vcxMenuItems();

        function menuItems() {
            return inventoryMenuItems().concat(adminMenuItems()).concat(vcxMenuItems());
        }
        
        function inventoryMenuItems() {
            return [
                {
                    title: "Nodes",
                    state: NODES_STATE
                },
                {
                    title: "Devices",
                    state: DEVICES_STATE
                },
                {
                    title: "Gateways",
                    state: GATEWAYS_STATE
                },
                {
                    title: "Groups",
                    state: GROUPS_STATE
                },
                {
                    title: "Parameters",
                    state: PARAMETERS_STATE
                }]
        }

        function adminMenuItems() {
            return [
                {
                    title: "Events",
                    state: EVENTS_STATE
                },
                {
                    title: "Map",
                    state: MAP_STATE
                },
                {
                    title: "Dashboard",
                    state: DASHBOARD_STATE
                },
                {
                    title: "Device Test",
                    state: DEVICE_TEST_STATE
                },
                {
                    title: "Settings",
                    state: SETTINGS_STATE
                },
                {
                    title: "About",
                    state: ABOUT_STATE
                }]
        }

        function vcxMenuItems() {
            return [
                {
                    title: "Devices",
                    state: VCX_DEVICES_STATE
                },
                {
                    title: "Parameters",
                    state: VCX_PARAMETERS_STATE
                },
                {
                    title: "Template Library",
                    state:  VCX_TEMPLATES_STATE
                }]
        }
    }

    angular.module('DCX').controller('NavBarCtrl', NavBarCtrl);

})();