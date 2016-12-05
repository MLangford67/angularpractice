var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            templateUrl: "hyperpractice/page1.html",
            controller: MyApp.Controllers.Page1Controller,
            controllerAs: 'controller'
        })
            .state('Page1', {
            url: '/page1',
            templateUrl: "hyperpractice/page1.html",
            controller: MyApp.Controllers.Page1Controller
        })
            .state('Page2', {
            url: '/page2',
            templateUrl: "hyperpractice/page2.html",
            controller: MyApp.Controllers.Page2Controller,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController($http) {
                var _this = this;
                $http.get('/api/products').then(function (response) {
                    _this.products = response.data;
                });
            }
            return ProductsController;
        }());
        angular.module("MyApp").controller('ProductsController', ProductsController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
