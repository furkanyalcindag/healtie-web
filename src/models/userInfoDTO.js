export default class createUserInfoDTO {
  static createEmpty() {
    return new createUserInfoDTO('', '', '', '', '', '')
  }
  constructor(
    userName,
    firstName,
    lastName,
    email,
    password,
    ageRangeEnum,
    genderEnum,
  ) {
    this.userName = userName
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.ageRangeEnum = ageRangeEnum
    this.genderEnum = genderEnum
  }
}
