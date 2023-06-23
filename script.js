// function volume_sphere() {
//     //Write your code here
//   const radius = document.getElementById("radius");
//   const volume = document.getElementById("volume");
//   const button = document.getElementById("submit");

// 	const rad = parseFloat(radius.value);
// 	const volumeOfSphere = (4 / 3) * Math.PI * Math.pow(rad, 3);
// 	volume.value = volumeOfSphere.toFixed(2);
// } 
// 	button.addEventListener("click", volume_sphere);

function volume_sphere() {
  // Get the radius input and volume output elements from the DOM
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");

  // Get the value of the radius input
  const radius = parseInt(radiusInput.value);

  // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume output field
  volumeOutput.value = volume.toFixed(2);
}

// Get the calculate button element from the DOM
// const calculateButton = document.getElementById("submit");

// Add an event listener to the calculate button
// calculateButton.addEventListener("click", volume_sphere);


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
