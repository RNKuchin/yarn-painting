import "../styles/style.css";

const burger = document.querySelector(".burger"),
  menu = document.querySelector("#header-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burger.name === "menu"
    ? ((burger.name = "close"),
      menu.classList.add("top-[80px]"),
      menu.classList.add("opacity-100"))
    : ((burger.name = "menu"),
      menu.classList.remove("top-[80px]"),
      menu.classList.remove("opacity-100"));
});
