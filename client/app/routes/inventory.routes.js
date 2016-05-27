/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($stateProvider, NODES_STATE, DEVICES_STATE, GATEWAYS_STATE, GROUPS_STATE, PARAMETERS_STATE) {

        $stateProvider
            .state(NODES_STATE, {
                url: "nodes",
                templateUrl: "app/components/nodes/nodes.html",
                controller: "NodesCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Node List");
                }
            })
            .state(DEVICES_STATE, {
                url: "devices",
                templateUrl: "app/components/devices/devices.html",
                controller: "DevicesCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device List");
                }
            })
            .state(GATEWAYS_STATE, {
                url: "gateways",
                templateUrl: "app/components/gateways/gateways.html",
                controller: "GatewaysCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Gateway List");
                }
            })
            .state(GROUPS_STATE, {
                url: "groups",
                templateUrl: "app/components/groups/groups.html",
                controller: "GroupsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Groups List");
                }
            })
            .state(PARAMETERS_STATE, {
                url: "parameters",
                templateUrl: "app/components/parameters/parameters.html",
                controller: "ParametersCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device Parameters");
                }
            });
    }

    angular.module('DCX').config(Routes);

})();
