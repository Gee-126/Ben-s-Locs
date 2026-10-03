const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");

  const isOpen = navbar.classList.contains("active");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navbar.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});