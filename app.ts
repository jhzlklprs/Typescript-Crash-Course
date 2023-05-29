enum Access {ADMIN, MODERATOR, USER}

const student: {
    name: string;
    age: number;
    gender?: string;
    interest : string[];
    access : Access;
} = {
    name : 'Juan',
    age : 19,
    interest : ["Basketball", "Reading"],
    access : Access.ADMIN
}

if(student.access === 0){
    console.log('is admin')
}