function check(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const nation = document.getElementById("nation");
  const age = document.getElementById("age");
  const skill = document.getElementById("skill").value;
  const form = document.getElementById("form");
  const showHide = document.querySelector(".showHide");


  checkBlank();


  function checkBlank() {
    if (name == "" || nation.value == "" || age.value == "" || skill == "") {
      showHide.classList.add("show");
      showHide.classList.add("alert-danger")
      showHide.innerHTML = "Please Fill All The Field's";
      setTimeout(function () {
        showHide.classList.remove("show")
      }, 3000);
    } else if (nation.value.toLowerCase() !== "india") {
      showHide.classList.add("show");
      showHide.classList.add("alert-danger")
      showHide.innerHTML = "You Must Be An Indian";
      setTimeout(function () {
        showHide.classList.remove("show")
      }, 3000);
      nation.classList.add("border-alert");
      setTimeout(function () {
        nation.classList.remove("border-alert")
      }, 3000);
    } else if (age.value < 10) {
      showHide.classList.add("show");
      showHide.classList.add("alert-danger")
      showHide.innerHTML = "You Must Be Above 10";
      setTimeout(function () {
        showHide.classList.remove("show")
      }, 3000);
      age.classList.add("border-alert");
      setTimeout(function () {
        age.classList.remove("border-alert")
      }, 3000);
    } else {
      showHide.classList.add("show");
      showHide.classList.add("alert-success")
      showHide.innerHTML = `Congratulations ${name.toUpperCase()}, You Are Successfully Enrolled`;
      setTimeout(function () {
        showHide.classList.remove("show")
      }, 3000);
    }
    form.reset();

  }

}

//Event
document.querySelector("form").addEventListener("submit", check);