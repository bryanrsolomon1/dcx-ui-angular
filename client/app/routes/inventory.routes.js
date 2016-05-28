/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($stateProvider, INVENTORY_STATES) {

        $stateProvider
            .state(INVENTORY_STATES.NODES, {
                url: "nodes",
                templateUrl: "app/components/nodes/nodes.html",
                controller: "NodesCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Node List");
                }
            })
            .state(INVENTORY_STATES.DEVICES, {
                url: "devices",
                templateUrl: "app/components/devices/devices.html",
                controller: "DevicesCtrl as Devices",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device List");
                }
            })
            .state(INVENTORY_STATES.GATEWAYS, {
                url: "gateways",
                templateUrl: "app/components/gateways/gateways.html",
                controller: "GatewaysCtrl as Gateways",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Gateway List");
                }
            })
            .state(INVENTORY_STATES.GROUPS, {
                url: "groups",
                templateUrl: "app/components/groups/groups.html",
                controller: "GroupsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Groups List");
                }
            })
            .state(INVENTORY_STATES.PARAMETERS, {
                url: "parameters",
                templateUrl: "app/components/parameters/parameters.html",
                controller: "ParametersCtrl as Parameters",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device Parameters");
                }
            });
    }

    angular.module('DCX').config(Routes);

})();
