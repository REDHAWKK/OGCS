document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  feather.replace();
  
      // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    /* ===============================
       BACK TO TOP
    =============================== */
    const backToTop = document.createElement("button");
    backToTop.innerHTML = '<i data-feather="arrow-up"></i>';
    backToTop.className =
        "fixed bottom-8 right-8 btn-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg   hidden";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("hidden", window.scrollY < 300);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if (window.feather) {
        feather.replace();
    }
    // Current year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        const navbar = document.getElementById("navbar");

        function handleNavbar() {
            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
        
        handleNavbar(); // Handles page refresh while already scrolled
        
        window.addEventListener("scroll", handleNavbar);