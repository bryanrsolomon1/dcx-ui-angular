(function(){
    "use strict";

    function LoginCtrl(Logger, AuthFactory, $state, $stateParams){
        var logger = new Logger("LoginCtrl");
        var self = this;

        self.submit = submit;

        if ($stateParams.alertMessage) {
            self.alertMessage = $stateParams.alertMessage;
        }

        function submit(newUser){
            AuthFactory.login(newUser.username, newUser.password)
                       .then(function(){
                           $state.go("root.main.map");
                       }, function(errMessage) {
                           self.alertMessage = errMessage;
                       });
        }
    }

    angular.module("DCX")
           .controller("LoginCtrl", LoginCtrl);

})();