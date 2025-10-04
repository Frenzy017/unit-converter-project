/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Basic conversion factors (from -> to)

const convertButton = document.getElementById("convert-button");
const lengthText = document.getElementById("length");
const volumeText = document.getElementById("volume");
const massText = document.getElementById("mass");

function lengthConversion() {
  convertButton.addEventListener("click", () => {
    let inputDigitElement = document.getElementById("input-digit").value;

    const meterToFeetConversion = inputDigitElement * 3.281;
    const feetToMeterConversion = inputDigitElement / 3.281;

    lengthText.textContent = `
    ${inputDigitElement} meters = ${meterToFeetConversion.toFixed(3)} feet | 
    ${inputDigitElement} feet = ${feetToMeterConversion.toFixed(3)} meters
    `;
  });
}

function volumeConversion() {
  convertButton.addEventListener("click", () => {
    let inputDigitElement = document.getElementById("input-digit").value;

    const literToGallonConversion = inputDigitElement / 3.785;
    const gallonToLiterConversion = inputDigitElement * 3.785;

    volumeText.textContent = `
         ${inputDigitElement} liters = ${literToGallonConversion.toFixed(
      3
    )} gallons | 
         ${inputDigitElement} gallons = ${gallonToLiterConversion.toFixed(
      3
    )} liters
         `;
  });
}

function massConversion() {
  convertButton.addEventListener("click", () => {
    let inputDigitElement = document.getElementById("input-digit").value;

    const kiloToPoundConversion = inputDigitElement * 2.205;
    const poundToKiloConversion = inputDigitElement / 2.205;
    massText.textContent = `
         ${inputDigitElement} kilos = ${kiloToPoundConversion.toFixed(
      3
    )} pounds | 
         ${inputDigitElement} pounds = ${poundToKiloConversion.toFixed(3)} kilos
         `;
  });
}

lengthConversion();
volumeConversion();
massConversion();
