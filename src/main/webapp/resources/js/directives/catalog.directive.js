(function () {
    angular.module("original-store").directive("catalog", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalog.html",
            controller: controller,
            controllerAs: "cc",
            scope: {}
        };
    }

    function controller() {
        var ctrl = this;

        ctrl.filters = {
            price: {
                popover: {
                    templateUrl: "templates/elements/catalog/filters/price.html"
                }
            },
            size: {
                popover: {
                    templateUrl: "templates/elements/catalog/filters/size.html"
                }
            },
            brand: {
                popover: {
                    templateUrl: "templates/elements/catalog/filters/brand.html"
                }
            }
        }

    }
})();