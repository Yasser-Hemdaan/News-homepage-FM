document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelectorAll(".list li a");
  console.log(list);
  list.forEach((element) => {
    element.addEventListener("click", (e) => {
      list.forEach((delElement) => {
        delElement.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
});

let menuList = document.querySelector(".menuList");
let menuIcon = document.querySelector(".menuIcon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuList.classList.toggle("active");
});
