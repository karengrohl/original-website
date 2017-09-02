(function () {

    angular.module("original-store").controller("item.controller", controller);

    function controller($stateParams, $uibModal) {
        var ctrl = this;

        console.log($stateParams);

        ctrl.store = {
            name: "Название магазина",
            geoObject: {
                geometry: {
                    type: "Point",
                    coordinates: [30.33, 53.89]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    balloonContentHeader: "Название магазина",
                    balloonContentBody: "Содержимое балуна метки",
                    balloonContentFooter: "Подвал",
                    hintContent: 'Название магазина'
                }
            }
        };

        ctrl.getRange = function (n) {
            return _.range(0, n);
        };

        ctrl.openMap = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "templates/elements/item/mapModal.template.html",
                controller: "mapModal.controller",
                controllerAs: "mc",
                resolve: {
                    store: function () {
                        return ctrl.store;
                    }
                }
            });
        };

    }

})();