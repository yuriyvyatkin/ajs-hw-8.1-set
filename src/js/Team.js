export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error(`Ошибка. Объект ${member} уже добавлен!`);
    }

    this.members.add(member);
  }

  addAll(...args) {
    args.forEach((member) => {
      if (this.members.has(member)) {
        throw new Error(`Ошибка. Объект ${member} уже добавлен!`);
      }

      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
