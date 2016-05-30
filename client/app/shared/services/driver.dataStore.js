(function(){
    "use strict";

    function DriverDataStore(){

        var drivers = [{
            name: "NantHealth Pseudo v01.00.000",
            parameters: [
                {name: "ART_DBP", uom: "mmHg", description: "Pseudo ART_DBP"},
                {name: "CO", uom: "L/min", description: "Pseudo CO"},
                {name: "ETCO2", uom: "mmHg", description: "Pseudo ETCO2"},
                {name: "FIO2", uom: "%", description: "Pseudo FIO2"},
                {name: "HR", uom: "bpm", description: "Pseudo HR"},
                {name: "INSPTM", uom: "s", description: "Pseudo INSPTM"},
                {name: "MESSAGE_CONTROL_ID", uom: "", description: "Pseudo Message Control ID"},
                {name: "MV", uom: "L/min", description: "Pseudo MV"}
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