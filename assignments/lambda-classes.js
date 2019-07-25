// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    }
    speak(){
        console.log(`Hello my name is ${this.newName}, I am from ${this.newLocation}`)
    }
}

class Instructor extends Person{
    constructor(childAttributes){
        super(childAttributes);
        this.newSpecialty = childAttributes.specialty,
        this.newFavLanguage = childAttributes.favLanguage,
        this.newCatchPhrase = childAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(object, subject){
        console.log(`${object.newName} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(childAttributes){
        super(childAttributes)
        this.newPreviousBackground = childAttributes.previousBackground,
        this.newClassName = childAttributes.className,
        this.newFavSubject = childAttributes.favSubject;
    }
    listsSubjects(){
        console.log(`${this.newName}'s favorite subjects are ${this.newFavSubject[0]}, ${this.newFavSubject[1]}, and ${this.newFavSubject[2]}`)
    }
    PRAssignment(){
        console.log(`${this.newName} has submitted a PR for ${this.newFavSubject[1]}`)
    }
    sprintChallenge(){
        console.log(`${this.newName} has begun sprint challenge on ${this.newFavSubject[1]}`)
    }
}

class ProjectManagers extends Instructor{
    constructor(grandAttributes){
        super(grandAttributes);
        this.newGradClassName = grandAttributes.gradClassName,
        this.newFavInstructor = grandAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.newName} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.newName} debugs ${student.newName}'s code on ${subject}`)
    }
}

const instructorONE = new Instructor({
    name: 'Jason',
    age: '42',
    location: 'Texas',
    specialty: 'Front-end',
    favoriteLanguage: 'JavaScript',
    catchphrase: 'You will know JS!'
});

const instructorTWO = new Instructor({
    name: 'Tommy',
    age: '40',
    location: 'Florida',
    specialty: 'Back-end',
    favoriteLanguage: 'React',
    catchphrase: 'You will know how to React!'
});

const studentONE = new Student({
    name: 'Chris',
    age: '34',
    location: 'California',
    previousBackground: 'Pharmacy Technician',
    className: 'Full Stack Web Developer',
    favSubject: ['Python', 'JavaScript', 'C#'],
});

const studentTWO = new Student({
    name: 'Ian',
    age: '35',
    location: 'Massachusetts',
    previousBackground: 'Web-Designer',
    className: 'UI-Designer',
    favSubject: ['Art', 'C++', 'Adobe PhotoShop'],
});

const projectManagersONE = new ProjectManagers({
    name: 'John',
    age: '38',
    location: 'Alaska',
    gradClassName: 'web20',
    newFavInstructor: 'Brock',
});

const projectManagersTWO = new ProjectManagers({
    name: 'JR',
    age: '37',
    location: 'Nebraska',
    gradClassName: 'web21',
    newFavInstructor: 'Terry',
});


studentONE.listsSubjects();
studentONE.PRAssignment();
studentONE.sprintChallenge();
studentTWO.listsSubjects();
studentTWO.PRAssignment();
studentTWO.sprintChallenge();
instructorONE.speak();
instructorONE.demo('Python');
instructorONE.grade(studentONE, 'Python');
instructorTWO.speak();
instructorTWO.demo('E-Commerce');
instructorTWO.grade(studentTWO, 'E-Commerce');
projectManagersONE.standUp('web20');
projectManagersONE.debugsCode(studentONE, 'HTML');
projectManagersTWO.standUp('web21');
projectManagersTWO.debugsCode(studentTWO, 'CSS');