// Popover
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
// Gender select

const radioBtn1 = document.querySelector("#Male");
const radioBtn2 = document.querySelector("#Female");
const radioBtn3 = document.querySelector("#Custom");
const GenderSelect = document.querySelector("#GenderSelect");
radioBtn1.addEventListener("change", () => {
  GenderSelect.classList.add("d-none");
});
radioBtn2.addEventListener("change", () => {
  GenderSelect.classList.add("d-none");
});
radioBtn3.addEventListener("change", () => {
  GenderSelect.classList.remove("d-none");
});
