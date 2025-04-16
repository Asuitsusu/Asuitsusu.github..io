// Actualizar el año en el footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearElements = document.querySelectorAll("#current-year")
  const currentYear = new Date().getFullYear()

  currentYearElements.forEach((element) => {
    element.textContent = currentYear
  })

  // Activar tooltips de Bootstrap
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Efecto de scroll suave para los enlaces de anclaje
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para el navbar fijo
          behavior: "smooth",
        })
      }
    })
  })

  // Cambiar la clase active del navbar según la página actual
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")
    if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
      link.classList.add("active")
    }
  })

  // Animación para las tarjetas de productos
  const productCards = document.querySelectorAll(".product-card")

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)"
    })
  })
})

// Función para mostrar un mensaje de confirmación al hacer clic en "Comprar Ahora"
function showPurchaseConfirmation() {
  alert("¡Gracias por tu interés! Esta función estará disponible próximamente.")
  return false
}

// Asignar la función a todos los botones de compra
document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".btn-primary:not(.navbar-toggler)")

  buyButtons.forEach((button) => {
    if (button.textContent.includes("Comprar")) {
      button.addEventListener("click", showPurchaseConfirmation)
    }
  })
})
