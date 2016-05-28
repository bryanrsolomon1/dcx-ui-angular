/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function GatewaysCtrl($mdDialog, GatewayFactory, GatewayDataStore){

        var self = this;

        self.groupings = groupings();
        self.selectedGrouping = groupings()[0].name;
        self.connections = [{name: "192.168.101.0"}];
        self.drivers = [{name: "Pseudo Driver v01.00.000"}];

        self.addGateway = addGateway;

        function addGateway(ev){
            $mdDialog.show({
                               controller: "AddGatewayDialogCtrl",
                               controllerAs: "AddGateway",
                               locals: {
                                   connections: self.connections,
                                   drivers: self.drivers
                               },
                               bindToController: true,
                               templateUrl: 'app/components/gateways/addGatewayDialog.html',
                               targetEvent: ev,
                               clickOutsideToClose: true
                           })
                     .then(function(newGateway){
                         GatewayDataStore.addGateway(newGateway);
                     }, function(){
                     });
        }

        function groupings(){
            return [
                {name: "None"},
                {name: "Driver"},
                {name: "Node"}
            ]
        }
    }

    angular.module('DCX')
           .controller('GatewaysCtrl', GatewaysCtrl);

})();