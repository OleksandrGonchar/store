(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .directive("itemlist", asideDir);

    function asideDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/components/store.item-list/store.item-list.html',
            controller: Aside
        }
    }

    Aside.$inject = ["$scope", "$http"];
    function Aside($scope, $http) {
        $http.get('item').success(function(data) {
            $scope.collection = data;
            console.log(data);
        });

        $scope.collection = collection;
    }
})();