
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
    // document.getElementById("List-Item").innerHTML="";
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

        // createH.innerHTML ="";
        // instruction.innerHTML ="";
console.log(reso)
// console.log(reso[0].name)
//     console.log(reso[0].instructions )
        var displayDescr = document.getElementById("Description")
        let createDes = document.createElement("h1")
        createDes.innerHTML = `Showing Results For : ${type}`
        displayDescr.appendChild(createDes);
        
        // var intoThis = document.getElementById("List-Item")
        // response.forEach(element => {
        //     let createEl = document.createElement("li");
        //     createEl.className = "exercise"; 
        //     createEl.innerHTML = element.name;
        //     intoThis.appendChild(createEl);
        // });


    var hereToo = document.getElementById("Instruction");
    reso.forEach(element =>{
        let createH = document.createElement("a");
        // let image = document.createElement("img");
        // image.className="Link"
        // image.src ="./img/external-link.png"
        createH.className="Hyper-Link";
        createH.href=`https://www.youtube.com/results?search_query=${element.name} `
        createH.target="_blank";        
        
        createH.innerHTML = `${element.name} &#10162; `;
        // hereToo.appendChild(image); 
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


//    infoTitle.appendChild(createSportTitle);

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
        // createA.appendChild(document.createTextNode(element.title));
        // healthTitle.appendChild(createA);

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
	// .catch(err => console.error(err));



// var doThis = document.getElementById("Started");
// doThis.addEventListener("click",function(){
  
//     let anotherPage = "./Project1/index.html"
//     document.location.replace(anotherPage)
//     getInformation()
    
// })



// function takeMe(getInformation){
    
//     document.location.replace(anotherPage);
    
// }   




// var techNews = response.tech;
// var businessNews = response.business;
// var stories = sportsNews.concat(healthNews).concat(techNews).concat(businessNews);
// var news = stories.map(element => {
//  let newsItem = document.createElement("div");
//  newsItem.className = "news";
//  newsItem.innerHTML = element.title;
//  let newsLink = document.createElement("a");
//  newsLink.className = "news-link";
//  newsLink.href = element.url;
//  newsLink.target = "_blank";
//  newsLink.innerHTML = element.title;
//  newsItem.appendChild(newsLink);


























//  var intoThis = document.getElementById("app")
// response.forEach(element => {
//     let createEl = document.createElement("div");
//     createEl.className = "exercise";
//     createEl.innerHTML = element.name;
//     intoThis.appendChild(createEl);
// });
// let here = document.getElementById("musc")
//     reso.forEach(element => {
//         console.log(reso)
//     let muscle = document.createElement("div");
 
//     muscle.className = "muscle";
//     muscle.innerHTML = element.muscle;
//     musc.appendChild(muscle);
   

// });

// var hereToo = document.getElementById("instruction");
// reso.forEach(element =>{
//     let instruction = document.createElement("div");
//     instruction.className = "instruction";
//     instruction.innerHTML = element.instructions;
//     hereToo.appendChild(instruction);
// })


   




       
//         // console.log(response[0].name)
//     })
// 	.catch(err => console.error(err));

/*MUSCLE
abdominals
abductors
adductors
biceps
calves
chest
forearms
glutes
hamstrings
lats
lower_back
middle_back
neck
quadriceps
traps
triceps*/

