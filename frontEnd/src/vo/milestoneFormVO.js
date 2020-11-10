export default class MilestoneFormVO {
  constructor(title = '', description = '', date = new Date().toISOString()) {
    this.title = title;
    this.description = description;
    this.date = new Date(date).toISOString().substr(0, 10);
    this.validated = this.validate(date);
  }

  validate() {
    const validateDate = new Date(this.date);
    if (isNaN(validateDate)) {
      return false;
    }
  }
}
