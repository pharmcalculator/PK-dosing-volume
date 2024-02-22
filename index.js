function calculateDosingVolume() {
  const strength = parseFloat(document.getElementById("strength").value);
  const bodyWeight = parseFloat(document.getElementById("body-weight").value);
  const solutionConcentration = parseFloat(document.getElementById("solution-concentration").value);

  if (isNaN(strength) || isNaN(bodyWeight) || isNaN(solutionConcentration)) {
    alert("Please enter valid numeric values.");
    return;
  }

  const dosingVolume = (strength * bodyWeight) / (solutionConcentration * 1000);
  const roundedDosingVolume = dosingVolume.toFixed(2);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "<strong>Dosing Volume: " + roundedDosingVolume + " mL</strong>";
}