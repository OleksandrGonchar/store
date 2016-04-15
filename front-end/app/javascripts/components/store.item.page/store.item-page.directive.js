(function () {
    "use strict";

    angular.module("store.item-page.controller", [])
        .controller("itemPageController", itemPageDir);

    function itemPageDir() {
        return {
            restrict: "A",
            templateUrl: "javascripts/components/store.item-list/store.item-page.html",
            controller: itemPage
        }
    }

    itemPage.$inject = ["$element", "$scope", "$http"];
    function itemPage($element, $scope, $http) {
        console.log($element);

    }
})();