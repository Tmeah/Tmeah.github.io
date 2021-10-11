let contrastToggle = false;

function openHeader() {
  document
    .getElementById("header__anchor")
    .classList.toggle("header__logo--popper1");
}

function stopOpac() {
  document
    .getElementById("header__logo--hover")
    .classList.toggle("header__logo--hover");
}
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}
