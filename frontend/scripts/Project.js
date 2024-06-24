class Project {
  constructor(
    type,
    title,
    description,
    frontlink,
    backlink,
    tags,
    linkproject,
    image
  ) {
    this.type = type;
    this.title = title;
    this.description = description;
    this.frontlink = frontlink;
    this.backlink = backlink;
    this.tags = tags;
    this.linkproject = linkproject;
    this.image = image;
  }
}

module.exports = Project;
