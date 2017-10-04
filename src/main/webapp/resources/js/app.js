var application = angular.module(
    "original-store",
    [
        "ui.router",
        "ui.bootstrap",
        'ngAnimate',
        'yaMap',
        'ui.mask',
        "xeditable"
    ]
);

application.run(function ($rootScope, editableOptions) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
    editableOptions.theme = 'bs3';
});

application.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var TEMPLATE_FOLDER = "templates";
    var STORE_CONTROLLER = "store.controller as sc";
    var PROFILE_FOLDER = "/profile";
    var MAIN_CONTROLLER = "main.controller as mc";
    var ROOT = "root";

    var root = {
        abstract: true,
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

    var main = {
        url: "/",
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
                controller: "stores.controller as sc"
            }
        }
    };

    var store = {
        url: "/stores/:id",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/store.html",
                controller: STORE_CONTROLLER
            }
        }
    };

    var sale = {
        url: "/stores/:id/sale/:saleId",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + "/store.html",
                controller: STORE_CONTROLLER
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
                controller: "item.controller as ic"
            }
        }
    };

    var user = {
        abstract: true,
        url: "/user",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + "/profile.html",
                controller: "profile as ctrl"
            }
        }

    };

    var userSettings = {
        url: "",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + "/settings.html"
            }
        }
    };

    var userOrders = {
        url: "",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + "/orders.html"
            }
        }
    };

    var ADMIN_FOLDER = "/admin";
    var admin = {
        abstract: true,
        url: "/admin",
        views: {
            "main@": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + ADMIN_FOLDER + "/admin.html",
                controller: "profile as ctrl"
            }
        }
    };

    var storeSettings = {
        url: "/store/settings",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + ADMIN_FOLDER + "/settings.html"
            }
        }
    };

    var storeCatalog = {
        url: "/store/catalog",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + ADMIN_FOLDER + "/catalog.html"
            }
        }
    };

    var storeSales = {
        url: "/store/sales",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + ADMIN_FOLDER + "/sales.html"
            }
        }
    };

    var storeOrders = {
        url: "/store/orders",
        views: {
            "": {
                templateUrl: TEMPLATE_FOLDER + PROFILE_FOLDER + ADMIN_FOLDER + "/orders.html"
            }
        }
    };

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
        .state("root.user", user)
        .state("root.user.settings", userSettings)
        .state("root.user.orders", userOrders)
        .state("root.admin", admin)
        .state("root.admin.settings", storeSettings)
        .state("root.admin.catalog", storeCatalog)
        .state("root.admin.sales", storeSales)
        .state("root.admin.orders", storeOrders);
});