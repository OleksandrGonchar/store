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
            return '<div ng-click="gotoBottom()" class="back-to-top">'+
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
                '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+
                '<g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+
                '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+ '<g>'+ '</g>'+
                '</svg></div>';
        }

        return {
            restrict: "A",
            template: svgIcon(),
            controller: "ScrollController"
        }
    }
})();
