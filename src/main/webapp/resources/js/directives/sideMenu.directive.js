(function () {
    angular.module("original-store").directive("sideMenu", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/sideMenu.html",
            controller: "main.controller as mc"
        };
    }
})();