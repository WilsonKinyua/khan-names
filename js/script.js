// variable from the form
let inputDay, inputMonth, inputYear, gender, message, successMessage;
let akanMale = [];
let akanFemale = [];

// submit button
const btnSubmit = document.querySelector(".submit");

// adding event listener to the submit button
btnSubmit.addEventListener("click", function () {

    // test = document.querySelector("#test").value;
    // console.log(test);
    // test = new Date(test);
    // console.log(test.getDay());
    // selecting elements
    inputDay = Number(document.getElementById("day").value);
    inputMonth = Number(document.getElementById("month").value);
    inputYear = Number(document.getElementById("year").value);
    gender = document.querySelector('input[name="gender"]:checked');
    message = document.querySelector(".error");
    successMessage = document.querySelector(".div-alert");

    // akanNames
    let akanMale = [
        { dayOfTheWeek: "Sunday", akanName: "Kwasi" },
        { dayOfTheWeek: "Monday", akanName: "Kwadwo" },
        { dayOfTheWeek: "Tuesday", akanName: "Kwabena" },
        { dayOfTheWeek: "Wednesday", akanName: "Kwaku" },
        { dayOfTheWeek: "Thursday", akanName: "Yaw" },
        { dayOfTheWeek: "Friday", akanName: "Kofi" },
        { dayOfTheWeek: "Saturday", akanName: "Kwame" },
    ];

    let akanFemale = [
        { dayOfTheWeek: "Sunday", akanName: "Akosua" },
        { dayOfTheWeek: "Monday", akanName: "Adwoa" },
        { dayOfTheWeek: "Tuesday", akanName: "Abenaa" },
        { dayOfTheWeek: "Wednesday", akanName: "Akua" },
        { dayOfTheWeek: "Thursday", akanName: "Yaa" },
        { dayOfTheWeek: "Friday", akanName: "Afua" },
        { dayOfTheWeek: "Saturday", akanName: "Ama" },
    ];

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
    } else if (gender == null) {
        message.textContent = "Select Your gender";
        message.classList.remove("display");
    } else {
        message.classList.add("display");
        // message.textContent = "";

        // getting the day of the week born
        var monthBorn = parseInt(document.getElementById("month").value);
        var yearBorn = parseInt(document.getElementById("year").value);
        var dayBorn = parseInt(document.getElementById("day").value);
        var fullDate0fbirth = new Date(yearBorn + "/" + monthBorn + "/" + dayBorn);
        var d = fullDate0fbirth.getDay();
        
        // displaying Akan name according to user inputs
        if (gender.value == "male") {
            akanMale.find((item, index, arr) => {
                if (index == d) {
                    console.log(item.akanName, item.dayOfTheWeek);
                    successMessage.textContent = `Your Akan name is ${item.akanName} born on ${item.dayOfTheWeek} `;
                    successMessage.classList.remove("hidden");
                }
            });
        } else if (gender.value == "female") {
            akanFemale.find((item, index, arr) => {
                if (index == d) {
                    console.log(item.akanName, item.dayOfTheWeek);
                    successMessage.textContent = `Your Akan name is ${item.akanName} born on ${item.dayOfTheWeek} `;
                    successMessage.classList.remove("hidden");
                }
            });
        } else {
            let divAlertError = document.querySelector("div-alert-error").textContent = 'Error displaying your name 🙃';
            divAlertError.classList.remove("hidden");
        }

    }

});
