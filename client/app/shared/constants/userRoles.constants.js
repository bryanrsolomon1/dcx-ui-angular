/**
 * Created by solomonb on 5/29/2016.
 */
(function(){
    "use strict";

    angular.module("DCX")
           .constant("USER_ROLES", {
               ADMIN: "admin",
               EDITOR: "editor",
               GUEST: "guest"
           });

})();