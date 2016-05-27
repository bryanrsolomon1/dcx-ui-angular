/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function Routes($stateProvider, EVENTS_STATE, MAP_STATE, DASHBOARD_STATE, DEVICE_TEST_STATE, SETTINGS_STATE, ABOUT_STATE) {

        $stateProvider
            .state(EVENTS_STATE, {
                url: "events",
                templateUrl: "app/components/events/events.html",
                controller: "EventsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Events");
                }
            })
            .state(MAP_STATE, {
                url: "map",
                templateUrl: "app/components/map/map.html",
                controller: "MapCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Inventory View");
                }
            })
            .state(DASHBOARD_STATE, {
                url: "dashboard",
                templateUrl: "app/components/dashboard/dashboard.html",
                controller: "DashboardCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("System Overview Dashboard");
                }
            })
            .state(DEVICE_TEST_STATE, {
                url: "deviceTest",
                templateUrl: "app/components/deviceTest/deviceTest.html",
                controller: "DeviceTestCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Device Integration Test");
                }
            })
            .state(SETTINGS_STATE, {
                url: "settings",
                templateUrl: "app/components/settings/settings.html",
                controller: "SettingsCtrl",
                onEnter: function(PageHeader) {
                    PageHeader.setPageHeader("Settings");
                }
            })
            .state(ABOUT_STATE, {
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