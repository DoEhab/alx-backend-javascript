interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_1 : Student = {
    firstName: "student 1 fn",
    lastName: "student 1 ln",
    age: 10,
    location: "Cairo"
}

const student_2 : Student = {
    firstName: "student 2 fn",
    lastName: "student 2 ln",
    age: 20,
    location: "Cairo"
}

const studentsList = [student_1, student_2]

//create table
const table = document.createElement("table");
document.body.appendChild(table);

const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
header1.innerText = "First Name";
const header2 = headerRow.insertCell();
header1.innerText = "Location";

studentsList.forEach((student: Student)=>{
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerText = student.firstName;
    const location = row.insertCell();
    location.innerText = student.location;
});