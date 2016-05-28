/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/map");

        $stateProvider.state("root", {
                abstract: true,
                url: "/",
                templateUrl: "app/components/root/root.html"
            })
            .state("root.main", {
                abstract: true,
                views: {
                    navBar: {
                        templateUrl: "app/components/navBar/navBar.html",
                        controller: "NavBarCtrl as NavBar"
                    },
                    pageHeader: {
                        templateUrl: "app/components/pageHeader/pageHeader.html",
                        controller: "PageHeaderCtrl as PageHeader"
                    },
                    body: {
                        template: "<div ui-view></div>"
                    }
                }
            });
    }

    angular.module('DCX').config(Routes);

})();
