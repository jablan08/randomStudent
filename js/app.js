const btn = document.getElementById("btn");
const student = document.getElementById("student-name")
const restartbtn = document.getElementById("restart-btn")


const students = ["Dan", "Dave", "Leo", "Marques", "Muhammed", "Nick", "Perice", "Timothy", "Victor", "Ziyaad", "Amandeep", "Rick"]

const picked = [];

btn.addEventListener("click", () => {
    randomIT();
})
restartbtn.addEventListener("click", () => {
    resetNames();
})


const restart = () => {
    if (students.length === 0) {
        restartbtn.style.display = "block";
    }
    
}
const randomIT = () => {
    let ranNUM = Math.floor(Math.random(1)*students.length)
    picked.unshift(students[ranNUM])
    students.splice(ranNUM, 1)
    student.innerHTML = picked[0]
    restart();
};

const resetNames = () => {
    picked.forEach((s)=>{
        students.push(s)
    })
    picked.splice(0, picked.length)
    restartbtn.style.display = "none";

}



