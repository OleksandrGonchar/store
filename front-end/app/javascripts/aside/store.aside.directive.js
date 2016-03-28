(function () {
    "use strict";

    angular.module("video-catalog.aside.directive", [])
        .directive("aside", asideDir);

    asideDir.$inject = ["$state"];
    function asideDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/aside/store.aside.html',
            controller: Aside
        }
    }

    Aside.$inject = ["$state"];
    function Aside($scope) {
        $scope.logined = 336;
    }
})();