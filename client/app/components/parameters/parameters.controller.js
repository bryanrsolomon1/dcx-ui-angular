/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function ParametersCtrl(DriverDataStore){

        var self = this;

        self.drivers = angular.copy(DriverDataStore.getDrivers());
        self.setParameters = setParameters;

        function setParameters() {
            if (self.indexSelected) {
                self.parameters = self.drivers[self.indexSelected].parameters;
            }
        }
    }

    angular.module('DCX')
           .controller('ParametersCtrl', ParametersCtrl);

})();