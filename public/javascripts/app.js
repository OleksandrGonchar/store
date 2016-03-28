(function () {
    "use strict";

    angular.module("app", [
            "ui.router",

            "video-catalog.header.directive",
            "video-catalog.aside.directive",
            "store.item-list.directive",
            "video-catalog.footer.directive",
            "store.backToTop.directive"
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
        $scope.logined = 336;
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
// Back to top Directive
(function () {
    "use strict";

    angular.module('anchorScrollExample', [])
        .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
            function ($scope, $location, $anchorScroll) {
                function setParam(){
                    function pageScroll() {
                        var scrolldelay;
                        if(countStep){
                            window.scrollBy(0, -stepScrol);
                            scrolldelay = setTimeout(pageScroll, stepTime);
                            countStep--;
                            console.log(window.pageYOffset - stepScrol);
                        } else {
                            clearTimeout(scrolldelay);
                        }
                    }
                    var currentPosition = window.pageYOffset,
                        targetPosition = 100,
                        secondsCount = 2,
                        clipCount = 60,
                        countStep = secondsCount * clipCount,
                        stepScrol = (currentPosition - targetPosition)/countStep,
                        stepTime = secondsCount * 1000 / countStep;
                    pageScroll();
                }

                $scope.gotoBottom = function () {
                    setParam();
                };
            }]);

    angular.module("store.backToTop.directive", ["anchorScrollExample"])
        .directive("backToTop", asideDir);

    function asideDir() {
        return {
            restrict: "A",
            template: '<h1 ng-click="gotoBottom()">OPACHA!</h1>',
            controller: "ScrollController"
        }
    }
})();
(function () {
    "use strict";
    var collection = [
        {
            name: "1 first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "2 second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "3 second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "4 first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "5 second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "6 second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "7 first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }/*,{
            name: "8 second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "9 second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },{
            name: "10 second fourth",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Doloribus illo magnam minima?"
        }*/
    ];

    angular.module("store.item-list.directive", [])
        .directive("itemlist", asideDir);

    function asideDir() {
        return {
            restrict: "A",
            templateUrl: 'javascripts/components/store.item-list/store.item-list.html',
            controller: Aside
        }
    }

    Aside.$inject = ["$scope"];
    function Aside($scope) {
        $scope.collection = collection;
    }
})();