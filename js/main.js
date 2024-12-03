const toggleBtn = document.querySelector(".toggle-nav");
const toggleBtnicon = document.querySelector(".toggle-nav i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");

  const Isopen = dropdownMenu.classList.contains("open");

  toggleBtnicon.classList = Isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
