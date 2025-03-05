const texts = [
    "Vive la Pasión del Tango",
    "Siente el Ritmo en tu Alma",
    "Baila con el Corazón"
];
let currentIndex = 0;

function changeText() {
    const textElement = document.getElementById('slider-text');
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 5000);

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
        { 
            title: "Un poco de historia del tango", 
            content: "El tango es uno de los géneros musicales más icónicos y emblemáticos de la cultura argentina, y su origen se remonta a la ciudad de Buenos Aires a fines del siglo XIX. ",
            link: "https://argentina-tango.net/2023/03/05/un-poco-de-historia-del-tango/"
        },
        { 
            title: "Clases Online Disponibles", 
            content: "Ahora puedes aprender tango desde la comodidad de tu hogar con nuestras nuevas clases en línea.",
            link: "https://hotmart.com/es/marketplace/productos/20-lecciones-de-tango/F62016758K"
        },
        { 
            title: "Colección de Moda Otoño/Invierno", 
            content: "Descubre nuestra nueva colección de ropa y accesorios inspirados en el tango argentino.",
            link: "/pages/otonio-invierno-2025.pdf"
        }
    ];

    newsItems.forEach(item => {
        const newsItem = document.createElement('a');
        newsItem.classList.add('news-item');
        newsItem.href = item.link;
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