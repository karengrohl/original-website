(function () {
    angular.module("original-store").directive("navbarRouteFix", navbarRouteFix);

    function navbarRouteFix() {
        return {
            restrict: "A",
            link: function (scope, element) {
                element.find("a").on("click", function () {
                    element.find(".navbar-toggle").click();
                })
            }
        };
    }
})();