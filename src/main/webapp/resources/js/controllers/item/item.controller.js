(function () {

    angular.module("original-store").controller("item.controller", itemController);

    function itemController($stateParams, $uibModal) {
        var mc = this;

        console.log($stateParams);

        mc.store = {};

        mc.getRange = function (n) {
            return _.range(0, n);
        };

        mc.openMap = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "templates/elements/item/mapModal.template.html",
                controller: "mapModal.controller",
                controllerAs: "mc",
                resolve: {
                    store: function () {
                        return mc.store;
                    }
                }
            });
        };

    }

})();