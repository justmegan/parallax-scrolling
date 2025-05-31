document.addEventListener('DOMContentLoaded', () => {
    const heroLayers = document.querySelectorAll('.hero-section .parallax-layer');
    const contentSections = document.querySelectorAll('.content-section');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        heroLayers.forEach(layer => {
            let speed = 0;
            if (layer.classList.contains('layer-1')) {
                speed = 0.08;
            } else if (layer.classList.contains('layer-2')) {
                speed = 0.2;
            } else if (layer.classList.contains('layer-3')) {
                speed = 0.4;
            }
            const yOffset = -scrollPosition * speed;
            layer.style.transform = `translateY(${yOffset}px) translateZ(0)`;
        });

        contentSections.forEach(section => {
            const sectionTop = section.offsetTop; 
            const sectionHeight = section.offsetHeight; 
            const viewportHeight = window.innerHeight;

            const relativeScroll = scrollPosition - sectionTop;

            section.querySelectorAll('.content-parallax-layer').forEach(layer => {
                let speed = 0;
                if (layer.classList.contains('content-layer-back')) {
                    speed = 0.05; 
                } else if (layer.classList.contains('content-layer-mid')) {
                    speed = 0.15;
                } else if (layer.classList.contains('content-layer-front')) {
                    speed = 0.3; 
                }

                const innerYOffset = -relativeScroll * speed;
                layer.style.transform = `translateY(${innerYOffset}px) translateZ(0)`;
            });
        });
    });
});