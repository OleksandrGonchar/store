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
(function(){console.log(333)})();
(function () {
    "use strict";

    angular.module("video-catalog.aside.directive", [])
        .directive("aside", asideDir);

    asideDir.$inject = ["$state"];
    function asideDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/aside/store.aside.html',
            controller: Aside
        }
    }

    Aside.$inject = ["$state"];
    function Aside($scope) {
        $scope.logined = 33;
    }
})();
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
        console.log(50);
    }
})();
(function () {
    "use strict";

    angular.module("video-catalog.footer.directive", [])
        .directive("footer", footerDir);

    footerDir.$inject = ["$state"];
    function footerDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/footer/store.footer.html',
            controller: Footer
        }
    }

    Footer.$inject = ["$state"];
    function Footer($scope) {
    }
})();
// Back to top Directive
(function () {
    "use strict";

    angular.module('anchorScrollExample', [])
        .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
            function ($scope) {
                function scrollTo(element, to, duration) {
                    if (duration <= 0) return;
                    var difference = to - element.scrollTop;
                    var perTick = difference / duration * 10;

                    setTimeout(function () {
                        element.scrollTop = element.scrollTop + perTick;
                        if (element.scrollTop === to) return;
                        scrollTo(element, to, duration - 10);
                    }, 10);
                }

                $scope.gotoBottom = function () {
                    scrollTo(document.body, 0, 600);
                };
            }]);

    angular.module("store.backToTop.directive", ["anchorScrollExample"])
        .directive("backToTop", asideDir);

    function asideDir() {
        function svgIcon() {
            return '<div ng-click="gotoBottom()" class="back-to-top" title="Back to top">'+
                '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
                'width="866.929px" height="866.93px" viewBox="0 0 866.929 866.93" style="enable-background:new 0 0 866.929 866.93;"' +
                'xml:space="preserve">' +
                '<g>' +
                '<path d="M144.465,450.93c7.8,46.7,58.9,155.399,159.8,257.5v55.3h362.401v-55v-0.3l36.6-61.5c13.101-21.9,20-47,20-72.5v-187.7 '+
                "c-0.3-16.3-19.199-32.6-45-37.6c-20.5-4-39.6,0.199-49.8,9.6c-0.3-16.3-19.1-32.6-44.899-37.7c-18.5-3.7-36-0.6-46.7,7"+
                "c-3.2-15-21.9-29.2-46.601-34.1c-21.3-4.2-41.199-0.2-51.8,9.1h-0.1c0,0,0,0,0-0.1c-0.5-4.9-27.901-270.3-28-270.7"+
                "c-5.101-46.8-81.2-40.7-81.101,5.8l-0.199,436.5c0,5.2-3.801,9.5-8.9,10.2c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1.1,0.1-1.7,0.1"+
                'c-14.699-0.399-47.8-0.899-80.1-47.6c-4.3-6.2-8.2-11.8-11.7-16.9C195.865,376.229,136.065,400.63,144.465,450.93z"/>'+
                '<path d="M304.465,846.93c0,11,9,20,20,20h322.5c11,0,20-9,20-20v-51.101h-362.5V846.93z"/>'+
                '</g>' +
                '</svg></div>';
        }

        return {
            restrict: "A",
            template: svgIcon(),
            controller: "ScrollController"
        }
    }
})();

(function () {
    "use strict";

    angular.module("store.pre-loader.directive", [])
        .directive("preLoader", preLoad);

    function preLoad() {
        return {
            restrict: "A",
            template: "<div class=\"preload-image\"><svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"842.488px\" height=\"842.488px\" viewBox=\"0 0 842.488 842.488\" style=\"enable-background:new 0 0 842.488 842.488;\"xml:space=\"preserve\"><g><path d=\"M741.744,177.188c-28.1-35.2-61.5-65.3-99.301-89.6c-35.6-22.9-74.299-40-115-50.9c-5.4-1.5-11,1.8-12.4,7.3l-22.199,92.4c-1.301,5.2,1.9,10.5,7,12c59.5,16.5,113.199,51.9,152,100.5c20.4,25.6,36.301,54.1,47.199,84.7c11.301,31.7,17,65,17,99.1c0,78.801-30.699,152.801-86.398,208.5c-55.701,55.701-129.801,86.4-208.5,86.4c-78.801,0-152.801-30.699-208.5-86.4c-55.7-55.699-86.3-129.699-86.3-208.5c0-58.2,16.9-114.5,48.9-162.8c18.3-27.6,40.9-51.7,66.7-71.5c0,0,30.6,40.1,30.6,40.2c5.9,8.4,20,8.1,25.3-1.1c0,0,123.4-215.6,123.601-216.1c5.9-10.2-3.101-23.1-14.7-21.2c0,0-245.3,40.8-245.6,40.8c-10.4,1.7-15.8,14.7-9.8,23.3l24.9,39.6c-37.7,28.1-70.5,62.7-96.8,102.4c-44.5,67.2-68.1,145.4-68.1,226.3c0,55.301,10.8,109,32.2,159.6c20.6,48.801,50.2,92.701,87.8,130.301s81.5,67.199,130.3,87.799c50.6,21.4,104.3,32.201,159.6,32.201c55.299,0,109-10.801,159.6-32.201c48.801-20.6,92.699-50.199,130.301-87.799c37.6-37.6,67.199-81.5,87.799-130.301c21.4-50.6,32.201-104.299,32.201-159.6c0-47.2-8-93.6-23.701-137.7C792.244,252.288,770.145,212.688,741.744,177.188z\"/></g></svg></div>"
        }
    }
})();

(function () {
    "use strict";

    angular.module("store.item-list.directive", [])
        .controller("itemlist", itemlist);

    function asideDir() {
        return {
            //restrict: "A",
            //templateUrl: "javascripts/components/store.item-list/store.item-list.html",
            //controller: Aside
        }
    }

    itemlist.$inject = ["$element", "$scope", "$http"];
    function itemlist( $element, $scope, $http) {
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