
function calculateBodyFat() {

    var weight = document.querySelector("#weight").value;
    var height = document.querySelector("#height").value;
    var weightUnit = document.querySelector("#weightUnit").value;
    var heightUnit = document.querySelector("#heightUnit").value;
    var neckUnit = document.querySelector("#neckUnit").value;
    var waistUnit = document.querySelector("#waistUnit").value;
    var hipUnit = document.querySelector("#hipUnit").value;
    var age = document.querySelector("#age").value;
    var genderPicker = document.querySelector('.gender-picker');
    var selectedGender = genderPicker.querySelector('input:checked');
    var neck = document.querySelector("#neck").value;
    var waist = document.querySelector("#waist").value;
    var hip = document.querySelector("#hip").value;
    var weightDiv = document.querySelector("#weightDiv");


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
    
    if (!selectedGender) {
        var genderDiv = document.querySelector("#genderDiv");
        var existingGenderAlert = genderDiv.querySelector("p");
        if (existingGenderAlert) {
          genderDiv.removeChild(existingGenderAlert);
        }
        var existingLineBreak = genderDiv.querySelector("br");
        if (existingLineBreak) {
          genderDiv.removeChild(existingLineBreak);
        }
        
        var genderAlert = document.createElement("p");
        genderAlert.style.fontSize = "14px";
        genderAlert.style.fontWeight = "bold";
        genderAlert.style.color = "red";
        genderAlert.innerHTML = 'Please select a gender.';
        
        genderDiv.appendChild(genderAlert);
        genderDiv.appendChild(document.createElement("br"));
        
        return;
    } else {
        var genderDiv = document.querySelector("#genderDiv");
        var existingGenderAlert = genderDiv.querySelector("p");
        if (existingGenderAlert) {
          genderDiv.removeChild(existingGenderAlert);
        }
        var existingLineBreak = genderDiv.querySelector("br");
        if (existingLineBreak) {
          genderDiv.removeChild(existingLineBreak);
        }
        
        selectedGender = selectedGender.value;
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

    if ((neckUnit === "in" && (neck < 8 || neck > 31.5)) ||
    (neckUnit === "cm" && (neck < 20 || neck > 80))) {

        // Check if there is an existing p element or linebreak in heightDiv
        var existingNeckAlert = neckDiv.querySelector("p");
        if (existingNeckAlert) {
            neckDiv.removeChild(existingNeckAlert);
        }
        var existingLineBreak = neckDiv.querySelector("br");
        if (existingLineBreak) {
            neckDiv.removeChild(existingLineBreak);
        }

        var neckAlert = document.createElement("p");
        neckAlert.style.fontSize = "14px";
        neckAlert.style.fontWeight = "bold";
        neckAlert.style.color = "red";

        if (neckUnit === "in") {
            neckAlert.innerHTML = 'Neck circumference should be between 8 and 31.5.';
        } else if (neckUnit === "cm") {
            neckAlert.innerHTML = 'Neck circumference should be between 20 and 80.';
        }
            
        neckDiv.appendChild(neckAlert);

        var lineBreak = document.createElement("br");
        neckDiv.appendChild(lineBreak);

        return;
    } else {
        var existingNeckAlert = neckDiv.querySelector("p");
        if (existingNeckAlert) {
            neckDiv.removeChild(existingNeckAlert);
        }
        var existingLineBreak = neckDiv.querySelector("br");
        if (existingLineBreak) {
            neckDiv.removeChild(existingLineBreak);
        }
    };

    if ((waistUnit === "in" && (waist < 16 || waist > 51)) ||
    (waistUnit === "cm" && (waist < 40 || waist > 130))) {

        // Check if there is an existing p element or linebreak in heightDiv
        var existingWaistAlert = waistDiv.querySelector("p");
        if (existingWaistAlert) {
            waistDiv.removeChild(existingWaistAlert);
        }
        var existingLineBreak = waistDiv.querySelector("br");
        if (existingLineBreak) {
            waistDiv.removeChild(existingLineBreak);
        }

        var waistAlert = document.createElement("p");
        waistAlert.style.fontSize = "14px";
        waistAlert.style.fontWeight = "bold";
        waistAlert.style.color = "red";

        if (waistUnit === "in") {
            waistAlert.innerHTML = 'Waist circumference should be between 16 and 51.';
        } else if (waistUnit === "cm") {
            waistAlert.innerHTML = 'Waist circumference should be between 40 and 130.';
        }
            
        waistDiv.appendChild(waistAlert);

        var lineBreak = document.createElement("br");
        waistDiv.appendChild(lineBreak);

        return;
    } else {
        var existingWaistAlert = waistDiv.querySelector("p");
        if (existingWaistAlert) {
            waistDiv.removeChild(existingWaistAlert);
        }
        var existingLineBreak = waistDiv.querySelector("br");
        if (existingLineBreak) {
            waistDiv.removeChild(existingLineBreak);
        }
    };

    if ((hipUnit === "in" && (hip < 16 || hip > 51)) ||
    (hipUnit === "cm" && (hip < 40 || hip > 130))) {

        // Check if there is an existing p element or linebreak in heightDiv
        var existingHipAlert = hipDiv.querySelector("p");
        if (existingHipAlert) {
            hipDiv.removeChild(existingHipAlert);
        }
        var existingLineBreak = hipDiv.querySelector("br");
        if (existingLineBreak) {
            hipDiv.removeChild(existingLineBreak);
        }

        var hipAlert = document.createElement("p");
        hipAlert.style.fontSize = "14px";
        hipAlert.style.fontWeight = "bold";
        hipAlert.style.color = "red";

        if (hipUnit === "in") {
            hipAlert.innerHTML = 'Hip circumference should be between 16 and 51.';
        } else if (hipUnit === "cm") {
            hipAlert.innerHTML = 'Hip circumference should be between 40 and 130..';
        }
            
        hipDiv.appendChild(hipAlert);

        var lineBreak = document.createElement("br");
        hipDiv.appendChild(lineBreak);

        return;
    } else {
        var existingHipAlert = hipDiv.querySelector("p");
        if (existingHipAlert) {
            hipDiv.removeChild(existingHipAlert);
        }
        var existingLineBreak = hipDiv.querySelector("br");
        if (existingLineBreak) {
            hipDiv.removeChild(existingLineBreak);
        }
    };

    // Unit Conversin:
    if (weightUnit === "lb") {
        weight = weight * 0.453592; // convert lb to kg
    };

    if (heightUnit === "in") {

        height = height * 2.54; // convert in to cm
    }; 

    if (neckUnit === "in") {

        neck = neck * 2.54; // convert in to cm
    }; 

    if (waistUnit === "in") {

        waist = waist * 2.54; // convert in to cm
    }; 

    if (hipUnit === "in") {

        hip = hip * 2.54; // convert in to cm
    }; 



  
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '01efd6fd62mshdf180c5281f7ab3p10335fjsn5a6c3f52dd3e',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age}&gender=${selectedGender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`, options)
        .then(response => response.json())
        .then(response => {

            var bodyFatObject = response.data;
            var bmiBodyFat = bodyFatObject["Body Fat (BMI method)"];
            var bodyFatCategory = bodyFatObject["Body Fat Category"];
            var usNavyBodyFat = bodyFatObject["Body Fat (U.S. Navy Method)"];
            var bodyFatMass = bodyFatObject["Body Fat Mass"];
            var leanBodyMass = bodyFatObject["Lean Body Mass"]

            var kgLb = "kg"

            if (weightUnit === "lb") {
                bodyFatMass = bodyFatMass * 2.20462;
                leanBodyMass = leanBodyMass * 2.20462;
                var kgLb = "lb";
            }

            var result = document.querySelector("#result");

            if (usNavyBodyFat < 1 || usNavyBodyFat > 100){
                result.innerHTML = "Your input is invalid, please try again!";
            } else if (bodyFatCategory == undefined){
                result.innerHTML = `Your BMI Body Fat Percentage is: ${bmiBodyFat.toFixed(2)}%!`;
                displayMoreInfo()
            } else {
                result.innerHTML = `Your BMI Body Fat Percentage is: ${bmiBodyFat.toFixed(2)}% and you fall into the "${bodyFatCategory}" category!`;
                displayMoreInfo()
            }

                function displayMoreInfo(){

                    // Create a line break element
                    var lineBreak = document.createElement("br");
                    result.appendChild(lineBreak);

                    // Create a link to show/hide more info
                    var infoLink = document.createElement("a");
                    infoLink.style.fontSize = "12px";
                    infoLink.style.cursor = "pointer";
                    infoLink.innerHTML = '<i class="fas fa-info-circle"></i> Click here for more info!';
                    result.appendChild(infoLink);

                    // Create an initially hidden <li> element to show/hide when the link is clicked
                    var moreInfo = document.createElement("p");
                    moreInfo.style.fontSize = "16px";
                    moreInfo.textContent = ` 
                        Your body fat percentage, using the U.S. Navy method is ${usNavyBodyFat.toFixed(2)}%, your body fat mass is ${bodyFatMass.toFixed(2)} ${kgLb}, and your lean body mass is ${leanBodyMass.toFixed(2)} ${kgLb}
                    `;
                    moreInfo.style.display = "none";
                    result.appendChild(moreInfo);

                    // Toggle the visibility of the <p> element when the link is clicked
                    infoLink.addEventListener("click", function() {
                        if (moreInfo.style.display === "none") {
                        moreInfo.style.display = "block";
                        } else {
                        moreInfo.style.display = "none";
                        }
                    });
                };
            })
        .catch(err => console.error(err));

};

// check point!!!!!!!!!!!