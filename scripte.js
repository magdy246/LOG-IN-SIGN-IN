var logEmail = document.querySelector("#logEmail");
var logPass = document.querySelector("#logPass");
var signName = document.querySelector("#signName");
var signEmail = document.querySelector("#signEmail");
var signPass = document.querySelector("#signPass");
var switchLog = document.querySelector("#switch-log");
var switchSign = document.querySelector("#switch-sign");
var alertMessage = document.querySelector("#alert-message");
var alertSuccessful = document.querySelector("#successful");
var signArray = [];

var logSubmit = document.querySelector("#logSubmit");
var signSubmit = document.querySelector("#signSubmit");

signSubmit.addEventListener("click", function () {
  if (validatedThreeInput() == true) {
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
  if (validatedTwoInput() == true) {
    var twoInput = {
      email: logEmail.value,
      pass: logPass.value,
    };
    signArray.push(twoInput);
    dataStored();
    hideTwoInput();
    removeAlertTwoInput(twoInput);
    successlog();
  } else {
    switchsign();
  }
});

function dataStored() {
  localStorage.setItem("signArray", JSON.stringify(signArray));
}

function hideThreeInput(configThreeInput) {
  signName.value = configThreeInput ? configThreeInput.name : null;
  signEmail.value = configThreeInput ? configThreeInput.email : null;
  signPass.value = configThreeInput ? configThreeInput.pass : null;
}

function hideTwoInput(configTwoInput) {
  logEmail.value = configTwoInput ? configTwoInput.email : null;
  logPass.value = configTwoInput ? configTwoInput.pass : null;
}

function validatedThreeInput() {
  var signNameRegex = /^[a-z0-9_-]{3,15}$/;
  var signEmailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var signPassRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  if (signNameRegex.test(signName.value) == false) {
    return false;
  } else if (signEmailRegex.test(signEmail.value) == false) {
    return false;
  } else if (signPassRegex.test(signPass.value) == false) {
    return false;
  }
  return true;
}

function validatedTwoInput() {
  var logEmailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var logPassRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  if (logEmailRegex.test(logEmail.value) == false) {
    return false;
  } else if (logPassRegex.test(logPass.value) == false) {
    return false;
  }
  return true;
}

function validateThreeInput(ThreeInput) {
  var regexThreeInput = {
    signNameRegex: /^[a-z0-9_-]{3,15}$/,
    signEmailRegex: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    signPassRegex:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };

  if (regexThreeInput[ThreeInput.id].test(ThreeInput.value) == true) {
    ThreeInput.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    ThreeInput.nextElementSibling.classListNaNpxove("d-none");
    return false;
  }
}

function validateTwoInput(TwoInput) {
  var regexTwoInput = {
    logEmailRegex: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    logPassRegex:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };

  if (regexTwoInput[TwoInput.id].test(TwoInput.value) == true) {
    TwoInput.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    TwoInput.nextElementSibling.classListNaNpxove("d-none");
    return false;
  }
}

function removeAlertThreeInput() {
  if (signName.value == "") {
    signName.nextElementSibling.classList.add("d-none");
  }
  if (signEmail.value == "") {
    signEmail.nextElementSibling.classList.add("d-none");
  }
  if (signPass.value == "") {
    signPass.nextElementSibling.classList.add("d-none");
  }
}

function removeAlertTwoInput() {
  if (logEmail.value == "") {
    logEmail.nextElementSibling.classList.add("d-none");
  }
  if (logPass.value == "") {
    logPass.nextElementSibling.classList.add("d-none");
  }
}

function switchlog() {
  switchLog.classList.remove("d-none");
  alertMessage.classList.add("d-none");
}

function alertmessage() {
  alertMessage.classList.remove("d-none");
}

function switchsign() {
  switchSign.classList.remove("d-none");
  switchLog.classList.add("d-none");
}
function successlog() {
  switchSign.classList.add("d-none");
  switchLog.classList.add("d-none");
  alertSuccessful.classList.remove("d-none")
}





/***********************************************/ 

