// variable from the form
let inputDay, inputMonth, inputYear, gender, message, cc, yy;
let akanMale = [];
let akanFemale = [];
let dayOfTheWeek;
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
    
    // akanNames
    akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
    akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

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

        cc = Number(inputYear.toString().substr(-2));

        yy =  Number(inputYear.toString().slice(0, 2));
    
     
    }

});
