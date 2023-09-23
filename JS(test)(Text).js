const namee = document.querySelector(".a")
const nameButton = document.querySelector("Button")
const list = document.getElementById("list");
const list3 = document.getElementById("list3");


//const backgroundColorText = document.getElementById("backgroundColor");



//var K = document.querySelector("li")
//zero
var backgroundColor = "peru"
var color = "black"

var numberColor = 0
var number = 0
var numberBackgraundColor = 0

var SaveNumber = 0
var SaveNumberColor = 0
var SaveNumberBackgraundColor = 0
//Function
function changeColorPlus() {
  numberColor++  
  colorText()
  Add()
 // Color()
  }
  function changeColorMinus() {
    numberColor--
    colorText()
    Add()
  //  Color()
    }

function changeBacgraundColorPlus(){
  numberBackgraundColor++
  BackgroundColor()
  Add()
   
 
}
function changeBacgraundColorMinus(){
  numberBackgraundColor--
  BackgroundColor()
  Add()
   
  

}
function NumberPlus(){
  number++
  Add()
  
 
}
function NumberMinus(){
  number--
  Add()
  
}
function Dead(){
  numberColor = 0
  number = 0
  numberBackgraundColor = 0
  colorText()
  BackgroundColor()
  Add()
 
}

//// backgroundColorText

function Add(){


 // backgroundColorText.style.backgroundColor = backgroundColor
  list.innerHTML = `<li id="list2" >Background <span id="backgroundColor"> ${backgroundColor} </span> color <span>  ${color}</span> number <span>  ${number} </span></li>`
}
function ENTER(){
  BackgroundColor()
  colorText()
 // numbers()
  Add()
  End()
}


function Save(){
  SaveNumber = number
  SaveNumberBackgraundColor = numberBackgraundColor
  SaveNumberColor = numberColor

  BackgroundColor()
  colorText()

  list3.innerHTML = `<li id="list3" > Save background <span id="backgroundColor"> ${backgroundColor} </span> color <span>  ${color}</span> number <span> ${number} </span></li>`
}
function Load(){
    number = SaveNumber
    numberBackgraundColor = SaveNumberBackgraundColor
    numberColor = SaveNumberColor
    BackgroundColor()
    colorText()
    Add()
}

function End(){
  namee.style.backgroundColor = backgroundColor
  namee.style.color = color
  namee.innerHTML = ` <h1 class="a" onclick="changeColorPlus()">Заголовок <span> ${number} </span></h1>`
}


// IF............................................................................

//function numbers(){
//  namee.innerHTML = ` <h1 class="a" onclick="changeColorPlus()">Заголовок <span> ${number} </span></h1>`
//}


function BackgroundColor(){
  
if (numberBackgraundColor === 3){
  
  backgroundColor = "red"
  //namee.style.backgroundColor = backgroundColor
} if(numberBackgraundColor === 1){
  
  backgroundColor = "green"
 // namee.style.backgroundColor = backgroundColor

} if(numberBackgraundColor === 2){
  
  backgroundColor = "yellow"
//  namee.style.backgroundColor = backgroundColor
} 

if(numberBackgraundColor === 0){
  backgroundColor = "peru"
 // namee.style.backgroundColor = backgroundColor
  
  

} 
if(numberBackgraundColor <= -1){
  numberBackgraundColor = -1
  backgroundColor = "gray"
//  namee.style.backgroundColor = backgroundColor
}
  if(numberBackgraundColor >= 4){
    numberBackgraundColor = 4
    backgroundColor = "pink"
 //   namee.style.backgroundColor = backgroundColor
  }}


  // Text

  function colorText(){
    if(numberColor === 0 ){
      
      color = "black"
  //    namee.style.color = color;
      
    
    }
  if(numberColor === 1 ){
    
    color = "blue"
  //  namee.style.color = color;

  }
  if(numberColor === 2 ){
    
    color = "white"
 //   namee.style.color = color;
  }
  if(numberColor === 3 ){
    
    color = "green"
  //  namee.style.color = color;
  }
  if(numberColor >= 4 ){
    
    color = "red"
  //  namee.style.color = color;
    numberColor = 4
  }
  if(numberColor <= -1 ){
    color = "pink"
  //  namee.style.color = color;
    numberColor = -1
    
  }
  }