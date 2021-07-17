// variable from the form
let inputDay, inputMonth, inputYear, gender, message;
let akanMale = [];
let akanFemale = [];

// submit button
const btnSubmit = document.querySelector(".submit");

// adding event listener to the submit button
btnSubmit.addEventListener("click", function () {

    // selecting elements
    inputDay = Number(document.getElementById("day").value);
    inputMonth = Number(document.getElementById("month").value);
    inputYear = Number(document.getElementById("year").value);
    gender = document.querySelector('input[name="gender"]:checked');
    message = document.querySelector(".error");
    
   
    // validate date of birth user input
    if (inputDay <= 0 || inputDay > 31) {
        message.textContent = "Enter valid date";
        message.classList.remove("display");
    } else if (inputMonth <= 0 || inputMonth > 12) {
        message.textContent = "Enter a valid month";
        message.classList.remove("display");
    } else if (inputYear <= 0 || inputYear > 9999) {
        message.textContent = "Enter a valid year";
        message.classList.remove("display");
    }     // check if user year is before current year
    else if (inputYear > new Date().getFullYear()) {
        message.textContent = "Enter an year not greater than the current year 🙃";
        message.classList.remove("display");
    } else if(gender == null){
        message.textContent = "Select Your gender";
        message.classList.remove("display");
    }else {
        message.classList.add("display");
        message.textContent = "";
    }

});
