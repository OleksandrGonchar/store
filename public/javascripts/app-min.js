!function(){"use strict";function e(e,t){e.state("login",{url:"/",template:"<h1>Login</h1>"}),e.state("dashboard",{url:"/dashboard",templateUrl:"javascripts/dashboard/video-catalog.dashboard.html",ncyBreadcrumb:{label:"Dashboard"}}),t.otherwise("/")}angular.module("app",["ui.router","video-catalog.header.directive","video-catalog.aside.directive"]).config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){console.log(333)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/header/store.header.html",controller:t}}function t(e){e.logined=10,e.logout=20,e.user=30,console.log(50)}angular.module("video-catalog.header.directive",[]).directive("header",e),e.$inject=["$state"],t.$inject=["$state"]}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"javascripts/aside/store.aside.html",controller:t}}function t(e){e.logined=10,e.logout=20,e.user=30,console.log(50)}angular.module("video-catalog.aside.directive",[]).directive("aside",e),e.$inject=["$state"],t.$inject=["$state"]}();