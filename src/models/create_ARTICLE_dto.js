export default class createArticleDTO {
  constructor(title, language, description, publishedDate, tags, categoryList) {
    this.title = title
    this.language = language
    this.description = description
    this.publishedDate = publishedDate
    this.tags = tags
    this.categoryList = categoryList
  }
}
