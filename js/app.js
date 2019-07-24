const btn = document.getElementById("btn");
const student = document.getElementById("student-name");
const restartBtn = document.getElementById("restart-btn");
const message = document.getElementById("message");


const students = ["Dan", "Dave", "Leo", "Marques", "Muhammed", "Nick", "Perice", "Timothy", "Victor", "Ziyaad", "Amandeep", "Rick"];

const picked = [];

btn.addEventListener("click", () => {
    randomIT();
});
restartBtn.addEventListener("click", () => {
    resetNames();
});

const restart = () => {
    if (students.length === 0) {
        restartBtn.style.visibility = "visible";
        message.style.visibility = "visible";
    };
};
const randomIT = () => {
    let ranNUM = Math.floor(Math.random(1)*students.length);
    picked.unshift(students[ranNUM]);
    students.splice(ranNUM, 1);
    student.innerHTML = picked[0];
    restart();
};

const resetNames = () => {
    picked.forEach((s)=>{
        students.push(s)
    });
    picked.splice(0, picked.length);
    restartBtn.style.visibility = "hidden";
    message.style.visibility = "hidden";
    student.innerHTML = "???";
};



