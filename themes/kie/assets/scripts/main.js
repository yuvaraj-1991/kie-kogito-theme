(function() {
    var responsiveMenuClass = "responsive-menu-opened";

    function closeResponsiveMenu() {
        document.body.classList.remove(responsiveMenuClass);
    }

    function toggleResponsiveMenu() {
        document.body.classList.toggle(responsiveMenuClass);
    }

    document
        .querySelector(".responsive-menu-button")
        .addEventListener("click", function(e) {
            toggleResponsiveMenu();
            e.preventDefault();
            return false;
        });

    document.addEventListener("keyup", function(e) {
        if (e.key === 27) {
            closeResponsiveMenu();
        }
    });

    document
        .querySelector(".close-button")
        .addEventListener("click", closeResponsiveMenu);

    document
        .querySelector("#responsive_menu")
        .addEventListener("click", function(e) {
            e.stopPropagation();
        });
})();