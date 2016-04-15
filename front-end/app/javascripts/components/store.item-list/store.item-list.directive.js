(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .controller("itemlist", asideDir);

    function asideDir() {
        return {
            //restrict: "A",
            //templateUrl: "javascripts/components/store.item-list/store.item-list.html",
            //controller: Aside
        }
    }

    Aside.$inject = ["$element", "$scope", "$http"];
    function Aside( $element, $scope, $http) {
        console.log($element);
        $http({
            method: 'GET',
            url: 'item'
        }).then(function successCallback(response) {
            $scope.collection = response.data;
            $scope.alreadyLoad = "already-load";
            var a = document.getElementsByClassName("item-image");
            //a.bind('load', alert(33))
            console.log(a);
        }, function errorCallback(response) {
            console.log(response);
        });
    }
})();