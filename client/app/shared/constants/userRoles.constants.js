(function(){
    "use strict";

    angular.module("DCX")
           .constant("USER_ROLES", {
               ADMIN: "admin",
               EDITOR: "editor",
               GUEST: "guest"
           });

})();