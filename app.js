const themeChangeBtn = document.getElementById("themeBtn");
const lightModeIcon = document.getElementById("lightMode");
const darkModeIcon = document.getElementById("darkMode");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const paras = document.querySelectorAll(".para");

let themeSwitcher = false;

function changeTheme() {
  if (!themeSwitcher) {
    lightModeIcon.style.display = "block";
    darkModeIcon.style.display = "none";
    document.body.style.backgroundColor = "#000";

    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "#fff";
    }
    for (let i = 0; i < h3.length; i++) {
      h3[i].style.color = "#fff";
    }
    for (let i = 0; i < paras.length; i++) {
      paras[i].style.color = "rgb(150, 150, 150)";
      paras[i].style.fontWeight = "200";
    }
  } else {
    lightModeIcon.style.display = "none";
    darkModeIcon.style.display = "block";
    document.body.style.backgroundColor = "#fff";

    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "#000";
    }
    for (let i = 0; i < h3.length; i++) {
      h3[i].style.color = "#000";
    }
    for (let i = 0; i < paras.length; i++) {
      paras[i].style.color = "rgb(37, 37, 37)";
    }
  }
  themeSwitcher = !themeSwitcher;
}
