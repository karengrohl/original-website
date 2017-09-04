(function () {
    angular.module("original-store").directive("saleCard", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/saleCard.html",
            controller: "main.controller as mc"
        };
    }
})();