const btn_sec_1 = document.querySelector("#btn-section1");
const btn_sec_2 = document.querySelector("#btn-section2");
const btn_sec_3 = document.querySelector("#btn-section3");
const btn_skip1 = document.querySelector("#btn-skip1");
const btn_skip2 = document.querySelector("#btn-skip2");

const handle = ({ name }) => {
  if (name === "section1") {
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "flex";
  } else if (name === "section2") {
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "flex";
  } else if (name === "section3") {
    document.querySelector("#section3").style.display = "none";
    document.querySelector("#section1").style.display = "flex";
  } else if (name === "skip1") {
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "flex";
  } else if (name === "skip2") {
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "flex";
  }
};

btn_sec_1.addEventListener("click", ({ target }) => handle(target));
btn_sec_2.addEventListener("click", ({ target }) => handle(target));
btn_sec_3.addEventListener("click", ({ target }) => handle(target));
btn_skip1.addEventListener("click", ({ target }) => handle(target));
btn_skip2.addEventListener("click", ({ target }) => handle(target));
