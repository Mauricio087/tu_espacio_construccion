// Animaciones adicionales y efectos visuales

// Configuración de animaciones
const animationConfig = {
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Clase para manejar animaciones complejas
class AnimationManager {
    constructor() {
        this.animations = new Map();
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupTypingEffect();
        this.setupParticleEffects();
        this.setupParallaxEffects();
    }

    // Observador de intersección para animaciones al hacer scroll
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target);
                }
            });
        }, {
            threshold: animationConfig.threshold,
            rootMargin: animationConfig.rootMargin
        });

        // Observar elementos con data-animation
        document.querySelectorAll('[data-animation]').forEach(element => {
            observer.observe(element);
        });
    }

    // Configurar animaciones de scroll
    setupScrollAnimations() {
        const scrollElements = document.querySelectorAll('.scroll-animate');
        
        scrollElements.forEach(element => {
            const animationType = element.getAttribute('data-scroll-animation') || 'fadeInUp';
            const delay = parseInt(element.getAttribute('data-delay')) || 0;
            const duration = parseInt(element.getAttribute('data-duration')) || animationConfig.duration;
            
            this.addScrollAnimation(element, animationType, delay, duration);
        });
    }

    // Agregar animación de scroll a un elemento
    addScrollAnimation(element, type, delay, duration) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        this.applyAnimation(entry.target, type, duration);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, animationConfig);

        observer.observe(element);
    }

    // Aplicar animación específica
    applyAnimation(element, type, duration = animationConfig.duration) {
        const animations = {
            fadeIn: {
                opacity: [0, 1]
            },
            fadeInUp: {
                opacity: [0, 1],
                transform: ['translateY(30px)', 'translateY(0)']
            },
            fadeInDown: {
                opacity: [0, 1],
                transform: ['translateY(-30px)', 'translateY(0)']
            },
            fadeInLeft: {
                opacity: [0, 1],
                transform: ['translateX(-30px)', 'translateX(0)']
            },
            fadeInRight: {
                opacity: [0, 1],
                transform: ['translateX(30px)', 'translateX(0)']
            },
            scaleIn: {
                opacity: [0, 1],
                transform: ['scale(0.9)', 'scale(1)']
            },
            rotateIn: {
                opacity: [0, 1],
                transform: ['rotate(-180deg) scale(0.5)', 'rotate(0) scale(1)']
            },
            bounceIn: {
                opacity: [0, 1],
                transform: ['scale(0.3)', 'scale(1.05)', 'scale(0.9)', 'scale(1)']
            },
            flipInX: {
                opacity: [0, 1],
                transform: ['rotateX(90deg)', 'rotateX(0deg)']
            },
            flipInY: {
                opacity: [0, 1],
                transform: ['rotateY(90deg)', 'rotateY(0deg)']
            }
        };

        const keyframes = animations[type] || animations.fadeInUp;
        
        element.animate(keyframes, {
            duration: duration,
            easing: animationConfig.easing,
            fill: 'forwards'
        });
    }

    // Trigger animation para elementos observados
    triggerAnimation(element) {
        const animationType = element.getAttribute('data-animation') || 'fadeInUp';
        const delay = parseInt(element.getAttribute('data-delay')) || 0;
        const duration = parseInt(element.getAttribute('data-duration')) || animationConfig.duration;
        
        setTimeout(() => {
            this.applyAnimation(element, animationType, duration);
        }, delay);
    }

    // Configurar efectos hover
    setupHoverEffects() {
        // Efecto de levitación
        document.querySelectorAll('.hover-lift').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-10px)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });

            element.addEventListener('mouseleave', () => {
                element.animate([
                    { transform: 'translateY(-10px)' },
                    { transform: 'translateY(0)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });
        });

        // Efecto de escala
        document.querySelectorAll('.hover-scale').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.05)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });

            element.addEventListener('mouseleave', () => {
                element.animate([
                    { transform: 'scale(1.05)' },
                    { transform: 'scale(1)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });
        });

        // Efecto de rotación
        document.querySelectorAll('.hover-rotate').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.animate([
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(5deg)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });

            element.addEventListener('mouseleave', () => {
                element.animate([
                    { transform: 'rotate(5deg)' },
                    { transform: 'rotate(0deg)' }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            });
        });
    }

    // Efecto de escritura (typing)
    setupTypingEffect() {
        document.querySelectorAll('.typing-effect').forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            let i = 0;
            const typingSpeed = 100; // ms por carácter
            
            function typeWriter() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, typingSpeed);
                }
            }
            
            // Observar cuando el elemento esté visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }

    // Efectos de partículas
    setupParticleEffects() {
        document.querySelectorAll('.particle-effect').forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.createParticles(e, element);
            });
        });
    }

    // Crear partículas
    createParticles(event, element) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = '#4a90e2';
            particle.style.borderRadius = '50%';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.pointerEvents = 'none';
            
            element.appendChild(particle);
            
            // Animar partícula
            particle.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    // Efectos de parallax
    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Parallax para elementos con data-parallax
            document.querySelectorAll('[data-parallax]').forEach(element => {
                const speed = element.getAttribute('data-parallax-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
            
            // Parallax para imágenes de fondo
            document.querySelectorAll('.parallax-bg').forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.backgroundPositionY = `${yPos}px`;
            });
        });
    }

    // Efecto de contador animado
    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    // Efecto de barras de progreso
    animateProgressBar(element, targetWidth, duration = 1500) {
        element.style.width = '0%';
        
        setTimeout(() => {
            element.animate([
                { width: '0%' },
                { width: targetWidth + '%' }
            ], {
                duration: duration,
                easing: 'ease-out',
                fill: 'forwards'
            });
        }, 200);
    }

    // Efecto de onda
    createRippleEffect(event, element) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        element.appendChild(ripple);
        
        ripple.animate([
            {
                width: '0',
                height: '0',
                opacity: 1
            },
            {
                width: '200px',
                height: '200px',
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            ripple.remove();
        };
    }

    // Efecto de brillo
    createGlowEffect(element) {
        element.style.boxShadow = '0 0 20px rgba(74, 144, 226, 0.5)';
        element.animate([
            { boxShadow: '0 0 20px rgba(74, 144, 226, 0.5)' },
            { boxShadow: '0 0 40px rgba(74, 144, 226, 0.8)' },
            { boxShadow: '0 0 20px rgba(74, 144, 226, 0.5)' }
        ], {
            duration: 1000,
            easing: 'ease-in-out'
        });
    }

    // Efecto de pulso
    createPulseEffect(element) {
        element.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' }
        ], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 2
        });
    }
}

