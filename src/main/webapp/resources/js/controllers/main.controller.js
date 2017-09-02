(function () {

    angular.module("original-store").controller("main.controller", mainController);

    function mainController($stateParams) {
        var mc = this;

        mc.carousel = {
            slides: [
                {id: 0},
                {id: 1}
            ],
            interval: 5000
        };

        mc.storeId = $stateParams.id;

        mc.saleId = $stateParams.saleId;

        console.log($stateParams);

        mc.getRange = function (n) {
            return _.range(0, n);
        };

        mc.f = function () {
            alert("Done")
        };

    }

})();