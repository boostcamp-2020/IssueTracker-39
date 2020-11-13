class MilestoneFormVO {
  constructor(title, dueDate, description, id) {
    if (dueDate !== undefined) {
      this.validDate(dueDate);
      this.dueDate = new Date(dueDate);
    } else {
      this.dueDate = new Date();
    }

    this.description = description ? description : '';
    this.title = title ? title : '';
    this._id = id;
  }

  validDate(date) {
    const validDate = new Date(date);
    if (isNaN(validDate)) {
      throw new Error('옳바르지 않은 날짜 형식');
    }
  }

  set id(id) {
    if (id === undefined) {
      this._id = -1;
    }
    if (typeof id !== 'number') {
      throw new Error('milestone id값은 항상 정수여야합니다.');
    }
    this._id = id;
  }

  get id() {
    if (this._id === -1) {
      throw new Error('id값이 들어오지 않았습니다.');
    }
    return this._id;
  }
}

module.exports = {
  MilestoneFormVO,
};
