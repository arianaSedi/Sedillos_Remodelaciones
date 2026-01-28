// Scroll suave al hacer clic en el menú
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const destino = document.querySelector(this.hash);
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Cambiar color de navbar al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".barra");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
