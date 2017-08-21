(function () {
    angular.module("original-store").directive("catalogItemCard", catalogItemCard);

    function catalogItemCard() {
        return {
            restrict: "E",
            templateUrl: "templates/elements/catalogItemCard.html",
            scope: {
                delete: "=?"
            },
            controller: function ($scope) {
                var cc = this;

                cc.addToCart = function (id) {
                    $scope.delete = !$scope.delete;
                };

                cc.removeFromCart = function (id) {
                    $scope.delete = !$scope.delete;
                };
            },
            controllerAs: "ic"
        };
    }
})();