const cases = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const txt = document.querySelector("#clr");


btn.addEventListener("click", function () {

    let color = "#";
    for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * cases.length);
        color += cases[num];
    }

    txt.textContent = color;
    txt.style.color = color;
    document.body.style.backgroundColor = color;
});
