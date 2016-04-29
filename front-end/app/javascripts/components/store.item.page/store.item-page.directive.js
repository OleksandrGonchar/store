(function () {
    "use strict";

    angular.module("store.item-page.controller", [])
        .controller("itemPageController", itemPage);

    function itemPageDir() {
        return {
            restrict: "A",
            templateUrl: "javascripts/components/store.item-list/store.item-page.html",
            controller: itemPage
        }
    }

    itemPage.$inject = ["$element", "$scope", "$http", "$stateParams"];
    function itemPage($element, $scope, $http, $stateParams) {

        $http({
            method: 'GET',
            url: 'goods/' + $stateParams._id
        }).then(function successCallback(response) {
            $scope.item = response.data;
            $scope.alreadyLoad = "already-load";
            console.log( response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
        console.log($element);
    }
})();