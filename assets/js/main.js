// Variables globales
let currentImageIndex = 0;
let galleryImages = [];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');

// Función para inicializar el sitio
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeBackToTop();
    initializeFormHandler();
    initializeScrollReveal();
    initializeSmoothScroll();
    initializeNavbarState(); // Establecer estado inicial del navbar
    initializeNavbarScroll();
    initializeServiceButtons();
    
    // Cargar galería después de que el DOM esté listo
    setTimeout(() => {
        initializeGallery();
    }, 100);
});

// Navegación responsive - Optimizada para móvil
function initializeNavigation() {
    let isMenuOpen = false;
    
    navToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto (mejora para móvil)
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
        
        // Animar el icono hamburguesa con transición fluida
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (isMenuOpen) {
                bar.style.transition = 'all 0.3s ease';
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transition = 'all 0.3s ease';
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transition = 'all 0.3s ease';
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
    
    // Cerrar menú al hacer clic fuera (mejora para móvil)
    document.addEventListener('click', function(event) {
        if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transition = 'all 0.3s ease';
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        }
    });
}

// Función para establecer el estado inicial del navbar
function initializeNavbarState() {
    const heroSection = document.getElementById('inicio');
    if (!heroSection) return;
    
    const scrollY = window.scrollY;
    const heroRect = heroSection.getBoundingClientRect();
    const heroBottom = heroRect.bottom + scrollY;
    
    // Si estamos fuera de la sección hero, ocultar el navbar inicialmente
    if (scrollY > heroBottom - 100) {
        navbar.classList.add('navbar-hidden');
    }
    
    // Establecer estado scrolled si es necesario
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    }
}

// Efectos de scroll para la navbar - Solo aparece en hero al hacer scroll up
function initializeNavbarScroll() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let heroSection = document.getElementById('inicio');
    let heroBottom = 0;
    let isMobile = window.innerWidth <= 768;
    
    // Calcular la posición inferior del hero
    function updateHeroPosition() {
        if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            heroBottom = heroRect.bottom + window.scrollY;
        }
    }
    
    // Detectar cambios de tamaño de pantalla
    function checkScreenSize() {
        isMobile = window.innerWidth <= 768;
    }
    
    // Calcular posición inicial
    updateHeroPosition();
    checkScreenSize();
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        // Actualizar posición del hero si cambia (por redimensionado)
        if (!ticking) {
            updateHeroPosition();
        }
        
        // Optimización para móvil: umbral más pequeño para mejor respuesta
        const scrollThreshold = isMobile ? 50 : 100;
        
        // Ocultar navbar al hacer scroll down
        if (scrollY > lastScrollY && scrollY > scrollThreshold) {
            navbar.classList.add('navbar-hidden');
            
            // Cerrar menú móvil si está abierto al ocultar navbar
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    const bars = navToggle.querySelectorAll('.bar');
                    bars.forEach(bar => {
                        bar.style.transform = '';
                        bar.style.opacity = '';
                    });
                }
            }
        } 
        // Mostrar navbar SOLO cuando estemos en o cerca de la sección hero
        else if (scrollY < lastScrollY && scrollY <= heroBottom - 50) {
            navbar.classList.remove('navbar-hidden');
        }
        // Siempre mostrar cuando estemos muy arriba (seguridad)
        else if (scrollY <= 50) {
            navbar.classList.remove('navbar-hidden');
        }
        
        // Agregar/quitar clase scrolled para estilos
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', () => {
        updateHeroPosition();
        checkScreenSize();
    });
}

// Scroll suave
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajustar por la altura del navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efectos de scroll reveal
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animaciones específicas por tipo de elemento
                if (entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('animate-fade-in-up');
                } else if (entry.target.classList.contains('contact-info')) {
                    entry.target.classList.add('animate-fade-in-left');
                } else if (entry.target.classList.contains('contact-form')) {
                    entry.target.classList.add('animate-fade-in-right');
                } else {
                    entry.target.classList.add('animate-fade-in-up');
                }
            }
        });
    }, observerOptions);

    // Observar elementos
    const elementsToReveal = document.querySelectorAll('.service-card, .contact-info, .contact-form, .section-header');
    elementsToReveal.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Efectos de scroll adicionales
function initializeScrollEffects() {
    // Parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-img');
        if (heroImg && scrolled < window.innerHeight) {
            heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animar números en estadísticas (si se agregan)
    animateNumbers();
}

// Botón volver arriba
function initializeBackToTop() {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Manejador del formulario de contacto
function initializeFormHandler() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validar formulario
            if (validateForm(data)) {
                // Simular envío (en producción, esto se enviaría a un servidor)
                simulateFormSubmission(data);
            }
        });
    }
}

