/* _________________________________________________
// -------------  Password Generator  --------------
// ------------------------------------------------- */





/* --------  GLOBAL  -------- */
const lengthSlider = document.querySelector(".pass-range");
const lengthSliderSpan = document.querySelector(".pass-length_details span");

const options = document.querySelectorAll(".option input");


const passwordInput = document.querySelector("#password-input");
const passIndicator = document.querySelector(".pass-indicator");


const generateBtn = document.querySelector("button");

const copyIcon = document.querySelector(".material-symbols-rounded");









/* Characters */
let characters = {

    lowercase: "abcdefghijklmnopqrstuvwxyz",

    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    numbers: "0123456789",

    symbols: "^!$%&|[](){}:;.,*+-#@<>~"

}








const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let excludeDuplicate = false;
    let passLength = lengthSlider.value;
    options.forEach(option => {
        if (option.checked) { // if checkbox is checked
            // if checkbox id isnt exc-duplicate && inc-spaces
            if (option.id !== "exc-duplicate" && option.id !== "inc-spaces") {
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            } else if (option.id === "inc-spaces") { // if checkbox id is inc-spaces
                staticPassword += ` ${staticPassword} `; // adding space at the beginning & end of staticPassword
            } else { // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    });
    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword; // passing randomPassword to passwordInput value
}













const updatePassIndicator = () => {


    // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if
    // lengthSlider value is less than 16 then pass "medium" as id else pass "strong" as id


    if (lengthSlider.value <= 8) {
        passIndicator.id = "weak";
    } else if (lengthSlider.value <= 16) {
        passIndicator.id = "medium";
    } else {
        passIndicator.id = "strong";
    }
}












/* --------  Event Listeners  -------- */
generateBtn.addEventListener("click", generatePassword);






