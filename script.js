var semesterCount = 0;
addSemester();
var calculateButton = document.getElementById('calculate');
function calculateGPA() {
}
function addSemester() {
    semesterCount++;
    let semesterContainer = document.getElementById("semester-container");

    let newSemester = document.createElement("div");

    newSemester.id = "semester";
    newSemester.className = "semesterClass";

    newSemester.innerHTML =
        "<h3> Semester " +
        semesterCount +
        "</h3>" +
        '<button onclick="addCourse()">Add course</button>' +
        '<button onclick="removeSemester(this.parentNode)">Remove semester</button>'
    semesterContainer.appendChild(newSemester);

    calculateButton.disabled = false;
}

function removeSemester(semester) {
    semester.remove();
    semesterCount--;
    if (semesterCount === 0) calculateButton.disabled = true;
}