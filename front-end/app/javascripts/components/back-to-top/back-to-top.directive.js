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

                    setTimeout(function() {
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
        return {
            restrict: "A",
            template: '<h1 class="back-to-top" ng-click="gotoBottom()">OPACHA!</h1>',
            controller: "ScrollController"
        }
    }
})();