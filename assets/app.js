
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