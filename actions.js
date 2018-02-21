function addStudent() {    var sfn = document.getElementById("sfn").value;    var sln = document.getElementById("sln").value;    var sg = document.getElementById("sg").value;    var sid = allStudents.length + 1;    allStudents.push(new Student(sfn,sln,sg,sid))    populateLists();    clearBox();}function addTeacher() {    var tfn = document.getElementById("tfn").value;    var tln = document.getElementById("tln").value;    var ts = document.getElementById("ts").value;    var tid = allTeachers.length + 1;    allTeachers.push(new Teacher(tfn,tln,ts,tid))    populateLists();    clearBox();}function addSection() {    var sn = document.getElementById("sn").value;    var sms = document.getElementById("sms").value;    var sid = allSections.length + 1;    allSections.push(new Section(sn,sms,sid));    populateLists();    clearBox();}function listItems() {    var selection = document.getElementById("selectBox").value;    var array = allItems[selection];    var t = "<table class='table table-bordered' cellpadding='15'>";    if(array === allSections){        t += "<tr><th>Name</th><th>Max Size</th><th>ID #</th></tr>";        for(var i = 0; i < array.length; i++){            t += "<tr>";            for (key in array[i]){                if(key === "name" || key === "maxsize" || key === "id"){                    t += "<td>";                    t += array[i][key] + " " ;                    t += "</td>";                }            }            t += "</tr>";        }    }else if(array === allStudents){        t += "<tr><th>First Name</th><th>Last Name</th><th>Grade</th><th>ID #</th></tr>";        for(var i = 0; i < array.length; i++){            t += "<tr>";            for (key in array[i]){                if(key === "firstName" || key === "lastName" || key === "id" || key === "grade"){                    t += "<td>";                    t += array[i][key] + " " ;                    t += "</td>";                }            }            t += "</tr>";        }    }else{        t += "<tr><th>First Name</th><th>Last Name</th><th>Grade</th><th>ID #</th></tr>";        for(var i = 0; i < array.length; i++){        t += "<tr>";             for (key in array[i]){                t += "<td>";                t += array[i][key] + " " ;                t += "</td>";              }        t += "</tr>";        }    }    t += "</table>";    document.getElementById("list").innerHTML = t;}function populateLists () {    var t ="<select id='selectBox2' class='form-control'>";    t += "<option value='0'>Select Teacher</option>";    for(var i =0; i < allTeachers.length; i++){        t += "<option value='"  + allTeachers[i].id + "'>" + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>"    }    t+= "</select>";    document.getElementById("teacherSelecter").innerHTML = t;    var s ="<select id='selectBox3' class='form-control'>";    s += "<option value='0'>Select Student</option>";    for(var i =0; i < allStudents.length; i++){        s += "<option value='"  + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"    }    s+= "</select>";    document.getElementById("studentSelecter").innerHTML = s;    var s2 ="<select id='selectBox5' class='form-control'>";    s2 += "<option value='0'>Select Student</option>";    for(var i =0; i < allStudents.length; i++){        s2 += "<option value='"  + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"    }    s2+= "</select>";    document.getElementById("studentSelecter2").innerHTML = s2;    var x ="<select id='selectBox4' class='form-control'>";    for(var i =0; i < allSections.length; i++){        x += "<option value='"  + allSections[i].id + "'>" + allSections[i].name +  "</option>"    }    x += "</select>";    document.getElementById("sectionSelecter").innerHTML = x;}function makeGlobalVars(){    sectionId = document.getElementById("selectBox4").value;    console.log(sectionId);    for(var i = 0; i < allSections.length; i++){        if (allSections[i].id == sectionId){            globalSection = allSections[i];            break;        }    }    console.log(globalSection);    studentId = document.getElementById("selectBox3").value;    for(i=0; i < allStudents.length;i++){        if (allStudents[i].id == studentId){            globalStudent = allStudents[i];            break;        }    }    console.log(globalStudent);    var teacherId = document.getElementById("selectBox2").value;    console.log(teacherId);    for(var p = 0; p < allTeachers.length; p++){        if (allTeachers[p].id == teacherId){            globalTeacher = allTeachers[p];            break;        }    }}function addStudentToSection() {    makeGlobalVars();    var i = globalStudent.sections.length;    globalSection.addStudent(globalStudent);    globalStudent.sections[i] = globalSection;    console.log(globalStudent);    clearBox();}function addTeacherToSection() {    makeGlobalVars();    globalSection.teacher = globalTeacher;    clearBox();}function removeStudentFromSection(){    makeGlobalVars();    globalSection.removeStudent(studentId);    console.log(globalSection.students);    globalStudent.leaveSection(sectionId);    console.log(globalStudent.sections);    clearBox();}function showSection(){    makeGlobalVars();    var html = "<tr><th>Section Name:</th><td>";    html += globalSection.name + "</td></tr>";    if(globalSection.teacher){html += "<tr><th>Teacher:</th><td>";    html += globalSection.teacher.firstName + " " + globalSection.teacher.lastName + "</td></tr>";}    html += "<tr><th>Students:</th><td>"    for(var i =0; i < globalSection.students.length; i++){        html += "<tr><td>" + globalSection.students[i].firstName + "</td><td> " + globalSection.students[i].lastName + "</td><td> " + globalSection.students[i].grade + "</td></td>";    }    html += "<tr><th>Spots Available in Section: ";    html += parseInt(globalSection.maxsize) - parseInt(globalSection.students.length) + "</th></tr>";    console.log(html);    document.getElementById("sectionInfo").innerHTML = html;    clearBox();}function displayInfo(){    studentId = document.getElementById("selectBox5").value;    for(var i=0; i < allStudents.length;i++){        if (allStudents[i].id == studentId){            student = allStudents[i];            break;        }    }    console.log(student);    var html = "<tr><th>First Name</th><th>Last Name</th></tr>";    html += "<tr><td>" + student.firstName + "</td><td>"  + student.lastName + "</td></tr>";    html += "<tr><th>Sections:</th>";    for(var t=0; t < student.sections.length; t++){        html +="<td>" + student.sections[t].name + "</td>";    }    html += "</tr>";    console.log(html);    document.getElementById("studentInfo").innerHTML = html;}function clearBox() {    document.getElementById("sfn").value = "";    document.getElementById("sln").value = "";    document.getElementById("sg").value = "";    document.getElementById("tfn").value = "";    document.getElementById("tln").value = "";    document.getElementById("ts").value = "";    document.getElementById("sms").value = "";    document.getElementById("sn").value = "";}