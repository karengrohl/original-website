(function () {


    angular.module("original-store").controller("header.controller", headerController);

    function headerController($rootScope, $uibModal) {

        var ctrl = this;

        $rootScope.cartCount = 0.0;

        ctrl.openLoginDialog = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "templates/login.html",
                controller: "main.controller",
                controllerAs: "mc",
                resolve: {}
            });
        }

    }
})();