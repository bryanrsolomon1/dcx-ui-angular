/**
 * Created by solomonb on 5/27/2016.
 */
(function(){
    "use strict";

    function DriverDataStore(){

        var drivers = [{
            name: "NantHealth Pseudo v01.00.000",
            parameters: [
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"}
            ]
        }];

        return {
            addDriver: addDriver,
            removeDriverByIndex: removeDriverByIndex,
            getDriverByIndex: getDriverByIndex,
            getDrivers: getDrivers
        };

        function addDriver(gateway){
            drivers.push(gateway);
        }

        function removeDriverByIndex(index){
            drivers = drivers.splice(index, 1);
        }

        function getDriverByIndex(index){
            return drivers[index];
        }

        function getDrivers(){
            return drivers;
        }
    }

    angular.module("DCX")
           .factory("DriverDataStore", DriverDataStore);

})();