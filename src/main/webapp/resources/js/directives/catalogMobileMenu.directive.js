(function () {
    angular.module("original-store").directive("catalogMobileMenu", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog/mobileMenu.html",
            controller: controller,
            controllerAs: "mm",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;

        ctrl.mobileMenu = new MobileMenu();

        function populate() {
            var array = [];
            for (var i = 0; i < 4; i++) {
                array.push(new MobileMenuItem(false))
            }
            return array;
        }

        function MobileMenu() {
            this.categories = new MobileMenuItem(false, populate());
            this.filters = new MobileMenuItem(false, populate());
            this.change = function (tab) {
                switch (tab) {
                    case "categories":
                        if (!this.categories.isOpen) {
                            this.categories.open();
                            this.filters.close();
                        } else {
                            this.categories.close();
                        }

                        break;
                    case "filters":
                        if (!this.filters.isOpen) {
                            this.categories.close();
                            this.filters.open();
                        } else {
                            this.filters.close();
                        }

                        break;
                }
            }
        }

    }
})();