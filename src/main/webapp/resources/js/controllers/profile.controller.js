(function () {

    angular.module("original-store").controller("profile", controller);

    function controller($rootScope, $state) {
        var mc = this;

        mc.logout = function () {
            $rootScope.authorization.logout();
            $state.go('root.main');
        };

        mc.fields = {
            name: new ProfileField(),
            phone: new ProfileField("hello")
        };

        mc.getRange = function (n) {
            return _.range(0, n);
        };

        function ProfileField(value) {
            this.disabled = true;
            this.temporaryValue = {};
            this.value = value ? value : "";
            this.save = function (database) {
                //save changes logic
                this.disabled = true;
            };
            this.editState = function () {
                this.temporaryValue = this.value;
                this.disabled = false;
            };
            this.reset = function () {
                this.disabled = true;
                this.value = this.temporaryValue;
            }
        }
    }

})();