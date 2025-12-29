document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger immediately in case elements are already in view

    // 3. Number Counter (Fleet Section)
    const counters = document.querySelectorAll('.fleet-counter h3');
    let hasCounted = false;

    const startCounters = () => {
        const fleetSection = document.querySelector('#fleet');
        if(!fleetSection) return;

        const sectionPos = fleetSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if(sectionPos < screenPos && !hasCounted) {
            counters.forEach(counter => {
                const target = +counter.innerText;
                const speed = 100;
                
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if(count < target) {
                        counter.innerText = Math.ceil(count + 1);
                        setTimeout(updateCount, 100);
                    } else {
                        counter.innerText = target;
                    }
                };
                counter.innerText = 0; // Start from 0
                updateCount();
            });
            hasCounted = true;
        }
    };

    window.addEventListener('scroll', startCounters);
});