/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Basic conversion factors (from -> to)

const digit = document.getElementById("digit").textContent;
const convertButton = document.getElementById("convert-button");
const lengthText = document.getElementById("length");
const volumeText = document.getElementById("volume");
const massText = document.getElementById("mass");

function lengthConversion() {
  const meterToFeetConversion = digit * 3.281;
  const feetToMeterConversion = digit / 3.281;

  convertButton.addEventListener("click", () => {
    lengthText.textContent = `
         ${digit} meters = ${meterToFeetConversion.toFixed(3)} feet | 
         ${digit} feet = ${feetToMeterConversion.toFixed(3)} meters
         `;
  });
}

function volumeConversion() {
  const literToGallonConversion = digit / 3.785;
  const gallonToLiterConversion = digit * 3.785;

  convertButton.addEventListener("click", () => {
    volumeText.textContent = `
         ${digit} liters = ${literToGallonConversion.toFixed(3)} gallons | 
         ${digit} gallons = ${gallonToLiterConversion.toFixed(3)} liters
         `;
  })
}

function massConversion() {
  const kiloToPoundConversion = digit * 2.205;
  const poundToKiloConversion = digit / 2.205;
  
  convertButton.addEventListener("click", () => {
    massText.textContent = `
         ${digit} kilos = ${kiloToPoundConversion.toFixed(3)} pounds | 
         ${digit} pounds = ${poundToKiloConversion.toFixed(3)} kilos
         `;
  })
}

lengthConversion();
volumeConversion();
massConversion();