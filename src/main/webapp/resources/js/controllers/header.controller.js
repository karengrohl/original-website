(function () {


    angular.module("original-store").controller("header.controller", headerController);

    function initRootScope($rootScope) {
        $rootScope.cartCount = 0.0;

        $rootScope.authorization = {
            authorized: false,
            authorize: function () {
                this.authorized = true;
            },
            logout: function () {
                this.authorized = false;
            }
        };

        $rootScope.gender = {
            female: true,
            male: false,
            children: false,
            change: function (gender) {
                switch (gender) {
                    case "female":
                        this.female = true;
                        this.male = false;
                        this.children = false;
                        break;
                    case "male":
                        this.male = true;
                        this.female = false;
                        this.children = false;
                        break;
                    case "children":
                        this.children = true;
                        this.male = false;
                        this.female = false;
                        break;
                }
            }
        };
    }

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


        initRootScope($rootScope);

        ctrl.openLoginDialog = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "templates/login.html",
                controller: "loginModal.controller",
                controllerAs: "mc",
                size: "sm",
                resolve: {}
            });
        }

    }
})();