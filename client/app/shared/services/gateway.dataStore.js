/**
 * Created by solomonb on 5/27/2016.
 */
(function(){
    "use strict";

    function GatewayDataStore(){

        var gateways = [];

        return {
            addGateway: addGateway,
            removeGatewayByIndex: removeGatewayByIndex,
            getGatewayByIndex: getGatewayByIndex,
            getGateways: getGateways
        };

        function addGateway(gateway){
            gateways.push(gateway);
        }

        function removeGatewayByIndex(index){
            gateways = gateways.splice(index, 1);
        }

        function getGatewayByIndex(index){
            return gateways[index];
        }

        function getGateways(){
            return gateways;
        }
    }

    angular.module("DCX")
           .factory("GatewayDataStore", GatewayDataStore);

})();