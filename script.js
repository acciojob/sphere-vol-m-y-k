function volume_sphere() {
    //Write your code here
  const radius = document.getElementById("radius");
  const volume = document.getElementById("volume");
  const button = document.getElementById("submit");

	const rad = parseFloat(radius.value);
	const volumeOfSphere = (4 / 3) * Math.PI * Math.pow(rad, 3);
	volume.textContent  = volumeOfSphere.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
