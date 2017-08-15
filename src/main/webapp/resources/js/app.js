var application = angular.module(
    "original-store",
    ["ui.router"]
);

application.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("");
    var templateFolder = "templates";
    var root = {
        abstract: true,
        url: "",
        views: {
            "header@": {
                templateUrl: templateFolder + "/header.html"
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
                templateUrl: templateFolder + "/main.html"
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
                templateUrl: templateFolder + "/store.html"
            }
        }
    };

    $stateProvider.state("root", root);
    $stateProvider.state("root.main", main);
    $stateProvider.state("root.stores", stores);
    $stateProvider.state("root.store", store);
});