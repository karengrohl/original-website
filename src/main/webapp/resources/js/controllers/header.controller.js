(function () {
    function headerController($scope) {
        $scope.cartCount = 10.0;
    }

    angular.module("original-store").controller("header.controller", headerController);
})();