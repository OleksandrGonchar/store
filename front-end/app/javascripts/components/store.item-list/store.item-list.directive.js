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