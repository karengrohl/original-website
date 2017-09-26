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

    function controller($rootScope) {
        var ctrl = this;
        ctrl.change = function (gender) {
            $rootScope.gender.change(gender);
        }
    }
})();