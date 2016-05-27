/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function ParametersCtrl($log) {
        $log.debug("Hello from ParametersCtrl")
    }

    angular.module('DCX').controller('ParametersCtrl', ParametersCtrl);

})();