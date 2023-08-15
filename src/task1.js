/* 
Створіть функцію яка створює та повертає обьект завдання. 
Об'єкт task, який буде містити властивості Name, deadline,
priority та done. Додайте методи для відмітки завдання як
виконаного та для виведення інформаціїпро завдання.
*/

// function addObject(name, deadline, priority) {
//   const task = {
//     name: name,
//     deadline: deadline,
//     priority: priority,
//     done: false,
//     changeStatus() {
//       this.done = !this.done;
//     },
//     showStatus() {
//       console.log(
//         `${this.name}\n${this.deadline}\n${this.priority}\n${this.done}`,
//       );
//     },
//   };
//   return task;
// }

// const obj = addObject('Task 1', 2023, 10);
// obj.showStatus();

// ==========================================

const taskManager = {
  tasks: [],
  createTask(name, deadline, priority) {
    const task = {
      name: name,
      deadline: deadline,
      priority: priority,
      done: false,
      changeStatus() {
        this.done = !this.done;
      },
      showStatus() {
        console.log(
          `${this.name}\n${this.deadline}\n${this.priority}\n${this.done}`,
        );
      },
    };
    this.tasks.push(task);
  },

  showTasks() {
    for (let task of this.tasks) {
      task.showStatus();
    }
  },
};

taskManager.createTask('task1', 'tomorrow', 'superPriority');
taskManager.createTask('task2', 'tomorrow', 'notPriority');
taskManager.createTask('task3', 'tomorrow', 'Priority');

console.log(taskManager.tasks);
taskManager.showTasks();

const name = '';
