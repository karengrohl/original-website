(function () {
    angular.module("original-store").directive("sizeFilter", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog/filters/size.html",
            controller: controller,
            controllerAs: "cc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;

    }
})();