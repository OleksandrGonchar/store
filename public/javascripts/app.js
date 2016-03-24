(function () {
    "use strict";

    angular.module("app", [
            "ui.router",

            "video-catalog.header.directive",
            "video-catalog.aside.directive",
            "store.item-list.directive"
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
        $scope.logined = 10;
        $scope.logout = 20;
        $scope.user = 30;
        console.log(50);
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
    var collection = [
        {
            name: "first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "first item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Harum inventore neque repellendus!"
        },{
            name: "second fourth",
            href: "http://dummyimage.com/600x400/023/fff.jpg",
            description: "Doloribus illo magnam minima?"
        }
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