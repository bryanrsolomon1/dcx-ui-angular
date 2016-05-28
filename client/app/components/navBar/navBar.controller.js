/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function NavBarCtrl(INVENTORY_STATES, ADMIN_STATES, VCX_STATES) {
        
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
                    state: INVENTORY_STATES.NODES
                },
                {
                    title: "Devices",
                    state: INVENTORY_STATES.DEVICES
                },
                {
                    title: "Gateways",
                    state: INVENTORY_STATES.GATEWAYS
                },
                {
                    title: "Groups",
                    state: INVENTORY_STATES.GROUPS
                },
                {
                    title: "Parameters",
                    state: INVENTORY_STATES.PARAMETERS
                }]
        }

        function adminMenuItems() {
            return [
                {
                    title: "Events",
                    state: ADMIN_STATES.EVENTS
                },
                {
                    title: "Map",
                    state: ADMIN_STATES.MAP
                },
                {
                    title: "Dashboard",
                    state: ADMIN_STATES.DASHBOARD
                },
                {
                    title: "Device Test",
                    state: ADMIN_STATES.DEVICE_TEST
                },
                {
                    title: "Settings",
                    state: ADMIN_STATES.SETTINGS
                },
                {
                    title: "About",
                    state: ADMIN_STATES.ABOUT
                }]
        }

        function vcxMenuItems() {
            return [
                {
                    title: "Devices",
                    state: VCX_STATES.DEVICES
                },
                {
                    title: "Parameters",
                    state: VCX_STATES.PARAMETERS
                },
                {
                    title: "Template Library",
                    state:  VCX_STATES.TEMPLATES
                }]
        }
    }

    angular.module('DCX').controller('NavBarCtrl', NavBarCtrl);

})();