// Funciones de utilidad para animaciones
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para obtener el scroll actual
function getScrollPosition() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
    };
}

// Función para suavizar el scroll
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Función para crear animación de contador
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Función para crear efecto de máquina de escribir
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Función para crear efecto de parpadeo
function blinkEffect(element, duration = 1000, iterations = 3) {
    element.animate([
        { opacity: 1 },
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: duration,
        iterations: iterations
    });
}

// Función para crear efecto de latido
function heartbeatEffect(element, duration = 1000) {
    element.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' }
    ], {
        duration: duration,
        easing: 'ease-in-out'
    });
}

// Función para crear efecto de temblor
function shakeEffect(element, duration = 500) {
    element.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: duration,
        easing: 'ease-in-out'
    });
}

// Función para crear efecto de giro
function spinEffect(element, duration = 1000, iterations = 1) {
    element.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: duration,
        iterations: iterations,
        easing: 'linear'
    });
}

// Función para crear efecto de rebote
function bounceEffect(element, duration = 1000) {
    element.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-30px)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(-15px)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(-7px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: duration,
        easing: 'ease-out'
    });
}

// Función para crear efecto de fundido con zoom
function zoomFadeEffect(element, duration = 1000) {
    element.animate([
        { 
            opacity: 0,
            transform: 'scale(0.8)'
        },
        { 
            opacity: 1,
            transform: 'scale(1)'
        }
    ], {
        duration: duration,
        easing: 'ease-out'
    });
}

// Función para crear efecto de deslizamiento
function slideEffect(element, direction = 'left', duration = 1000) {
    const transforms = {
        left: ['translateX(-100%)', 'translateX(0)'],
        right: ['translateX(100%)', 'translateX(0)'],
        up: ['translateY(-100%)', 'translateY(0)'],
        down: ['translateY(100%)', 'translateY(0)']
    };

    element.animate([
        { transform: transforms[direction][0] },
        { transform: transforms[direction][1] }
    ], {
        duration: duration,
        easing: 'ease-out'
    });
}

// Función para crear efecto de onda
function waveEffect(element, duration = 1000) {
    element.animate([
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(1.2)' },
        { transform: 'scaleY(0.8)' },
        { transform: 'scaleY(1)' }
    ], {
        duration: duration,
        easing: 'ease-in-out'
    });
}

// Función para crear efecto de elasticidad
function elasticEffect(element, duration = 1000) {
    element.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.25)' },
        { transform: 'scale(0.75)' },
        { transform: 'scale(1.15)' },
        { transform: 'scale(0.95)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' }
    ], {
        duration: duration,
        easing: 'ease-out'
    });
}

