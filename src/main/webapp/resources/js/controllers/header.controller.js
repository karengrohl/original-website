(function () {
    function headerController($rootScope) {
        $rootScope.cartCount = 0.0;
    }

    angular.module("original-store").controller("header.controller", headerController);
})();