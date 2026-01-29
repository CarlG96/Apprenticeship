export default class Logger {
  public logFindings(message: string, subjects: string[]) {
    console.log(message);
    for (let i = 0; i < subjects.length; i++) {
      console.log(subjects[i]);
    }
  }
}
