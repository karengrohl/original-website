(function () {


    angular.module("original-store").controller("header.controller", headerController);

    function headerController($rootScope, $uibModal, $state) {

        var ctrl = this;

        ctrl.navbar = {
            isCollapsed: true,
            collapse: function () {
                if (!this.isCollapsed) {
                    this.isCollapsed = !this.isCollapsed;
                }
            }
        };

        ctrl.changeState = function (state, params) {
            ctrl.navbar.collapse();
            $state.go(state, params);
        };


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