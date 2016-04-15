(function () {
    "use strict";

    angular.module("app", [
            "ui.router",

            "video-catalog.header.directive",
            "video-catalog.aside.directive",
            "store.item-list.directive",
            "video-catalog.footer.directive",
            "store.backToTop.directive",
            "store.pre-loader.directive",
            "store.item-page.controller"
        ])
        .config(uiRouterConfig);

    uiRouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        /* state way */
        /* dashboard way */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'javascripts/components/store.item-list/store.item-list.html',
                ncyBreadcrumb: {
                    label: 'Dashboard'
                },
                controller: "itemlist"
            })
            .state('item', {
                url: '/item',
                templateUrl: 'javascripts/components/store.item.page/store.item-page.html',
                ncyBreadcrumb: {
                    label: 'itemPageController'
                },
                controller: 'itemPageController'
            });

        /* default wey */
        $urlRouterProvider.otherwise('/dashboard');
    }
})();