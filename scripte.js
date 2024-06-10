var logEmail = document.querySelector("#logEmail");
var logPass = document.querySelector("#logPass");
var signName = document.querySelector("#signName");
var signEmail = document.querySelector("#signEmail");
var signPass = document.querySelector("#signPass");
var switchLog = document.querySelector("#switch-log");
var switchSign = document.querySelector("#switch-sign");
var alertMessage = document.querySelector("#alert-message");
var alertSuccessful = document.querySelector("#successful");
var invalid = document.querySelector("#invalid");
var welcomMsg = document.querySelector("#spanUser");
var logSubmit = document.querySelector("#logSubmit");
var signSubmit = document.querySelector("#signSubmit");
var logOutSubmit = document.querySelector("#logOutSubmit");

var eyeIconLog = document.querySelector("#eye-icon-log");
var eyeIconSign = document.querySelector("#eye-icon-sign");

eyeIconLog.addEventListener("click", function () {
  if (logPass.type === "password") {
    logPass.type = "text";
  } else {
    logPass.type = "password";
  }
});

eyeIconSign.addEventListener("click", function () {
  if (signPass.type === "password") {
    signPass.type = "text";
  } else {
    signPass.type = "password";
  }
});

var signArray = JSON.parse(localStorage.getItem("signArray")) || [];
var user = JSON.parse(localStorage.getItem("signArray"));

for (var i = 0; i < signArray.length; i++) {
  if (user.signEmail == signArray[i].email) {
    welcomMsg.innerHTML = `Welcome ${signArray[i].signName}`;
    break;
  }
}

signSubmit.addEventListener("click", function () {
  if (validatedThreeInput()) {
    var threeInput = {
      name: signName.value,
      email: signEmail.value,
      pass: signPass.value,
    };
    signArray.push(threeInput);
    dataStored();
    hideThreeInput();
    removeAlertThreeInput();
    switchlog();
  } else {
    alertmessage();
  }
});

logSubmit.addEventListener("click", function () {
  if (validatedTwoInput()) {
    var twoInput = {
      email: logEmail.value,
      pass: logPass.value,
    };

    var user = signArray.find(
      (user) => user.email === logEmail.value && user.pass === logPass.value
    );

    if (user) {
      sessionStorage.setItem("signName", JSON.stringify(user.name));
      hideTwoInput();
      removeAlertTwoInput();
      successlog();
      window.location.href = "./Logout.html";
    } else {
      Invalid();
    }
  } else {
    switchsign();
  }
});

function dataStored() {
  localStorage.setItem("signArray", JSON.stringify(signArray));
}

function hideThreeInput() {
  signName.value = "";
  signEmail.value = "";
  signPass.value = "";
}

function hideTwoInput() {
  logEmail.value = "";
  logPass.value = "";
}

function validatedThreeInput() {
  var signNameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
  var signEmailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  var signPassRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  return (
    signNameRegex.test(signName.value) &&
    signEmailRegex.test(signEmail.value) &&
    signPassRegex.test(signPass.value)
  );
}

function validatedTwoInput() {
  var logEmailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  var logPassRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  return logEmailRegex.test(logEmail.value) && logPassRegex.test(logPass.value);
}

function removeAlertThreeInput() {
  signName.nextElementSibling.classList.add("d-none");
  signEmail.nextElementSibling.classList.add("d-none");
  signPass.nextElementSibling.classList.add("d-none");
}

function removeAlertTwoInput() {
  logEmail.nextElementSibling.classList.add("d-none");
  logPass.nextElementSibling.classList.add("d-none");
}

function switchlog() {
  switchLog.classList.remove("d-none");
  alertMessage.classList.add("d-none");
  switchSign.classList.add("d-none");
  invalid.classList.add("d-none");
}

function alertmessage() {
  alertMessage.classList.remove("d-none");
}
function Invalid() {
  invalid.classList.remove("d-none");
switchSign.classList.add("d-none");
}

function switchsign() {
  switchSign.classList.remove("d-none");
  switchLog.classList.add("d-none");
}

function successlog() {
  switchSign.classList.add("d-none");
  switchLog.classList.add("d-none");
  alertSuccessful.classList.remove("d-none");
  invalid.classList.add("d-none");
}
