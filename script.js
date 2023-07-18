var semesterCount = 0;
addSemester();
// var calculateButton = document.getElementById('calculate');
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
        '<button onclick="addCourse(this.parentNode)">Add course</button>' +
        '<button onclick="removeSemester(this.parentNode)">Remove semester</button>'
    semesterContainer.appendChild(newSemester);

    // calculateButton.disabled = false;
    addCourse(newSemester);
}

function addCourse(semesterDiv) {
    var newCourse = document.createElement("div");
    newCourse.className = "course";

    var courseName = document.createElement("input");
    courseName.type = "text";
    newCourse.appendChild(courseName);

    var courseCredit = document.createElement("input");
    courseCredit.type = "number";
    newCourse.appendChild(courseCredit);

    var gradesSelectInput = document.createElement("select");
    var initialOption = document.createElement("option");
    initialOption.text = "Select Grade";
    initialOption.disabled = true;
    initialOption.selected = true;
    gradesSelectInput.appendChild(initialOption);

    var removeCourse = document.createElement("button");
    removeCourse.onclick = function () {
        removeCourseFunction(newCourse);
    };

    var grades = [
        "A+",
        "A",
        "A-",
        "B+",
        "B",
        "B-",
        "C+",
        "C",
        "C-",
        "D+",
        "D",
        "D-",
        "F"
    ];

    for (let i = 0; i < grades.length; i++) {
        let option = document.createElement("option");
        option.value = grades[i];
        option.text = grades[i];
        gradesSelectInput.appendChild(option)
    }

    newCourse.appendChild(gradesSelectInput);

    semesterDiv.appendChild(newCourse);

}

function removeCourseFunction(course) {
    course.remove();
}

function removeSemester(semester) {
    semester.remove();
    semesterCount--;
    // if (semesterCount === 0) calculateButton.disabled = true;
}