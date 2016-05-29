/**
 * Created by KGraham on 5/26/16.
 */
(function() {
    "use strict";
    
    angular.module("DCX")
        .constant("ENVIRONMENT_TYPES", {
            DEV: "development",
            ITG: "integration",
            PRO: "production"
        });
    
})();