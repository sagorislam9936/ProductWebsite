const number = document.getElementById("number");
const yourEmail = document.getElementById("yourEmail");
const yourPassword = document.getElementById("yourPassword");
const Loggin = document.getElementById("Loggin");
const Warning = document.getElementById("Warning");
const generatebtn= document.getElementById("generatebtn")


const accInfo = {
    otpNum: "randomNumberGenerator",
  email: "sagorislam9604@gmail.com",
  password: "1212",
};


Loggin.onclick = () => {
    const otpNumber =number;
  const eml = yourEmail.value;
  const pass = yourPassword.value;
  if ( otpNumber!=="" &&  eml !== "" && pass !== "") {
    if (
        
      eml == accInfo.email &&
      pass == accInfo.password
    ) {
      document.location.href = "/bank.html";
    } else {
      Warning.innerText = "Your info not currect";
      Warning.style.color = "red";
    }
  } else {
    Warning.innerText = "Please fill up all section";
    Warning.style.color = "red";
  }
};

const randomNumberGenerator =()=>{
    const randomNumber = Math.floor(Math.random() * 10000);
    number.textContent = randomNumber
}

generatebtn.addEventListener('click',randomNumberGenerator,);
randomNumberGenerator();