// Datos de la galería basados en el archivo info.txt
const galleryData = [
    {
        id: 1,
        filename: 'piscina1.jpeg',
        title: 'Piscina Curva en Espacio Exterior',
        description: 'Piscina de forma irregular/riñón con borde de solerones de piedra de color arena (full-graint), instalada en un entorno de campo con rejas metálicas perimetrales.',
        category: 'construction',
        aspectRatio: '16:9'
    },

    {
        id: 3,
        filename: 'piscina3.jpeg',
        title: 'Piscina en Terraza con Césped Sintético',
        description: 'Piscina rectangular rodeada de césped sintético y solerones blancos, creando un espacio de descanso con tumbonas en una terraza con vista a la naturaleza.',
        category: 'spaces',
        aspectRatio: '3:4'
    },
    {
        id: 4,
        filename: 'piscina4.jpeg',
        title: 'Piscina Mosaico Azul en Construcción',
        description: 'Vista del proceso de revestimiento: piscina rectangular forrada con mosaico de varios tonos de azul, con borde de piedra travertino clara.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 5,
        filename: 'pscina5.jpeg',
        title: 'Piscina con Revestimiento Verde Musgo',
        description: 'Piscina con paredes y piso revestidos en un tono verde/gris terroso, con muro de piedra natural en la pared de fondo y plantas decorativas.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 6,
        filename: 'piscina6.jpeg',
        title: 'Piscina con Vista Panorámica',
        description: 'Piscina rectangular de color azul intenso, con escaleras y dos pilares/bancos interiores. Ubicada en una ladera con una extensa vista al valle.',
        category: 'construction',
        aspectRatio: '16:9'
    },
    {
        id: 7,
        filename: 'piscina7.jpeg',
        title: 'Piscina Azul Intenso con Chorros',
        description: 'Piscina de color azul profundo, destacando cuatro columnas internas, cuya funcion es simular un asiento en el agua. Enmarcada con solerones blancos en un entorno rústico.',
        category: 'construction',
        aspectRatio: '16:9'
    },
    {
        id: 8,
        filename: 'piscina8.jpeg',
        title: 'Piscina con Solárium de Piedra',
        description: 'Piscina con color interior turquesa, incluye un nicho cuadrado interior. Rodeada por una amplia terraza de travertino de tonos cálidos.',
        category: 'spaces',
        aspectRatio: '16:9'
    },
    {
        id: 9,
        filename: 'piscina9.jpeg',
        title: 'Espacio de Relajo con Piscina',
        description: 'Piscina rectangular con revestimiento verde claro/turquesa, enmarcada por una terraza de piedra clara con reposeras y mobiliario de descanso.',
        category: 'spaces',
        aspectRatio: '16:9'
    },
    {
        id: 10,
        filename: 'piscina10.jpeg',
        title: 'Piscina con Deck de Madera en Ladera',
        description: 'Instalación de piscina rectangular con revestimiento turquesa, rodeada de un amplio deck de madera en un paisaje de colina y vegetación.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 11,
        filename: 'piscina11.jpeg',
        title: 'Piscina Compacta Urbana con Deck',
        description: 'Piscina rectangular pequeña con agua color turquesa, bordeada por solerones de árido fino. Ideal para patios pequeños en entornos con edificios.',
        category: 'construction',
        aspectRatio: '3:4'
    },
    {
        id: 12,
        filename: 'piscina13.jpeg',
        title: 'Piscina de Mosaico y Jardín',
        description: 'Vista aérea de una piscina rectangular revestida completamente con mosaico azul. Rodeada por césped natural y solerones de piedra gris clara.',
        category: 'construction',
        aspectRatio: '3:4'
    },
    {
        id: 13,
        filename: 'piscina14.jpeg',
        title: 'Piscina Azul Intenso y Borde Travertino',
        description: 'Piscina rectangular con revestimiento azul vibrante y borde de solerones de travertino color arena en un patio de ladrillos y cierres rústicos.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 14,
        filename: 'piscina15.jpeg',
        title: 'Piscina de Fibra Blanca',
        description: 'Instalación de piscina con revestimiento interior de color blanco y borde de mosaico azul verdoso. Enmarcada por solerones de travertino claro.',
        category: 'construction',
        aspectRatio: '3:4'
    },
    {
        id: 15,
        filename: 'piscina16.jpeg',
        title: 'Piscina de Diseño Minimalista Gris',
        description: 'Piscina de líneas rectas con revestimiento interior en color gris oscuro, escaleras integradas y un pequeño jardinera/nicho decorativo redondeado en el borde.',
        category: 'construction',
        aspectRatio: '3:4'
    },
    {
        id: 16,
        filename: 'piscina17.jpeg',
        title: 'Detalle de Escalera y Solárium',
        description: 'Vista cercana del interior de la piscina con escaleras en la esquina y una zona cuadrada elevada (solárium o jacuzzi) antes del llenado. Borde de travertino.',
        category: 'construction',
        aspectRatio: '1:1'
    },
    {
        id: 17,
        filename: 'piscina18.jpeg',
        title: 'Piscina con Escalera y Mosaico',
        description: 'Vista diagonal de una piscina con borde de travertino. Destaca la escalera sumergida con detalles de mosaico azul y agua en tonos verdes claros.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 18,
        filename: 'piscina19.jpeg',
        title: 'Biopiscina con Zona de Filtrado',
        description: 'Diseño de piscina ecológica o biopiscina, con una zona de nado de agua clara y una zona adyacente de filtrado con rocas y plantas acuáticas (zona de regeneración).',
        category: 'construction',
        aspectRatio: '16:9'
    },
    {
        id: 19,
        filename: 'piscina20.jpeg',
        title: 'Piscina con Área de Nado y Tumbona',
        description: 'Piscina rectangular de gran tamaño con área de nado y un espacio cuadrado superficial (posible solárium o jacuzzi) revestido en mosaico azul. Rodeada de travertino.',
        category: 'construction',
        aspectRatio: '4:3'
    },
    {
        id: 20,
        filename: 'piscina21.jpeg',
        title: 'Instalación de Piscina Rectangular',
        description: 'Piscina rectangular con interior pintado de color azul claro, bordeada por solerones de piedra blanca en un patio de tierra. Obra en fase de terminación.',
        category: 'construction',
        aspectRatio: '3:4'
    }
];

