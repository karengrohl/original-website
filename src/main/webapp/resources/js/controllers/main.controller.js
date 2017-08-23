(function () {

    angular.module("original-store").controller("main.controller", mainController);

    function mainController() {
        var mc = this;

        mc.carousel = {
            slides: [
                {id: 0},
                {id: 1}
            ],
            interval: 5000
        };

        mc.getRange = function (n) {
            return _.range(0, n);
        }

    }

})();