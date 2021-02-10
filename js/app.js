const btn = document.getElementById("btn");
const student = document.getElementById("student-name");
const restartBtn = document.getElementById("restart-btn");
const message = document.getElementById("message");


const students = ["Justin", "Josh", "Bob", "Billy"];

const picked = [];

const randomIT = () => {
    let ranNUM = Math.floor(Math.random(1)*students.length);
    picked.unshift(students[ranNUM]);
    students.splice(ranNUM, 1);
    student.innerHTML = picked[0];
    restart();
};
btn.addEventListener("click", randomIT)
restartBtn.addEventListener("click", () => {
    resetNames();
});

const restart = () => {
    if (students.length === 0) {
        restartBtn.style.visibility = "visible";
        message.style.visibility = "visible";
        btn.style.visibility = "hidden";
    };
};

const resetNames = () => {
    picked.forEach((s)=>{
        students.push(s)
    });
    picked.splice(0, picked.length);
    btn.style.visibility = "visible";
    restartBtn.style.visibility = "hidden";
    message.style.visibility = "hidden";
    student.innerHTML = "???";
};



