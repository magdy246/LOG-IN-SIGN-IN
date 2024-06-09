logOutSubmit.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  function user() {
    var logName = JSON.parse(sessionStorage.getItem("signName"));
    document.querySelector("#spanUser").innerHTML = logName;
  }
