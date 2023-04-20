
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    getInformation(); 
  
  });


/////////////////////////////////////////////////////////////////////
let checkChecked = document.getElementById("Label-Check")

function isChecked(){
    let isChecked = document.querySelector(".Primary-Navbar");
    if(checkChecked.checked === true){
       isChecked.setAttribute("Data-Visible","true")
       isChecked.setAttribute("Aria-Expanded","true")
    }
    if(checkChecked.checked === false)
    isChecked.setAttribute("Data-Visible","false")
    isChecked.setAttribute("Aria-Expanded","false")

}
checkChecked.addEventListener("click",isChecked );

///////////////////////////////////////////////////////////////////////////////////////////////////



function getWorkout(){
    const anotherPage = "./Project1/index.html";
    document.location.replace(anotherPage);

}





////////////////////////////////////////////////////////////////////////////////////


function getInformation(){
    document.getElementById("Description").innerHTML="";

    document.getElementById("Instruction").innerHTML="";
    const selectOption = document.getElementById("select-option");
    const selectedValue = selectOption.value;
    const exerType = document.getElementById("Exercise-Type");
    const exerciseType = exerType.value;
    const muscSelect= document.getElementById("select-muscle");
    const muscleSelected= muscSelect.value;



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

var enterThis = ""
var  type = exerciseType;
var muscle = muscleSelected;
var difficulty = selectedValue;
fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${enterThis}&type=${type}&muscle=${muscle}&difficulty=${difficulty}`, options)
	.then(response => response.json())
	.then(function(response){
var reso = response


        var displayDescr = document.getElementById("Description")
        let createDes = document.createElement("h1")
        createDes.innerHTML = `Showing Results For : ${type}`
        displayDescr.appendChild(createDes);
    


    var hereToo = document.getElementById("Instruction");
    reso.forEach(element =>{
        let createH = document.createElement("a");

        createH.className="Hyper-Link";
        createH.href=`https://www.youtube.com/results?search_query=${element.name} `
        createH.target="_blank";        
        
        createH.innerHTML = `${element.name} &#10162; `;

        hereToo.appendChild(createH);

        let instruction = document.createElement("div");


    instruction.className = "instruction";
    instruction.innerHTML = element.instructions;
    hereToo.appendChild(instruction);
})

})

}
///////////////////////////////////////////////////////////////////////////////////////

const newsOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
		'X-RapidAPI-Host': 'ny-times-news-titles-and-urls.p.rapidapi.com'
	}
};

fetch('https://ny-times-news-titles-and-urls.p.rapidapi.com/news', newsOptions)
	.then(response => response.json())
    .then(function(response){
        console.log(response)
       var sportsNews = response.sports;

       let infoTitle = document.querySelector(".card-content");
    sportsNews.forEach(element=>{
    console.log(element);
    let createSportTitle = document.createElement("h2");
    createSportTitle.className = "card-title";
    createSportTitle.innerHTML = element.title;
    infoTitle.appendChild(createSportTitle);

    let createSport = document.createElement("a");
    createSport.className = "card-title-link";
    createSport.href = element.url;
    createSport.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = "./img/external-link.png"
    createImg.className = "card-title-image";
    createSport.appendChild(createImg);

    infoTitle.appendChild(createSport);


})

var healthNews = response.health;
let healthTitle = document.querySelector(".card-content2");
healthNews.forEach(element=>{
   
    let createHealthTitle = document.createElement("h2");
    createHealthTitle.className = "card-title";
    createHealthTitle.innerHTML = element.title;
    healthTitle.appendChild(createHealthTitle);
    let createA = document.createElement("a");
    createA.href = element.url;
    createA.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = "./img/external-link.png"
    createImg.className = "card-title-image";

    createA.appendChild(createImg);
    healthTitle.appendChild(createA);
        

})  
var foodNews = response.food;
let foodTitle = document.querySelector(".card-content3");
foodNews.forEach(element=>{
   
    let createFoodTitle = document.createElement("h2");
    createFoodTitle.className = "card-title";
    createFoodTitle.innerHTML = element.title;
    foodTitle.appendChild(createFoodTitle);
    let createA = document.createElement("a");
    createA.href = element.url;
    createA.target = "_blank";
    let createImg = document.createElement("img");
    createImg.src = "./img/external-link.png"
    createImg.className = "card-title-image";
    createA.appendChild(createImg);
    foodTitle.appendChild(createA);
})














    
      
      
        
       
    })




