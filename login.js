const yourEmail = document.getElementById("yourEmail");
const yourPassword = document.getElementById("yourPassword");
const Loggin = document.getElementById("Loggin");
const Warning = document.getElementById("Warning");

const otpTxt = document.getElementById("otpTxt");
const otpView = document.getElementById("otpView");
const generatebtn = document.getElementById("generatebtn");

const accInfo = {
  email: "sagorislam9604@gmail.com",
  password: "1212",
};
let randomNumber;

Loggin.onclick = () => {
  const eml = yourEmail.value;
  const pass = yourPassword.value;
  const otpNumber = otpTxt.value;
  if (otpNumber !== "" && eml !== "" && pass !== "") {
    if (
      eml == accInfo.email &&
      pass == accInfo.password &&
      otpNumber == randomNumber
    ) {
      document.location.href = "./indextwo.html";
    } else {
      Warning.innerText = "Your info not currect";
      Warning.style.color = "red";
    }
  } else {
    Warning.innerText = "Please fill up all section";
    Warning.style.color = "red";
  }
};

/* const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  number.textContent = randomNumber;
};

generatebtn.addEventListener("click", randomNumberGenerator);
randomNumberGenerator(); */

generatebtn.onclick = () => {
  randomNumber = Math.floor(Math.random() * 10000);
  otpView.innerText = randomNumber;
};
