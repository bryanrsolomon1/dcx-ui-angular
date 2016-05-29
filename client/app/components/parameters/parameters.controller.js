/**
 * Created by KGraham on 5/26/16.
 */
(function(){
    "use strict";

    function ParametersCtrl(DriverDataStore){

        var self = this;

        self.drivers = angular.copy(DriverDataStore.getDrivers());
        self.parametersSelected = [];
        self.conversions = conversions();
        self.setParameters = setParameters;
        self.toggleParameterSelected = toggleParameterSelected;
        self.toggleExtended = toggleExtended;

        function setParameters(){
            if(self.indexSelected) {
                self.parameters = self.drivers[self.indexSelected].parameters;
            }
        }

        function toggleParameterSelected(parameter){
            parameter.selected = parameter.selected ? false : true;
        }

        function toggleExtended(parameterName){
            if(!self[parameterName]) {
                self[parameterName] = {};
            }
            self[parameterName].extended = self[parameterName].extended ? false : true;
        }

        function conversions(){
            return ["C to F", "C to K", "F to C", "F to K", "K to C", "K to F", "L to mL", "mL to L", "L/m to L/h",
                "L/m to L/s", "L/m to mL/h"];
        }
    }

    angular.module('DCX')
           .controller('ParametersCtrl', ParametersCtrl);

})();