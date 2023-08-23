/* Реализуйте класс Task для представления задачи с полями:

title (заголовок задачи)
description (описание задачи)
due_date (срок выполнения задачи)
priority (приоритет задачи, например, от 1 до 5)
*/
class Task {
  constructor(title, description, due_date, priority) {
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.priority = priority;
  }
  showTask() {
    const markUp = `\n-------------------------
title: ${this.title},\n
description: ${this.description},\n
due_date: ${this.due_date},\n
priority: ${this.priority}\n
-------------------------`;
    console.log(markUp);
  }
}

console.log(Task.name);

const task1 = new Task(
  'Подготовить презентацию',
  'Подготовить материалы и слайды для презентации',
  '2023-09-01',
  3,
);
const task2 = new Task(
  'Сделать покупки',
  'Купить продукты для готовки обеда',
  '2023-08-25',
  2,
);
const task3 = new Task(
  'Записать видеоурок',
  'Записать урок по программированию',
  '2023-08-28',
  3,
);

/* 
get_task(task_title: str) -> Task: Возвращает задачу по её 
заголовку.

get_all_tasks() -> List[Task]: Возвращает список всех задач.

get_tasks_by_priority(priority: int) -> List[Task]: 
Возвращает список задач определенного приоритета.

get_tasks_by_due_date(date: datetime) -> List[Task]:
 Возвращает список задач, у которых срок выполнения не позднее 
 указанной даты.

*/
class ToDoList {
  constructor() {
    this.taskList = [];
  }
  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    const indxTitle = this.taskList.findIndex(el => el.title === task);
    this.taskList.splice(indxTitle, 1);
  }

  getTask(title) {
    return this.taskList.find(el => el.title === title);
  }
  getAllTask() {
    return this.taskList;
  }
  getTaskByPriority(priority) {
    return this.taskList.filter(el => {
      return el.priority === priority;
    });
  }
  getTaskByDueDate(date) {
    return this.taskList.filter(el => el.date === date);
  }
}

const todoList = new ToDoList();

todoList.addTask(task1);
todoList.addTask(task2);
todoList.addTask(task3);

const myTask = todoList.getTaskByPriority(3);
console.log(myTask);
