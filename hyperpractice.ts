namespace MyApp {

    angular.module('MyApp', ['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
}

namespace MyApp.Controllers {
  class ProductsController {
    public products;

    constructor($http: ng.IHttpService){
        $http.get('/api/products').then((response)=>{
          this.products = response.data;
        });
    }
  }
 angular.module("MyApp").controller('ProductsController', ProductsController);
}



// namespace MyApp.Controllers {
//
//     export class MainController {
//         constructor(public $state: ng.ui.IStateService) { }
//     }
//     angular.module('MyApp').controller('MainController', MainController);
//
//     export class Page1Controller {
//         public message = 'Hello from Page1!!!';
//     }
//
//     export class Page2Controller {
//         public message = 'Hello from Page2!!!';
//
//         doSomething() {
//             this.$state.go('Page1'); // will direct user to given page
//         }
//
//         constructor(private $state: ng.ui.IStateService) { } // $state function for redirecting
//     }
// }

// server side Expressjs code

// import express = require('express');
// const app = express();
//
// app.use(express.static('./ngApp'));
// app.use('/scripts', express.static('./bower_components'));
//
// // Other routes go above the get /*
//
// app.get('/*', function(req, res, next) {
//     res.render('index');
// });
//
// app.listen(3000); //the port you want to use
//

//
//data binding using controllers for single items
//public message = "Welcome!";
//
// class HomeController {
//
//        public friends;
//             constructor() {
//            this.friends = ["Cartman", "Kyle", "Timmy", "Stan", "Kenny"];
//        }
//    }
//
//    angular.module("NewApp").controller("homeController", HomeController);





 // class FavoriteController{
 //   public color = 'green';
 //
 //   pickColor(color){
 //     this.color = color;
 //   }
 // }
 //  angular.module('MyApp').controller("FavoriteController", FavoriteController);


 // class CalculatorController{
 //   public result;
 //   addNums(a, b){
 //     this.result = a + b;
 //   }
 // }
 //  angular.module('MyApp').controller("CalculatorController", CalculatorController);
// class MovieListController{
//   public movies;
//   constructor(){
//     this.movies = [
//       {id: 1, title: "Batman", director: "Nolan"},
//       {id: 2, title: "Superman", director: "Scott"},
//       {id: 3, title: "Spiderman", director: "Wells"}
//     ];
//   }
// }
//   angular.module("MyApp").controller("MovieListController", MovieListController);
// }
