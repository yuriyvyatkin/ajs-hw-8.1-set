export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  addAll(...args) {
    args.forEach((member) => this.add(member));
  }

  toArray() {
    return Array.from(this.members);
  }
}
