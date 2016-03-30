(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .directive("itemlist", asideDir);

    function asideDir() {
        return {
            restrict: "A",
            templateUrl: "javascripts/components/store.item-list/store.item-list.html",
            controller: Aside
        }
    }

    Aside.$inject = ["$element", "$scope", "$http"];
    function Aside( $element, $scope, $http) {
        $element.bind('ready', function(e){
            console.log(e)
        });
        console.log($element);
        $http({
            method: 'GET',
            url: 'item'
        }).then(function successCallback(response) {
            $scope.collection = response.data;
            $scope.alreadyLoad = "already-load";
        }, function errorCallback(response) {
            console.log(response);
        });
    }
})();