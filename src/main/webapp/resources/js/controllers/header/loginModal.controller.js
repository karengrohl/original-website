(function () {

    angular.module("original-store").controller("loginModal.controller", controller);

    function controller($uibModalInstance, $scope) {
        var mc = this;

        mc.close = function () {
            $uibModalInstance.dismiss("cancel");
        };

        mc.login = function () {
            $scope.$root.authorization.authorize();
            mc.close();
        }
    }

})();