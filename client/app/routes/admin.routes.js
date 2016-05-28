/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($stateProvider, ADMIN_STATES) {

        $stateProvider
            .state(ADMIN_STATES.EVENTS, {
                url: "events",
                templateUrl: "app/components/events/events.html",
                controller: "EventsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Events");
                }
            })
            .state(ADMIN_STATES.MAP, {
                url: "map",
                templateUrl: "app/components/map/map.html",
                controller: "MapCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Overview Map");
                }
            })
            .state(ADMIN_STATES.DASHBOARD, {
                url: "dashboard",
                templateUrl: "app/components/dashboard/dashboard.html",
                controller: "DashboardCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Overview Dashboard");
                }
            })
            .state(ADMIN_STATES.DEVICE_TEST, {
                url: "deviceTest",
                templateUrl: "app/components/deviceTest/deviceTest.html",
                controller: "DeviceTestCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device Integration Test");
                }
            })
            .state(ADMIN_STATES.SETTINGS, {
                url: "settings",
                templateUrl: "app/components/settings/settings.html",
                controller: "SettingsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Settings");
                }
            })
            .state(ADMIN_STATES.ABOUT, {
                url: "about",
                templateUrl: "app/components/about/about.html",
                controller: "AboutCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("About");
                }
            });
    }

    angular.module('DCX').config(Routes);

})();