//Function to get values entered i by user.
//Multiples values by grade weight
//Determines which letter grade user will recieve
//Alerts grade % and letter grade


$("#submitButton").click(function () {

    if (($("#assignments").val() > 100) | ($("#assignments").val() < 0) | ($("#groupProjects").val() > 100) | ($("#groupProjects").val() < 0) | ($("#quizzes").val() > 100) | ($("#quizzes").val() < 0) | ($("#exams").val() > 100) | ($("#exams").val() < 0) | ($("#intex").val() > 100) | ($("#intex").val() < 0))
        {
            return;
        }

    //determine grade %
    var grade = ($("#assignments").val() * .5) + ($("#groupProjects").val() * .1) + ($("#quizzes").val() * .1) + ($("#exams").val() * .2) + ($("#intex").val() * .1)
    var letterGrade = ""

    //determine letter grade
    if (grade >= 94) {
        letterGrade = "A"
    }
    else if (grade >= 90) {
        letterGrade = "A-"
    }
    else if (grade >= 87) {
        letterGrade = "B+"
    }
    else if (grade >= 84) {
        letterGrade = "B"
    }
    else if (grade >= 80) {
        letterGrade = "B-"
    }
    else if (grade >= 77) {
        letterGrade = "C+"
    }
    else if (grade >= 74) {
        letterGrade = "C"
    }
    else if (grade >= 70) {
        letterGrade = "C-"
    }
    else if (grade >= 67) {
        letterGrade = "D+"
    }
    else if (grade >= 64) {
        letterGrade = "D"
    }
    else if (grade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
        }

    //alert grade and letter grade to the user
        alert("Grade = " + grade + "\n" + "Letter Grade = " + letterGrade);

}
)


    

