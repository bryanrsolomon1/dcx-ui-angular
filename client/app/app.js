'use strict';

// Declare app level module which depends on views, and components
angular
    .module('DCX', [
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'ngAria',
        'ngIdle'
    ])
    .config(function(ENVIRONMENT, ENVIRONMENT_TYPES, $logProvider, IdleProvider, KeepaliveProvider, LOGIN_TIMEOUT_MIN,
                     LOGOUT_WARNING_SECONDS){

        $logProvider.debugEnabled(ENVIRONMENT === ENVIRONMENT_TYPES.DEV);

        IdleProvider.idle(Number(LOGIN_TIMEOUT_MIN) * 60);
        IdleProvider.timeout(LOGOUT_WARNING_SECONDS);
        //KeepaliveProvider.interval(10);

    })
    .run(function($rootScope, AuthFactory, $state, $mdDialog){
        $rootScope.$on('$stateChangeStart', function(event, next){
            if(next.name !== "root.login") {
                var authorizedRoles = next.data.authorizedRoles;
                if(!AuthFactory.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    if(AuthFactory.isAuthenticated()) {
                        // user is not allowed
                        $mdDialog.show({
                                           templateUrl: "app/components/userNotAuthorizedDialog/userNotAuthorizedDialog.html",
                                           controller: "UserNotAuthorizedDialogCtrl",
                                           controllerAs: "UserNot"
                                       });
                    } else {
                        // user is not logged in
                        if($state.$current.name !== ("root.login")) {
                            $state.go("root.login");
                        }
                    }
                }
            }
        });
    });
