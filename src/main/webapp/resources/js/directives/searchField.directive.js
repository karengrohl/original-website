(function () {
    angular.module("original-store").directive("searchField", searchField);

    function searchField() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/searchField.html"
        };
    }
})();