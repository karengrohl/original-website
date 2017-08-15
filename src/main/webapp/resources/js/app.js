var application = angular.module(
    "original-store",
    ["ui.router"]
);

application.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("");
    var root = {
        abstract: true,
        url: "",
        views: {
            "header@": {
                templateUrl: "templates/header.html"
            },
            "footer@": {
                templateUrl: "templates/footer.html"
            }
        }
    };

    var mainPage = {
        url: "",
        views: {
            "main@": {
                templateUrl: "templates/main.html"
            }
        }
    };

    $stateProvider.state("root", root);
    $stateProvider.state("root.main", mainPage);
});