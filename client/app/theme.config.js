/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function ThemeConfig($mdThemingProvider) {

        var dcxOrangeMap = $mdThemingProvider.extendPalette("blue", {
            "500": "f6a548"
        });

        var dcxBlueMap = $mdThemingProvider.extendPalette("blue", {
            "500": "00aadf"
        });

        $mdThemingProvider.definePalette("dcxOrange", dcxOrangeMap);
        $mdThemingProvider.definePalette("dcxBlue", dcxBlueMap);

        $mdThemingProvider.theme("default")
            .primaryPalette("dcxOrange", {
                "hue-1": "800"
            })
            .warnPalette("dcxBlue")
            .accentPalette("grey");
    }

    angular.module('DCX').config(ThemeConfig);

})();