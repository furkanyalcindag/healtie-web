export default class createDoctorAcademicInfoDTO {
  static createEmpty() {
    return new createDoctorAcademicInfoDTO('', '', '', '')
  }
  constructor(schoolName, profession, startYear, graduateYear) {
    this.schoolName = schoolName
    this.profession = profession
    this.startYear = startYear
    this.graduateYear = graduateYear
  }
}