// Variables globales de la galería
let currentFilter = 'all';
let currentModalIndex = 0;
let modalImages = [];

// Función para inicializar el módulo de galería
function initializeGalleryModule() {
    renderGallery();
    initializeFilters();
    initializeModal();
}

// Renderizar galería
function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    // Filtrar imágenes
    const filteredImages = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    // Limpiar galería existente
    galleryGrid.innerHTML = '';

    // Renderizar nuevas imágenes
    filteredImages.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });

    // Actualizar array de imágenes del modal
    modalImages = filteredImages;

    // Aplicar animaciones
    applyGalleryAnimations();
}

// Crear elemento de galería
function createGalleryItem(item, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('data-category', item.category);
    div.setAttribute('data-index', index);
    
    div.innerHTML = `
        <img src="img/${item.filename}" alt="${item.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-description">${item.description}</p>
        </div>
        <div class="gallery-expand">
            <i class="fas fa-expand-alt"></i>
        </div>
    `;

    // Manejar evento click
    div.addEventListener('click', (e) => {
        // Si se hace click en el botón de expandir, abrir modal siempre
        if (e.target.closest('.gallery-expand')) {
            openModal(index);
            e.stopPropagation();
            return;
        }

        // Detectar si es vista móvil (<= 768px)
        if (window.innerWidth <= 768) {
            // En móvil: primer click muestra info (toggle active), segundo click en expandir abre modal
            // Cerrar otros items activos para mantener limpieza
            const currentActive = document.querySelector('.gallery-item.active');
            if (currentActive && currentActive !== div) {
                currentActive.classList.remove('active');
            }

            div.classList.toggle('active');
        } else {
            // En desktop: click abre modal (hover ya muestra info)
            openModal(index);
        }
    });

    return div;
}

// Inicializar filtros
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar clase active al botón clickeado
            this.classList.add('active');

            // Obtener filtro
            const filter = this.getAttribute('data-filter');

            // Aplicar filtro con animación
            applyFilterWithAnimation(filter);
        });
    });
}

// Aplicar filtro con animación
function applyFilterWithAnimation(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Animar salida de elementos actuales
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-out');
        }, index * 50);
    });

    // Esperar a que termine la animación y renderizar nuevos elementos
    setTimeout(() => {
        renderGallery(filter);
    }, galleryItems.length * 50 + 300);
}

// Aplicar animaciones a la galería
function applyGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        // Resetear animación
        item.style.animation = 'none';
        item.offsetHeight; // Trigger reflow

        // Aplicar nueva animación con delay
        setTimeout(() => {
            item.style.animation = `fadeInUp 0.6s ease-out forwards`;
            item.style.animationDelay = `${index * 100}ms`;
        }, 50);
    });
}

// Inicializar modal
function initializeModal() {
    // Crear modal si no existe
    if (!document.querySelector('.gallery-modal')) {
        createModal();
    }
}

// Crear modal de galería
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.id = 'gallery-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="image-counter">
                <span id="current-image">1</span> / <span id="total-images">${modalImages.length}</span>
            </div>
            <img id="modal-image" class="modal-image" src="" alt="">
            <div class="modal-info">
                <h2 id="modal-title" class="modal-title"></h2>
                <p id="modal-description" class="modal-description"></p>
            </div>
            <button class="modal-nav modal-prev" onclick="navigateModalImage('prev')">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="modal-nav modal-next" onclick="navigateModalImage('next')">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="modal-indicators" id="modal-indicators"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Eventos del modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Abrir modal
