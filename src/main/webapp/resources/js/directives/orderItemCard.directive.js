(function () {
    angular.module("original-store").directive("orderItemCard", directive);

    function directive() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/orderItemCard.html",
            controllerAs: "ic"
        };
    }
})();