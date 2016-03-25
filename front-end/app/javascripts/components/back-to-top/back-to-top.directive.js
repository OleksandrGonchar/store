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