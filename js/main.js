"use strict";

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".page-input");
const elTypeSelect = document.querySelector(".type-select");
const elPartSelect = document.querySelector(".part-select");
const elText = document.querySelector(".num");

// const pageInput = elInput.value
// const formatSelect = elTypeSelect.value;
// const typeSelect = elPartSelect.value;



elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elText.textContent = elInput.value * elTypeSelect.value + elPartSelect.value * 1;

});
