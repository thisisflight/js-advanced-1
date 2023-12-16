'use strict';

class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}

class User {
  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}

const task = new Task("Выполнено задание");
const user = new User(task);
user.do();
