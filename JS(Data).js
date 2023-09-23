var Day = document.getElementById("Day").value
var Month = document.getElementById("Month").value
var Year = document.getElementById("Year").value

var DataDemo2 = document.getElementById("DayMonthYear")
var Day2 = 0
var Month2 = 0
var Year2 = 0


function Scan4(){
    Day = document.getElementById("Day").value
Month = document.getElementById("Month").value
 Year = document.getElementById("Year").value
}
function MonthTh(){
    if(Month < 13 & Month > 0){
    Month2 = Month
    if(Month2 === '1'){
        Month2 = "January"
    }
    if(Month2 === '2'){
        Month2 =  "February"
    }
    if(Month2 === '3')
    {  Month2 =  'March' }
    if(Month2 === '4'){
        Month2 = 'April'
    }
    if(Month2 === '5'){
        Month2 = 'May'
    }if(Month2 === '6'){
        Month2 = 'June'

    }if(Month2 === '7'){
        Month2 = 'July'
    }if(Month2 === '8'){
        Month2 = 'August'
    }if(Month2 === '9'){
        Month2 = 'September'
    }if(Month2 === '10'){
        Month2 = 'October'
    }if(Month2 === '11'){
        Month2 = 'November'
    }if(Month2 === '12'){
        Month2 = 'December'
    }}else{
        Month2 = 'erro'
    }
}
function DayTh(){
    Day2 = Day
    if(Day == 1){
        Day2 += 'st'
    }
    if(Day == 2){
        Day2 += 'nd'
    }
    if(Day == 3){
        Day2 += 'rd'
    }
    if(Day > 3){
        Day2 += 'th'
    }


    if(Month === '1'  || Month === '3' || Month === '5' || Month === '7' || Month === '8' || Month === '10' || Month === '12'  ){
    if(Day > 31 ){
        Day2 = 'erro'
    }}
    if(Month === '4'  || Month === '6' || Month === '8' || Month === '11' || Month === '10'   ){
        if(Day > 30 ){
            Day2 = 'erro'
        }}
        if(Month === '2' ){
            if(Day > 29 ){
                Day2 = 'erro'
            }}
            if(Day < 1 ){
                Day2 = 'erro'
            }
}

function DataDemo(){
    Scan4()
    MonthTh()
    DayTh()
   
    DataDemo2.innerHTML = `<div>Data: ${Day2} ${Month2} ${Year} </div>` 
}
