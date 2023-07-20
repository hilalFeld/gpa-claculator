var semesterCount = 0;
addSemester();
// var calculateButton = document.getElementById('calculate');

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
    courseCredit.className = "credits";
    newCourse.appendChild(courseCredit);

    var gradesSelectInput = document.createElement("select");
    var initialOption = document.createElement("option");
    gradesSelectInput.className = "grades";
    initialOption.text = "Select Grade";
    initialOption.disabled = true;
    initialOption.selected = true;
    gradesSelectInput.appendChild(initialOption);

    var removeCourse = document.createElement("button");
    // removeCourse.innerHTML = "remove";
    let crossIcon = document.createElement("i");
    crossIcon.classList = "lni lni-cross-circle";
    removeCourse.appendChild(crossIcon);
    removeCourse.onclick = function () {
        removeCourseFunction(newCourse);
    };
    newCourse.appendChild(removeCourse);

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

function gradeToNumber(grade) {
    switch (grade) {
        case "A+":
            return 4.0;
        case "A":
            return 4.0;
        case "A-":
            return 3.7;
        case "B+":
            return 3.3;
        case "B":
            return 3.0;
        case "B-":
            return 2.7;
        case "C+":
            return 2.3;
        case "C":
            return 2.0;
        case "C-":
            return 1.7;
        case "D+":
            return 1.3;
        case "D":
            return 1.0;
        case "D-":
            return 0.7;
        case "F":
            return 0.0;
        default:
            return NaN;
    }
}

function calculateGPA() {

    var totalGrades = 0;
    var totalCredits = 0;

    for (var i = 0; i < semesterCount; i++) {
        // let courseCounter = document.getElementsByClassName("course");
        let creditsElement = document.getElementsByClassName("credits");
        // console.log(creditsElement[0].value);
        let gradesElement = document.getElementsByClassName("grades");
        // console.log(gradesElement[0].value);
        for (var j = 0; j < creditsElement.length; j++) {
            var credit = creditsElement[j].value;
            var grade = gradeToNumber(gradesElement[j].value);
            // console.log(gradesElement[0].value);
            if (!credit || isNaN(credit) || isNaN(grade)) {
                alert("Please fill out everything");
            }
            console.log(credit + " type is " + typeof (credit));
            console.log(grade + " type is " + typeof (grade));
        }
    }
}