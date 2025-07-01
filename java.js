document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navlist a");
    const navbar = document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;

    function activateNavLink() {
        let scrollY = window.pageYOffset;
        let found = false;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 5;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + section.id) {
                        link.classList.add("active");
                        found = true;
                    }
                });
            }
        });

        if (!found) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#contact") {
                        link.classList.add("active");
                    }
                });
            }
        }
    }

    window.addEventListener("scroll", activateNavLink);
    activateNavLink();
});
