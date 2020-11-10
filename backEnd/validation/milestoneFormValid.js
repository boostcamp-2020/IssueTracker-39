class MilestoneFormVO {
  constructor(title, dueDate, description) {
    if (dueDate !== undefined) {
      this.validDate(dueDate);
      this.dueDate = new Date(dueDate);
    } else {
      this.dueDate = new Date();
    }

    this.description = description ? description : '';
    this.title = title ? title : '';
  }

  validDate(date) {
    console.log(date);
    const validDate = new Date(date);
    if (isNaN(validDate)) {
      throw new Error('옳바르지 않은 날짜 형식');
    }
  }
}

module.exports = {
  MilestoneFormVO,
};
