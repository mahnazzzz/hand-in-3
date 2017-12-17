import mobx, {observable,computed,action,useStrict} from "mobx";

class StudentInfoFactory {


    @observable
    _studentsInfo = {};

  constructor() {
    this.makeData();
  }

    @computed
  get studentsInfo() {
    return this._studentsInfo;
  }

    @action
  makeData()  {
        let tempInfo = {}
        tempInfo.headers = [
            { courseId: 1000, courseName: "Basic Programming" },
            { courseId: 1001, courseName: "Advanced Programming" },
            { courseId: 1003, courseName: "DataBase Intro" }];
        tempInfo.students = [];
        tempInfo.students.push({ studentId: 100, name: "Peter Hansen", grades: [{ grade: "10" }, { grade: "12" }, {}] });
        tempInfo.students.push({ studentId: 101, name: "Jan Olsen", grades: [{ grade: "7" }, { grade: "10" }, {}] });
        tempInfo.students.push({ studentId: 102, name: "Gitte Poulsen", grades: [{ grade: "7" }, { grade: "7" }, {}] });
        tempInfo.students.push({ studentId: 103, name: "John McDonald", grades: [{ grade: "10" }, {}, { grade: "7" }] })
        this._studentsInfo = tempInfo;
   }
}

let info = new StudentInfoFactory();

//This is only for debugging purposes
window.info = info.studentsInfo;

export default info;
