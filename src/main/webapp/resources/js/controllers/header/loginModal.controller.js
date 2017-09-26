(function () {

    angular.module("original-store").controller("loginModal.controller", controller);

    function controller($uibModalInstance) {
        var mc = this;

        mc.close = function () {
            $uibModalInstance.dismiss("cancel");
        }
    }

})();