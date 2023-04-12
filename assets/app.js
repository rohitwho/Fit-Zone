



function isChecked(){
    let checkChecked = document.getElementById("Label-Check");
    let isChecked = document.querySelector(".Primary-Navbar");
    if(checkChecked.checked){
       isChecked.getAttribute("Data-Visible","true")
    }

}