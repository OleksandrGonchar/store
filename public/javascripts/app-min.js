!function(){"use strict";function e(e,t){e.state("login",{url:"/",template:"<h1>Login</h1>"}),e.state("dashboard",{url:"/dashboard",templateUrl:"javascripts/dashboard/video-catalog.dashboard.html",ncyBreadcrumb:{label:"Dashboard"}}),t.otherwise("/")}angular.module("app",["ui.router","video-catalog.header.directive","video-catalog.aside.directive","store.item-list.directive","video-catalog.footer.directive","store.backToTop.directive"]).config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){console.log(333)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/aside/store.aside.html",controller:t}}function t(e){e.logined=10,e.logout=20,e.user=30,console.log(50)}angular.module("video-catalog.aside.directive",[]).directive("aside",e),e.$inject=["$state"],t.$inject=["$state"]}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/footer/store.footer.html",controller:t}}function t(e){}angular.module("video-catalog.footer.directive",[]).directive("footer",e),e.$inject=["$state"],t.$inject=["$state"]}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/header/store.header.html",controller:t}}function t(e){e.logined=10,e.logout=20,e.user=30,console.log(50)}angular.module("video-catalog.header.directive",[]).directive("header",e),e.$inject=["$state"],t.$inject=["$state"]}(),function(){"use strict";function e(){return{restrict:"A",template:'<h1 ng-click="gotoBottom()">OPACHA!</h1>',controller:"ScrollController"}}angular.module("anchorScrollExample",[]).controller("ScrollController",["$scope","$location","$anchorScroll",function(e,t,i){function o(){function e(){var t;c?(window.scrollBy(0,-n),t=setTimeout(e,a),c--,console.log(window.pageYOffset-n)):clearTimeout(t)}var t=window.pageYOffset,i=100,o=2,r=60,c=o*r,n=(t-i)/c,a=1e3*o/c;e()}e.gotoBottom=function(){o()}}]),angular.module("store.backToTop.directive",["anchorScrollExample"]).directive("backToTop",e)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/components/store.item-list/store.item-list.html",controller:t}}function t(e){e.collection=i}var i=[{name:"1 first item",href:"http://dummyimage.com/600x400/023/fff.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{name:"2 second item",href:"http://dummyimage.com/600x400/023/fff.jpg",description:" Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"},{name:"3 second third",href:"http://dummyimage.com/600x400/023/fff.jpg",description:"Harum inventore neque repellendus!"},{name:"4 first item",href:"http://dummyimage.com/600x400/023/fff.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{name:"5 second item",href:"http://dummyimage.com/600x400/023/fff.jpg",description:" Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"},{name:"6 second third",href:"http://dummyimage.com/600x400/023/fff.jpg",description:"Harum inventore neque repellendus!"},{name:"7 first item",href:"http://dummyimage.com/600x400/023/fff.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}];angular.module("store.item-list.directive",[]).directive("itemlist",e),t.$inject=["$scope"]}();