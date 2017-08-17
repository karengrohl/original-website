(function () {
    function mainController() {
        var mc = this;

        mc.getRange = function (n) {
            return _.range(0, n);
        }

    }

    angular.module("original-store").controller("main.controller", mainController);
})();