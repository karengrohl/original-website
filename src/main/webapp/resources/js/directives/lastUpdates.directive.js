(function () {
    angular.module("original-store").directive("lastUpdates", lastUpdates);

    function lastUpdates() {
        return {
            restrict: "E",
            templateUrl: "templates/lastUpdates.html"
        };
    }
})();