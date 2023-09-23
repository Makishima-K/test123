var Km = document.getElementById("Km").value
var Mile = document.getElementById("Mile").value
var KmToMile = document.getElementById("Km(Mile)")
var MileToKm = document.getElementById("Mile(Km)")


var Ff = 0
var Lp = 0

var X1 = 0
var X2 = 0


function KmToMileWork(){
    if(Km === undefined){
        Km = 0
    }
    Ff = Km*0.62137
    KmToMile.innerHTML = `<div>Mile: ${Ff} </div>`
}
function MileToKmWork(){
    if(Mile === undefined){
        Mile = 0
    }
    Lp = Mile*1.60934
    MileToKm.innerHTML = `<div>Km: ${Lp} </div>`
}


function KmToMileKD() {
    if (Km != X1) {
        KmToMileWork()
      
      X1 = Km;
    }
    Km = document.getElementById("Km").value;
  }
  function MileToKmKD() {
    if (Mile != X2) {
        MileToKmWork()
      
      X2 = Mile;
    }
    Mile = document.getElementById("Mile").value;
  }

  setInterval(() => KmToMileKD(), 10);
  setInterval(() => MileToKmKD(), 11);