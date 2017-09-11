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
                    templateUrl: "templates/elements/catalog/filters/priceTooltip.html"
                }
            },
            size: {
                popover: {
                    templateUrl: "templates/elements/catalog/filters/sizeTooltip.html"
                }
            },
            brand: {
                popover: {
                    templateUrl: "templates/elements/catalog/filters/brandTooltip.html"
                }
            }
        }

    }
})();