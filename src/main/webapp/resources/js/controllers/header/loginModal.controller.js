(function () {

    angular.module("original-store").controller("loginModal.controller", controller);

    function controller($uibModalInstance, $scope) {
        var mc = this;

        mc.isUserLogin = true;

        mc.close = function () {
            $uibModalInstance.dismiss("cancel");
        };

        mc.toggleLoginScreenByRole = function () {
            mc.isUserLogin = !mc.isUserLogin;
        };

        mc.login = function (role) {
            $scope.$root.authorization.authorize(role);
            mc.close();
        }
    }

})();