(function(){
    "use strict";

    function RootCtrl(LOGOUT_WARNING_SECONDS){
        
        console.log("Root controller");
        
        var self = this;
        
        self.logoutWarningSeconds = LOGOUT_WARNING_SECONDS;
    }

    angular.module("DCX")
           .controller("RootCtrl", RootCtrl);

})();