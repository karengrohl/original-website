function MobileMenuItem(isOpen, menuItems) {
    this.isOpen = isOpen || false;
    this.menuItems = menuItems || [];
    this.open = function () {
        this.isOpen = true;
    };
    this.close = function () {
        this.isOpen = false;
    };

    this.change = function () {
        this.isOpen = !this.isOpen;
    }
}