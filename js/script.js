const currentYearElement = document.querySelector('#current-year');
currentYearElement.textContent = new Date().getFullYear();

const ageElement = document.querySelector('#age');
if (ageElement) {
  ageElement.textContent = new Date().getFullYear() - 1998;
}