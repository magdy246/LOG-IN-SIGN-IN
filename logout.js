document.addEventListener("DOMContentLoaded", function () {
  var logName = JSON.parse(sessionStorage.getItem("signName"));

  if (logName) {
    document.querySelector("#spanUser").innerHTML = `Welcome ${logName}`;
  } else {
    document.querySelector("#spanUser").innerHTML = "Welcome ?";
  }

  var logOutSubmit = document.querySelector("#logOutSubmit");
  logOutSubmit.addEventListener("click", function () {
    sessionStorage.removeItem("signName");
    window.location.href = "./index.html";
  });
});
