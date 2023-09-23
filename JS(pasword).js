var password = document.getElementById("Pas").value;
var password2 = document.getElementById("Pas2").value;
var SavePas = 0;
var SavePassword = document.getElementById("SavePassword")


function save() {
 password = document.getElementById("Pas").value;
  SavePas = password;
  SavePassword.innerHTML = `<div>Save password: ${SavePas} </div>`


}




function Scan() {
  password2 = document.getElementById("Pas2").value;
  if(SavePas === password2){
    alert("nice")
  }
}
