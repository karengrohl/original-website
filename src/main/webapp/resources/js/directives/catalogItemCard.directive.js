(function () {
    angular.module("original-store").directive("catalogItemCard", catalogItemCard);

    function catalogItemCard() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalogItemCard.html"
        };
    }
})();