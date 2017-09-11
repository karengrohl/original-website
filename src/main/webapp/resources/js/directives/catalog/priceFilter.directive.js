(function () {
    angular.module("original-store").directive("priceFilter", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog/filters/price.html",
            controller: controller,
            controllerAs: "cc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;
    }
})();