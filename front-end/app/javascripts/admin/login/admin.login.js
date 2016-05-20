(function () {
    "use strict";

    angular.module("store.admin.directive", [])
        .directive("adminLogin", adminDirective);

    adminDirective.$inject = ["$state"];
    function adminDirective() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/admin/login/admin.login.html',
            controller: adminLogin
        }
    }

    adminLogin.$inject = ["$scope", "$http"];
    function adminLogin($scope, $http) {
        $scope.login = function(){
            $http({
                method: 'POST',
                url: 'admin/login/',
                body: {
                    name: $scope.name,
                    pass: $scope.pass
                }
            }).then(function successCallback(response) {
                console.log( response.data);
            }, function errorCallback(response) {
                console.log(response);
            });
            console.log($scope.name);
            console.log($scope.pass);
        }
    }
})();