function openModal(index) {
    const modal = document.getElementById('gallery-modal');
    if (!modal) return;
    
    currentModalIndex = index;
    updateModalContent();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Crear indicadores
    createModalIndicators();
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('gallery-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Actualizar contenido del modal
function updateModalContent() {
    const item = modalImages[currentModalIndex];
    if (!item) return;
    
    // Actualizar imagen
    const modalImage = document.getElementById('modal-image');
    modalImage.src = `img/${item.filename}`;
    modalImage.alt = item.title;
    
    // Actualizar información
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-description').textContent = item.description;
    
    // Actualizar contador
    document.getElementById('current-image').textContent = currentModalIndex + 1;
    document.getElementById('total-images').textContent = modalImages.length;
    
    // Actualizar indicadores
    updateModalIndicators();
}

// Navegar en el modal
function navigateModalImage(direction) {
    if (direction === 'prev') {
        currentModalIndex = currentModalIndex > 0 ? currentModalIndex - 1 : modalImages.length - 1;
    } else {
        currentModalIndex = currentModalIndex < modalImages.length - 1 ? currentModalIndex + 1 : 0;
    }
    
    updateModalContent();
    
    // Animar transición
    const modalImage = document.getElementById('modal-image');
    modalImage.style.opacity = '0';
    setTimeout(() => {
        modalImage.style.opacity = '1';
    }, 100);
}

// Crear indicadores del modal
function createModalIndicators() {
    const indicatorsContainer = document.getElementById('modal-indicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    
    modalImages.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === currentModalIndex) {
            indicator.classList.add('active');
        }
        
        indicator.addEventListener('click', () => {
            currentModalIndex = index;
            updateModalContent();
        });
        
        indicatorsContainer.appendChild(indicator);
    });
}

// Actualizar indicadores del modal
function updateModalIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentModalIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Soporte para gestos táctiles
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const modal = document.querySelector('.gallery-modal.active');
    if (!modal) return;
    
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe hacia la izquierda - siguiente imagen
            navigateModalImage('next');
        } else {
            // Swipe hacia la derecha - imagen anterior
            navigateModalImage('prev');
        }
    }
}

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('.gallery-img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Pre-cargar imágenes del modal
function preloadModalImages() {
    modalImages.forEach(item => {
        const img = new Image();
        img.src = `img/${item.filename}`;
    });
}

// Función para obtener datos de la galería
function getGalleryData() {
    return galleryData;
}

// Función para filtrar por categoría
function filterGalleryByCategory(category) {
    const filterButton = document.querySelector(`[data-filter="${category}"]`);
    if (filterButton) {
        filterButton.click();
    }
}

// Función para abrir modal con imagen específica
function openModalByImageId(imageId) {
    const imageIndex = modalImages.findIndex(item => item.id === imageId);
    if (imageIndex !== -1) {
        openModal(imageIndex);
    }
}

// Función para actualizar la galería dinámicamente
function updateGallery(newData) {
    galleryData.length = 0; // Limpiar array existente
    galleryData.push(...newData); // Agregar nuevos datos
    renderGallery(currentFilter); // Re-renderizar con el filtro actual
}

// Event listeners adicionales
document.addEventListener('keydown', function(e) {
    const modal = document.querySelector('.gallery-modal.active');
    if (!modal) return;
    
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            navigateModalImage('prev');
            break;
        case 'ArrowRight':
            navigateModalImage('next');
            break;
        case 'Home':
            e.preventDefault();
            currentModalIndex = 0;
            updateModalContent();
            break;
        case 'End':
            e.preventDefault();
            currentModalIndex = modalImages.length - 1;
            updateModalContent();
            break;
    }
});

// Optimización de rendimiento para la galería
function optimizeGalleryPerformance() {
    // Usar requestAnimationFrame para animaciones suaves
    let animationFrameId;
    
    function smoothScrollTo(target) {
        cancelAnimationFrame(animationFrameId);
        
        const start = window.pageYOffset;
        const end = target.offsetTop - 100;
        const duration = 600;
        let startTime = null;
        
        function animateScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const easeInOutQuad = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;
            
            window.scrollTo(0, start + (end - start) * easeInOutQuad);
            
            if (timeElapsed < duration) {
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        }
        
        animationFrameId = requestAnimationFrame(animateScroll);
    }
    
    // Agregar función al objeto global para que esté disponible
    window.smoothScrollToGallery = smoothScrollTo;
}

// Inicializar optimizaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    optimizeGalleryPerformance();
    
    // Pre-cargar imágenes después de un pequeño delay
    setTimeout(preloadModalImages, 1000);
    
    // Inicializar lazy loading
    setTimeout(initializeLazyLoading, 500);
});

// Hacer funciones disponibles globalmente
window.openModal = openModal;
window.closeModal = closeModal;
window.navigateModalImage = navigateModalImage;
window.filterGalleryByCategory = filterGalleryByCategory;
window.openModalByImageId = openModalByImageId;

// Exportar funciones para otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getGalleryData,
        updateGallery,
        openModal,
        closeModal,
        filterGalleryByCategory
    };
}