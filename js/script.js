// variable from the form
let inputDay;
let inputMonth;
let inputYear;
let gender;

// submit button
const btnSubmit = document.querySelector(".submit");

// adding event listener to the submit button
btnSubmit.addEventListener("click", function(){

    // selecting elements
    inputDay = Number (document.getElementById("day").value);
    inputMonth = Number (document.getElementById("month").value);
    inputYear = Number (document.getElementById("year").value);
    gender = document.getElementsByName("gender").value;

    
});