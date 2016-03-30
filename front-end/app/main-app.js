(function () {
    "use strict";

    angular.module("app", [
            "ui.router",

            "video-catalog.header.directive",
            "video-catalog.aside.directive",
            "store.item-list.directive",
            "video-catalog.footer.directive",
            "store.backToTop.directive",
            "store.pre-loader.directive"
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