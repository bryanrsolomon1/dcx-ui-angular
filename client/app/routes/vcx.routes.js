/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($stateProvider, VCX_STATES) {

        $stateProvider
            .state(VCX_STATES.DEVICES, {
                url: "vcxDevices",
                templateUrl: "app/components/vcxDevices/vcxDevices.html",
                controller: "VCXDevicesCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("VitalsConX Devices");
                }
            })
            .state(VCX_STATES.PARAMETERS, {
                url: "vcxParameters",
                templateUrl: "app/components/vcxParameters/vcxParameters.html",
                controller: "VCXParametersCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("VitalsConX Parameter Mappings");
                }
            })
            .state(VCX_STATES.TEMPLATES, {
                url: "vcxTemplates",
                templateUrl: "app/components/vcxTemplates/vcxTemplates.html",
                controller: "VCXTemplatesCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("VitalsConX Template Library");
                }
            });
    }

    angular.module('DCX').config(Routes);

})();