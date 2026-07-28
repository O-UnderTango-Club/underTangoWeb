// Animación de scroll para navbar
function handleScroll() {
  const navbar = document.getElementById("navbar")

  if (!navbar) return

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}

// Animación de secciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar el observador para las secciones
  const sections = document.querySelectorAll("section")
  const timelineItems = document.querySelectorAll(".timeline-item")

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observar todas las secciones y elementos de la línea de tiempo
  sections.forEach((section) => observer.observe(section))
  timelineItems.forEach((item) => observer.observe(item))

  // Agregar evento de scroll para el navbar
  window.addEventListener("scroll", handleScroll)

  // Inicializar el navbar según la posición inicial
  handleScroll()

  // Smooth scroll para los enlaces del menú
  document.querySelectorAll('#navbar a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Cerrar el menú móvil si está abierto
        const menu = document.getElementById("navbar-menu")
        const menuToggle = document.getElementById("menu-toggle")

        if (menu?.classList.contains("active")) {
        menu.classList.remove("active")
        menuToggle?.classList.remove("active")
        }
      }
    })
  })

  // Ajustar tamaños de imágenes inicialmente
  adjustImageSizes()

  // Ajustar tamaños de imágenes cuando cambia el tamaño de la ventana
  window.addEventListener("resize", adjustImageSizes)
})

// Añadir función para ajustar tamaños de imágenes según el dispositivo
function adjustImageSizes() {
  const windowWidth = window.innerWidth
  const imageContainers = document.querySelectorAll(".image-content")

  imageContainers.forEach((container) => {
    const img = container.querySelector("img")
    if (img) {
      // Ajustar tamaño de imagen según el ancho de la ventana
      if (windowWidth <= 360) {
        img.style.maxWidth = "75%"
      } else if (windowWidth <= 480) {
        img.style.maxWidth = "80%"
      } else if (windowWidth <= 768) {
        img.style.maxWidth = "85%"
      } else if (windowWidth <= 1024) {
        img.style.maxWidth = "90%"
      } else {
        img.style.maxWidth = "100%"
      }
    }
  })

  // Ajustar logos de clientes
  const clientLogos = document.querySelectorAll(".client-logos img")
  clientLogos.forEach((logo) => {
    if (windowWidth <= 360) {
      logo.style.maxWidth = "80px"
    } else if (windowWidth <= 480) {
      logo.style.maxWidth = "90px"
    } else if (windowWidth <= 768) {
      logo.style.maxWidth = "110px"
    } else if (windowWidth <= 1024) {
      logo.style.maxWidth = "150px"
    } else {
      logo.style.maxWidth = "180px"
    }
  })
}
