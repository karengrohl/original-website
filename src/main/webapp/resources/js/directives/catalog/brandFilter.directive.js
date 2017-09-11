(function () {
    angular.module("original-store").directive("brandFilter", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog/filters/brand.html",
            controller: controller,
            controllerAs: "cc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;
    }
})();