interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherData {
    (firstName: string, lastName: string): string;
}

const printTeacherFunction: PrintTeacherData = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName:string) {

    }
    workOnHomework(): string {
        return "";
    }

    displayName(): string {
        return this.firstName
    } 

}



    
    
