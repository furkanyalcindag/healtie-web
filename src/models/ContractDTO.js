export default class createContractDTO {
  static createEmpty() {
    return new createContractDTO('', '', [], false, false)
  }
  constructor(title, content, roleList, active, required) {
    this.title = title
    this.content = content
    this.roleList = roleList
    this.active = active
    this.required = required
  }
}
