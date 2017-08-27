(function () {
    angular.module("original-store").directive("storeCard", storeCard);

    function storeCard() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/storeCard.html"
        };
    }
})();