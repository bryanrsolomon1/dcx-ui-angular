'use strict';

// Declare app level module which depends on views, and components
angular.module('DCX', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAria'
]).config(function(ENVIRONMENT, ENVIRONMENT_DEV, $logProvider) {
    $logProvider.debugEnabled(ENVIRONMENT === ENVIRONMENT_DEV);
});
