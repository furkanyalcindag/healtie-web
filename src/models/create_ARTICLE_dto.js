export default class createArticleDTO {
  constructor(
    title,
    language,
    description,
    publishedDate,
    tagList,
    categoryList,
  ) {
    this.title = title
    this.language = language
    this.description = description
    this.publishedDate = publishedDate
    this.tagList = tagList
    this.categoryList = categoryList
  }
}
