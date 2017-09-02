(function () {

    angular.module("original-store").controller("stores.controller", controller);

    function controller($scope, $stateParams) {
        var ctrl = this;

        console.log($stateParams);

        ctrl.map = {
            center: [53.89, 30.33]
        };

        ctrl.getRange = function (n) {
            return _.range(0, n);
        };

        ctrl.stores = [];

        ctrl.storeGeoObjects = [
            {
                geometry: {
                    type: "Point",
                    coordinates: [30.33, 53.89]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    balloonContentHeader: "Балун метки",
                    balloonContentBody: "Содержимое балуна метки",
                    balloonContentFooter: "Подвал",
                    hintContent: 'Название магазина'
                }
            }
        ]


    }

})();