// Función para crear efecto de aparición con giro
function flipAppearEffect(element, direction = 'horizontal', duration = 1000) {
    const transforms = {
        horizontal: ['rotateY(90deg)', 'rotateY(0deg)'],
        vertical: ['rotateX(90deg)', 'rotateX(0deg)']
    };

    element.animate([
        { 
            opacity: 0,
            transform: transforms[direction][0]
        },
        { 
            opacity: 1,
            transform: transforms[direction][1]
        }
    ], {
        duration: duration,
        easing: 'ease-out'
    });
}

// Inicializar el administrador de animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.animationManager = new AnimationManager();
    
    // Agregar clases CSS dinámicas para animaciones
    const animationStyles = `
        .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .scroll-animate.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .typing-effect {
            overflow: hidden;
            border-right: 0.15em solid var(--primary-color);
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.15em;
        }
        
        .particle-effect {
            position: relative;
            overflow: hidden;
        }
        
        .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        .hover-lift {
            transition: transform 0.3s ease;
        }
        
        .hover-scale {
            transition: transform 0.3s ease;
        }
        
        .hover-rotate {
            transition: transform 0.3s ease;
        }
        
        .hover-glow {
            transition: box-shadow 0.3s ease;
        }
        
        .hover-glow:hover {
            box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
        }
        
        .animate-on-scroll {
            opacity: 0;
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
        }
        
        .counter {
            font-weight: bold;
            color: var(--primary-color);
        }
        
        .progress-bar {
            height: 4px;
            background: var(--primary-color);
            border-radius: 2px;
            width: 0;
            transition: width 0.3s ease;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .glow-effect {
            box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
            animation: glow-pulse 2s infinite;
        }
        
        @keyframes glow-pulse {
            0%, 100% {
                box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
            }
            50% {
                box-shadow: 0 0 40px rgba(74, 144, 226, 0.8);
            }
        }
        
        .pulse-effect {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .shake-effect {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% {
                transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
                transform: translateX(-5px);
            }
            20%, 40%, 60%, 80% {
                transform: translateX(5px);
            }
        }
        
        .bounce-effect {
            animation: bounce 1s ease-out;
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: translateY(0);
            }
            40%, 43% {
                transform: translateY(-15px);
            }
            70% {
                transform: translateY(-7px);
            }
            90% {
                transform: translateY(-3px);
            }
        }
        
        .spin-effect {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        .fade-in-effect {
            animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        .slide-in-effect {
            animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .zoom-in-effect {
            animation: zoomIn 0.6s ease-out;
        }
        
        @keyframes zoomIn {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .elastic-effect {
            animation: elastic 1s ease-out;
        }
        
        @keyframes elastic {
            0% {
                transform: scale(1);
            }
            30% {
                transform: scale(1.25);
            }
            40% {
                transform: scale(0.75);
            }
            50% {
                transform: scale(1.15);
            }
            65% {
                transform: scale(0.95);
            }
            75% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .flip-effect {
            animation: flip 0.6s ease-out;
        }
        
        @keyframes flip {
            from {
                transform: perspective(400px) rotateY(90deg);
                opacity: 0;
            }
            to {
                transform: perspective(400px) rotateY(0deg);
                opacity: 1;
            }
        }
        
        .wave-effect {
            animation: wave 1s ease-in-out;
        }
        
        @keyframes wave {
            0%, 100% {
                transform: scaleY(1);
            }
            50% {
                transform: scaleY(1.2);
            }
        }
        
        .heartbeat-effect {
            animation: heartbeat 1s ease-in-out;
        }
        
        @keyframes heartbeat {
            0% {
                transform: scale(1);
            }
            25% {
                transform: scale(1.1);
            }
            50% {
                transform: scale(1);
            }
            75% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .blink-effect {
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50%, 100% {
                opacity: 1;
            }
            25%, 75% {
                opacity: 0;
            }
        }
        
        .typing-effect {
            overflow: hidden;
            border-right: 0.15em solid var(--primary-color);
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.15em;
            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }
        
        @keyframes blink-caret {
            from, to {
                border-color: transparent;
            }
            50% {
                border-color: var(--primary-color);
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
});

// Hacer funciones disponibles globalmente
window.animationUtils = {
    debounce,
    throttle,
    isInViewport,
    getScrollPosition,
    smoothScrollTo,
    animateCounter,
    typeWriter,
    blinkEffect,
    heartbeatEffect,
    shakeEffect,
    spinEffect,
    bounceEffect,
    zoomFadeEffect,
    slideEffect,
    waveEffect,
    elasticEffect,
    flipAppearEffect
};