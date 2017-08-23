var application = angular.module(
    "original-store",
    [
        "ui.router",
        "ui.bootstrap",
        'ngAnimate'
    ]
);

application.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("");
    var templateFolder = "templates";
    var root = {
        abstract: true,
        url: "",
        views: {
            "header@": {
                templateUrl: templateFolder + "/header.html",
                controller: "header.controller as hc"
            },
            "footer@": {
                templateUrl: templateFolder + "/footer.html"
            }
        }
    };

    var main = {
        url: "",
        views: {
            "main@": {
                templateUrl: templateFolder + "/main.html",
                controller: "main.controller as mc"
            }
        }
    };

    var stores = {
        url: "/stores",
        views: {
            "main@": {
                templateUrl: templateFolder + "/stores.html"
            }
        }
    };

    var store = {
        url: "/stores/:id",
        views: {
            "main@": {
                templateUrl: templateFolder + "/store.html",
                controller: "main.controller as mc"
            }
        }
    };

    var basket = {
        url: "/cart",
        views: {
            "main@": {
                templateUrl: templateFolder + "/cart.html",
                controller: "main.controller as mc"
            }
        }
    };

    $stateProvider.state("root", root);
    $stateProvider.state("root.main", main);
    $stateProvider.state("root.stores", stores);
    $stateProvider.state("root.store", store);
    $stateProvider.state("root.cart", basket);
});