// Validación del formulario
function validateForm(data) {
    const { name, email, phone, message } = data;
    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }

    if (!email || !isValidEmail(email)) {
        errors.push('Por favor ingresa un email válido');
    }

    if (phone && !isValidPhone(phone)) {
        errors.push('Por favor ingresa un teléfono válido');
    }

    if (!message || message.trim().length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }

    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }

    return true;
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validar teléfono
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

// Mostrar errores del formulario
function showFormErrors(errors) {
    // Crear contenedor de errores si no existe
    let errorContainer = document.querySelector('.form-errors');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'form-errors';
        contactForm.insertBefore(errorContainer, contactForm.firstChild);
    }

    // Mostrar errores
    errorContainer.innerHTML = `
        <div class="error-message">
            ${errors.map(error => `<p><i class="fas fa-exclamation-triangle"></i> ${error}</p>`).join('')}
        </div>
    `;

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        errorContainer.style.opacity = '0';
        setTimeout(() => {
            errorContainer.remove();
        }, 300);
    }, 5000);
}

// Simular envío del formulario
function simulateFormSubmission(data) {
    // Mostrar estado de carga
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simular envío con delay
    setTimeout(() => {
        // Preparar mensaje para WhatsApp
        const message = `Hola, soy ${data.name}.\n\n${data.message}\n\nMi email: ${data.email}${data.phone ? `\nMi teléfono: ${data.phone}` : ''}`;
        const whatsappUrl = `https://wa.me/56950920027?text=${encodeURIComponent(message)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Limpiar formulario
        contactForm.reset();
        
        // Mostrar mensaje de éxito
        showSuccessMessage('¡Mensaje enviado! Te contactaremos pronto por WhatsApp.');
    }, 2000);
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => {
            successDiv.remove();
        }, 300);
    }, 5000);
}

// Animar números (para estadísticas futuras)
function animateNumbers() {
    const numbers = document.querySelectorAll('[data-number]');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-number'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current);
        }, 16);
    });
}

// Inicializar botones de servicios
function initializeServiceButtons() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Agregar efecto de ripple
            createRippleEffect(this, e);
            
            // Pequeño delay para mostrar el efecto antes de navegar
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 300);
        });
    });
}

// Crear efecto ripple
function createRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Función para inicializar la galería
function initializeGallery() {
    // Esta función se implementará en gallery.js
    if (typeof initializeGalleryModule === 'function') {
        initializeGalleryModule();
    }
}

// Detectar dispositivos móviles
function isMobile() {
    return window.innerWidth <= 768;
}

// Optimización de rendimiento
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

// Event listeners adicionales
window.addEventListener('resize', debounce(function() {
    // Recalcular elementos responsivos
    if (typeof handleResize === 'function') {
        handleResize();
    }
}, 250));

// Prevenir scroll cuando el modal de galería está abierto
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Cerrar modal si está abierto
        const modal = document.querySelector('.gallery-modal.active');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Navegación con teclado en el modal
    if (e.key === 'ArrowLeft') {
        const modal = document.querySelector('.gallery-modal.active');
        if (modal) {
            navigateModalImage('prev');
        }
    }
    
    if (e.key === 'ArrowRight') {
        const modal = document.querySelector('.gallery-modal.active');
        if (modal) {
            navigateModalImage('next');
        }
    }
});

// Función para manejar el resize
function handleResize() {
    // Ajustar elementos según el tamaño de la ventana
    const heroImg = document.querySelector('.hero-img');
    if (heroImg && window.innerWidth <= 768) {
        heroImg.style.transform = '';
    }
}

// Agregar estilos CSS dinámicos
const dynamicStyles = `
    .form-errors {
        background: #fee;
        border: 1px solid #fcc;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        transition: opacity 0.3s ease;
    }
    
    .error-message p {
        color: #c33;
        margin: 0.25rem 0;
        font-size: 0.9rem;
    }
    
    .error-message i {
        margin-right: 0.5rem;
    }
    
    .success-message {
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transition: opacity 0.3s ease;
        max-width: 300px;
    }
    
    .success-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .success-content i {
        font-size: 1.2rem;
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
    
    .service-btn {
        position: relative;
        overflow: hidden;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
    }
    
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .btn:disabled:hover {
        transform: none;
        box-shadow: none;
    }
`;

// Agregar estilos al head
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);