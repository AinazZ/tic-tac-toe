export default class NewGame {
  constructor(length, user) {
    this.id      = length + 1;
    this.status  = STATUS_OPEN;
    this.user1   = user;
    this.user2   = "";
    this.field   = Array(9).fill(null);
    this.xIsNext = true;
    this.time    = null;
    this.winner  = "";
  }
}

const STATUS_OPEN = "open";
