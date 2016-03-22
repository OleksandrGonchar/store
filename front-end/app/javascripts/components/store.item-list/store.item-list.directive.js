(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .directive("itemlist", asideDir);

    asideDir.$inject = ["$state"];
    function asideDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/components/store.item-list/store.item-list.html',
            controller: Aside
        }
    }

    Aside.$inject = ["$state"];
    function Aside($scope) {

    }
})();