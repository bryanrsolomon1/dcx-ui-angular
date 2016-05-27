/**
 * Created by KGraham on 5/26/16.
 */
(function () {
    "use strict";

    function PageHeaderCtrl($scope, PageHeader) {
        var self = this;
        
        self.pageHeader = PageHeader.getPageHeader();
        
        $scope.$watch(function() {
            return PageHeader.getPageHeader();
        }, function(newVal, oldVal) {
            if (newVal !== oldVal) {
                self.pageHeader = newVal;
            }
        });
    }

    angular.module('DCX').controller('PageHeaderCtrl', PageHeaderCtrl);

})();