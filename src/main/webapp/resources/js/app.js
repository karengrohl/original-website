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
    var TEMPLATE_FOLDER = "templates";
    var root = {
        abstract: true,
        url: "",
        views: {
            "header@": {
                templateUrl: TEMPLATE_FOLDER + "/header.html",
                controller: "header.controller as hc"
            },
            "footer@": {
                templateUrl: TEMPLATE_FOLDER + "/footer.html"
            }
        }
    };

    var MAIN_CONTROLLER = "main.controller as mc";
    var main = {
        url: "",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/main.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    var stores = {
        url: "/stores",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/stores.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    var store = {
        url: "/stores/:id",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/store.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    var storeWithSale = {
        url: "/stores/:id/:saleId",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/store.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    var basket = {
        url: "/cart",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/cart.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    var news = {
        url: "/news",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/news.html",
                controller: MAIN_CONTROLLER
            }
        }
    };

    $stateProvider.state("root", root);
    $stateProvider.state("root.main", main);
    $stateProvider.state("root.stores", stores);
    $stateProvider.state("root.store", store);
    $stateProvider.state("root.cart", basket);
    $stateProvider.state("root.news", news);
    $stateProvider.state("root.storeWithSale", storeWithSale);
});