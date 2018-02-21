var Student = function(firstname,lastname,grade,id){
    this.firstName = firstname;
    this.lastName = lastname;
    this.grade = grade;
    this.id = id;
    this.sections = [];
    this.leaveSection = function (sectionId) {
        for(var i = 0; i < this.sections.length; i++){
            console.log(this.sections[i].id);
            if(this.sections[i].id == sectionId){
                this.sections.splice(i);
            }
        }
    }
};

var Teacher = function (firstname,lastname,subject,id) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.subject = subject;
    this.id = id;
};

var Section = function (name,maxsize,id) {
    this.name = name;
    this.maxsize = maxsize;
    this.currentsize = 0;
    this.id = id;
    this.students = [];
    this.addStudent = function(student) {
        this.students.push(student);

    };
    this.removeStudent = function(id){
        for(var i = 0; i < this.students.length; i++){
            if(this.students[i].id == id){
                this.students.splice(i);
            }
        }
    };

};