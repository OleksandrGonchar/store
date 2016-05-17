(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .controller("itemlist", itemlist);

    itemlist.$inject = ["$element", "$scope", "$http"];
    function itemlist( $element, $scope, $http) {
        console.log($element);
        $http({
            method: 'GET',
            url: 'goods'
        }).then(function successCallback(response) {
            $scope.fullCollection = response.data;
            $scope.collection = $scope.fullCollection;
            console.log(response.data, " \n", $scope.fullCollection);
            $scope.alreadyLoad = "already-load";

            $scope.showMore = function(fullCollection) {

            };

        }, function errorCallback(response) {
            console.log(response);
        });
    }
})();