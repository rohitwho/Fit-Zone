function calculateBMI() {

  var weight = document.querySelector("#weight").value;
  var height = document.querySelector("#height").value;
  var weightUnit = document.querySelector("#weightUnit").value;
  var heightUnit = document.querySelector("#heightUnit").value;
  var age = document.querySelector("#age").value;

  
  // Validate input values; REMOVE/NOT NEEDED?
  if (age < 1 || age > 80) {
    // Check if there is an existing p element or linebreak in weightDiv
    var existingAgeAlert = ageDiv.querySelector("p");
    if (existingAgeAlert) {
        ageDiv.removeChild(existingAgeAlert);
    }
    var existingLineBreak = ageDiv.querySelector("br");
    if (existingLineBreak) {
        ageDiv.removeChild(existingLineBreak);
    }

    var ageAlert = document.createElement("p");
    ageAlert.style.fontSize = "14px";
    ageAlert.style.fontWeight = "bold";
    ageAlert.style.color = "red";
    ageAlert.innerHTML = 'Age should be between 1 and 80 years.';

    ageDiv.appendChild(ageAlert);

    var lineBreak = document.createElement("br");
    ageDiv.appendChild(lineBreak);

    return;
  } else {
    var existingAgeAlert = ageDiv.querySelector("p");
    if (existingAgeAlert) {
        ageDiv.removeChild(existingAgeAlert);
    }
    var existingLineBreak = ageDiv.querySelector("br");
    if (existingLineBreak) {
        ageDiv.removeChild(existingLineBreak);
    }
  };


  if ((weightUnit === "lb" && (weight < 88.18 || weight > 352.74)) ||
  (weightUnit === "kg" && (weight < 40 || weight > 160))) {

    // Check if there is an existing p element or linebreak in weightDiv
    var existingWeightAlert = weightDiv.querySelector("p");
    if (existingWeightAlert) {
        weightDiv.removeChild(existingWeightAlert);
    }
    var existingLineBreak = weightDiv.querySelector("br");
    if (existingLineBreak) {
        weightDiv.removeChild(existingLineBreak);
    }

    var weightAlert = document.createElement("p");
    weightAlert.style.fontSize = "14px";
    weightAlert.style.fontWeight = "bold";
    weightAlert.style.color = "red";

    if (weightUnit === "lb") {
        weightAlert.innerHTML = 'Weight should be between 88.18 and 352.74 lbs.';
    } else if (weightUnit === "kg") {
        weightAlert.innerHTML = 'Weight should be between 40 and 160 kg.';
    }
        
    weightDiv.appendChild(weightAlert);

    var lineBreak = document.createElement("br");
    weightDiv.appendChild(lineBreak);

    return;
  } else {
    var existingWeightAlert = weightDiv.querySelector("p");
    if (existingWeightAlert) {
        weightDiv.removeChild(existingWeightAlert);
    }
    var existingLineBreak = weightDiv.querySelector("br");
    if (existingLineBreak) {
        weightDiv.removeChild(existingLineBreak);
    }
  };

  if ((heightUnit === "in" && (height < 51.18 || height > 90.55)) ||
  (heightUnit === "cm" && (height < 130 || height > 230))) {

    // Check if there is an existing p element or linebreak in heightDiv
    var existingHeightAlert = heightDiv.querySelector("p");
    if (existingHeightAlert) {
        heightDiv.removeChild(existingHeightAlert);
    }
    var existingLineBreak = heightDiv.querySelector("br");
    if (existingLineBreak) {
        heightDiv.removeChild(existingLineBreak);
    }

    var heightAlert = document.createElement("p");
    heightAlert.style.fontSize = "14px";
    heightAlert.style.fontWeight = "bold";
    heightAlert.style.color = "red";

    if (heightUnit === "in") {
        heightAlert.innerHTML = 'Height should be between 51.18 and 90.55 in.';
    } else if (heightUnit === "cm") {
        heightAlert.innerHTML = 'Height should be between 130 and 230 cm.';
    }
        
    heightDiv.appendChild(heightAlert);

    var lineBreak = document.createElement("br");
    heightDiv.appendChild(lineBreak);

    return;
  } else {
    var existingHeightAlert = heightDiv.querySelector("p");
    if (existingHeightAlert) {
        heightDiv.removeChild(existingHeightAlert);
    }
    var existingLineBreak = heightDiv.querySelector("br");
    if (existingLineBreak) {
        heightDiv.removeChild(existingLineBreak);
    }
  };

  // Unit Conversin:
  if (weightUnit === "lb") {
    weight = weight * 0.453592; // convert lb to kg
  };

  if (heightUnit === "in") {

    height = height * 2.54; // convert in to cm
  }; 


  
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '01efd6fd62mshdf180c5281f7ab3p10335fjsn5a6c3f52dd3e',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
  };
  
  fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, options)
      .then(response => response.json())
      .then(response => bmiResults(response.data.bmi))
      .catch(err => console.error(err));

  
};

function bmiResults (bmi){

  result.innerHTML = "Your BMI is: " + bmi + "<br>";

  if (bmi < 14.5) {
    result.innerHTML += "Dangerously Underweight - You may need to consult with a doctor.";
  } else if (bmi < 18.5) {
    result.innerHTML += "Underweight - You may need to gain some weight.";
  }else if (bmi >= 18.5 && bmi < 25) {
    result.innerHTML += "Normal weight - You're in good shape!";
  } else if (bmi >= 25 && bmi < 30) {
    result.innerHTML += "Overweight - You may need to lose some weight.";
  } else {
    result.innerHTML += "Obese - You may need to consult with a doctor.";
  }
};

// check point!!!!!!!!!!!!1