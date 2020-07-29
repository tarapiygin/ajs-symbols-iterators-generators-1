export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    this.current = -1;
    this.last = this.persons.length - 1;
    return this;
  }

  next() {
    if (this.current < this.last) {
      // eslint-disable-next-line no-return-assign
      return { done: false, value: this.persons[this.current += 1] };
    }
    return { done: true };
  }
}
