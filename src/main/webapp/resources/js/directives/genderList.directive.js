(function () {
    angular.module("original-store").directive("genderList", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/genderList.html",
            controller: controller,
            controllerAs: "mc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;

    }
})();