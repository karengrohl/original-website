(function () {

    angular.module("original-store").controller("store.controller", controller);

    function controller($stateParams) {
        var ctrl = this;


        ctrl.storeId = $stateParams.id;

        ctrl.saleId = $stateParams.saleId;

        console.log($stateParams);

        ctrl.like = function () {

        };

        ctrl.dislike = function () {

        };

        ctrl.getRange = function (n) {
            return _.range(0, n);
        };
    }

})();