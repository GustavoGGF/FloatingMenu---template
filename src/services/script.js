const btn = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

btn.addEventListener("dblclick", () => {
  btn.classList.toggle("active");
  navigation.classList.toggle("active");
});

$(function () {
  $(".navigation").draggable();
});
