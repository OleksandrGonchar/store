(function () {
    "use strict";

    angular.module("app", [
            "ui.router",

            "video-catalog.header.directive"
        ])
        .config(uiRouterConfig);

    uiRouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        /* state way */
        $stateProvider
            .state('login', {
                url: '/',
                template: '<h1>Login</h1>'
            });

        /* dashboard way */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'javascripts/dashboard/video-catalog.dashboard.html',
                ncyBreadcrumb: {
                    label: 'Dashboard'
                }
            });

        /* default wey */
        $urlRouterProvider.otherwise('/');
    }
})();
(function(){console.log(333)})();
(function () {
    "use strict";

    angular.module("video-catalog.header.directive", [])
        .directive("header", headerDir);

    headerDir.$inject = ["$state"];
    function headerDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/header/store.header.html',
            controller: Header
        }
    }

    Header.$inject = ["$state"];
    function Header($scope) {
        $scope.logined = 10;
        $scope.logout = 20;
        $scope.user = 30;
        console.log(5);
    }
})();