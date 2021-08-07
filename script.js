
// function fnCalculateAgeFromGivesDates(){
//   var startDateInput = document.getElementById("txtStartDate").value;  
//   var endDateInput = document.getElementById("txtEndDate").value;  	 
 
//   // convert user input values into date object
// var startDate = new Date(startDateInput);
// var endDate  = new Date(endDateInput);
    
// // get difference between two date;
// var difference = endDate - startDate.getTime(); 
    
// var  ageDate = new Date(difference); 
// var calculatedAge =  Math.abs(ageDate.getUTCFullYear() - 1970);
// alert(calculatedAge);

// }



const firstDate = document.getElementById('txtStartDate');
const secondDate = document.getElementById('txtEndDate');

const button = document.querySelector('button');
const h2 = document.querySelector('h2');


function YearCalculator() {
  let startDate = new Date(firstDate.value);
  let endDate = new Date(secondDate.value);
  var difference = endDate - startDate.getTime();
  var  ageDate = new Date(difference); 

  // let yearsBetween = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  let yearsBetween = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  console.log(yearsBetween);
  h2.innerHTML = `${yearsBetween} Years`;
}

button.addEventListener('click', YearCalculator);




// function fnCalculateAgeFromGivesDates(){
//   var startDateInput = document.getElementById("txtStartDate").value;  
//   var endDateInput = document.getElementById("txtEndDate").value;  	 
 
//   // convert user input values into date object
// var startDate = new Date(startDateInput);
// var endDate  = new Date(endDateInput);
    
// // get difference between two date;
// var difference = endDate - startDate.getTime(); 
    
// var  ageDate = new Date(difference); 
// var calculatedAge =  Math.abs(ageDate.getUTCFullYear() - 1970);
// alert(calculatedAge);

// }