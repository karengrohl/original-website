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
    var ADMIN_FOLDER = "/admin";

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
                controller: "store.controller as sc"
            }
        }
    };

    var sale = {
        url: "/stores/:id/sale/:saleId",
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

    var item = {
        url: "/stores/:storeId/item/:itemId",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/item.html",
                controller: "item.controller as mc"
            }
        }
    };

    var admin = {

        url: "/admin",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + ADMIN_FOLDER + "/admin.html",
                controller: MAIN_CONTROLLER
            }
        }

    };


    var ROOT = "root";
    $stateProvider
        .state(ROOT, root)
        .state("root.main", main)
        .state("root.stores", stores)
        .state("root.store", store)
        .state("root.cart", basket)
        .state("root.news", news)
        //maybe make root.store.sale and root.store.item
        .state("root.sale", sale)
        .state("root.item", item)
        .state("root.admin", admin);

});