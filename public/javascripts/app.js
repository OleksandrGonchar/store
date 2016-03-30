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
        $scope.logined = 33;
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
        var xhr = new XMLHttpRequest();

        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', '/items', false);

        // 3. Отсылаем запрос
        xhr.send();

        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            // обработать ошибку
            alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            alert( xhr.responseText ); // responseText -- текст ответа.
        }


        $scope.collection = collection;
    }
})();