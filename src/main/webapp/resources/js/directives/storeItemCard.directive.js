(function () {
    angular.module("original-store").directive("storeItemCard", catalogItemCard);

    function catalogItemCard() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/storeItemCard.html"
        };
    }
})();