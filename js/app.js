const btn = document.getElementById("btn");
const student = document.getElementById("student-name")


const students = ["Dan", "Dave", "Leo", "Marques", "Muhammed", "Nick", "Perice", "Timothy", "Victor", "Ziyaad", "Amandeep", "Rick"]

const picked = [];

btn.addEventListener("click", () => {
    randomIT();
})
const randomIT = () => {
    let ranNUM = Math.floor(Math.random(1)*students.length)
    picked.unshift(students.splice(ranNUM, 1))
    student.innerHTML = picked[0]
};
const restart = () => {
    if (students.length === false) {
        btn.style.display = "none";
    }
    
}



