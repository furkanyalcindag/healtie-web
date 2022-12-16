export default class notificationDTO {
  constructor(language, title, message, link, base64, send) {
    this.language = language
    this.title = title
    this.message = message
    this.link = link
    this.base64 = base64
    this.send = send
  }
}
