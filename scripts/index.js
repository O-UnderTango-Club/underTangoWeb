const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const specificSections = document.querySelectorAll("#shows, #classes, #fashion, #description1");

    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    timelineItems.forEach((item) => observer.observe(item));
    specificSections.forEach((section) => observer.observe(section));
});

const newsContainer = document.getElementById('news-container');
if (newsContainer) {
    const newsItems = [
        { title: "Nuevo Espectáculo: 'Tango Nocturno'", content: "No te pierdas nuestro último espectáculo que combina tango tradicional con elementos de danza contemporánea." },
        { title: "Clases Online Disponibles", content: "Ahora puedes aprender tango desde la comodidad de tu hogar con nuestras nuevas clases en línea." },
        { title: "Colección de Moda Otoño/Invierno", content: "Descubre nuestra nueva colección de ropa y accesorios inspirados en el tango argentino." }
    ];

    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: -25.600018652464488, lng: -54.57124648491867 },
        zoom: 12
    });
}

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_DE_API&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);