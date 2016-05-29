(function(){
    "use strict";

    function IdleSessionWarningDialogCtrl(Logger, $interval){
        var logger = new Logger("IdleSessionWarningDialogCtrl");
        var self = this;

        self.countdown = 100;
        
        var counter = 100 / self.countdownSeconds;
        
        $interval(function() {
            self.countdown -= counter;
            self.countdownSeconds -= 1;
        }, 1000);
        
    }

    angular.module("DCX")
           .controller("IdleSessionWarningDialogCtrl", IdleSessionWarningDialogCtrl);

})();