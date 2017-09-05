(function () {
    angular.module("original-store").directive("catalogMobileMenuItem", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog/catalogMobileMenuItem.html",
            controller: controller,
            controllerAs: "mc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;

        function populate() {
            var array = [];
            for (var i = 0; i < 4; i++) {
                array.push(new MobileMenuItem(false))
            }
            return array;
        }

        ctrl.menuItem = new MobileMenuItem(false);
    }
})();