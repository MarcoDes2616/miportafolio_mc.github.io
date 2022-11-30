const ham = document.querySelector(".menu_h")

const link = document.querySelector(".panel")

const barras = document.querySelectorAll(".menu_h span")

ham.addEventListener("click", () => {
    link.classList.toggle("active");
    barras.forEach(child => {
        child.classList.toggle("animado")
    });
})

const f = document.querySelector("#arrow-f")
const b = document.querySelector("#arrow-b")
const s = document.querySelector(".services")
const ab = document.querySelector(".arrow_b")
const af = document.querySelector(".arrow_f")

f.addEventListener("click", () => {
    s.classList.toggle("end");
    ab.classList.toggle("none");
    af.classList.toggle("none");
})

b.addEventListener("click", () => {
    s.classList.toggle("end");
    ab.classList.toggle("none");
    af.classList.toggle("none");
})