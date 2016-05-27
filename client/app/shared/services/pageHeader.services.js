/**
 * Created by KGraham on 5/26/16.
 */
(function() {
    "use strict";

    function PageHeader () {
        
        var pageHeader = "";
        
        return {
            setPageHeader: setPageHeader,
            getPageHeader: getPageHeader
        };
        
        function setPageHeader(pageHeader_) {
            pageHeader = pageHeader_;
        }

        function getPageHeader() {
            return pageHeader;
        }
    }

    angular.module('DCX').factory('PageHeader', PageHeader);

})();