document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navlist a");
    const navbar = document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight : 80; // ако не најде header, default 80

    function activateNavLink() {
        let scrollY = window.pageYOffset;
        let found = false;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 5; // +5px толеранција
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

        // Ако не е најдена секција, провери дали сме на дното и активирај „Контакт“
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
    activateNavLink(); // За да работи и при reload
});
