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