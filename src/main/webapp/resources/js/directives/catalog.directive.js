(function () {
    angular.module("original-store").directive("catalog", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog.html",
            controller: controller,
            controllerAs: "mc"
        };
    }

    function controller() {
        var ctrl = this;

    }
})();