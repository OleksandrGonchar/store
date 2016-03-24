(function () {
    "use strict";
    var collection = [
        {
            name: "first item",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "first item",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            description: "Harum inventore neque repellendus!"
        },
        {
            name: "first item",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },{
            name: "second item",
            description: " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
        },{
            name: "second third",
            description: "Harum inventore neque repellendus!"
        },{
            name: "second fourth",
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