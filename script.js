const hamLink = document.querySelector("#ham-link");
const navMobile = document.querySelector("#nav-mobile");

hamLink.addEventListener("click", () => {
  navMobile.classList.toggle("none");
});
