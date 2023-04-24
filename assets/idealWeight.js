function calculateBMI() {

    var genderPicker = document.querySelector('.gender-picker');
    var selectedGender = genderPicker.querySelector('input:checked');
    var height = document.querySelector("#height").value;
    var heightUnit = document.querySelector("#heightUnit").value;
    var weightUnit = document.querySelector("#weightUnit").value;
  
    
    // Validate input values; REMOVE/NOT NEEDED?
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
    
    fetch(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=${selectedGender}&height=${height}`, options)
        .then(response => response.json())
        .then(response => {

            var idealWeightObject = response.data;
            var devine = idealWeightObject.Devine;
            var hamwi = idealWeightObject.Hamwi;
            var miller = idealWeightObject.Miller;
            var robinson = idealWeightObject.Robinson;

            var result = document.querySelector("#result");
            var kgLb = "kg"


            if (weightUnit === "lb") {
                var kgLb = "lb";
                devine = devine * 2.20462;
                hamwi = hamwi * 2.20462;
                miller = miller * 2.20462;
                robinson = robinson * 2.20462;
            }



            if (response.status_code !== 200){
                result.innerHTML = "Your input is invalid, please try again!";
            } else {
                result.innerHTML = `Using the Devine Method, your ideal weight is: ${devine.toFixed(2)}${kgLb}`;

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
                    Using the Hamwi Method, your ideal weight is: ${hamwi.toFixed(2)}${kgLb}, using the Miller Method, your ideal weight is: ${miller.toFixed(2)}${kgLb}, and lastly, using the Robinson Method, your ideal weight is: ${robinson.toFixed(2)}${kgLb}.
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
  
  
// check point!!!!!!!!!!!!1