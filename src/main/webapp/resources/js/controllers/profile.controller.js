(function () {

    angular.module("original-store").controller("profile", controller);

    function controller($rootScope, $state) {
        var mc = this;

        mc.logout = function () {
            $rootScope.authorization.logout();
            $state.go('root.main');
        }
    }

})();