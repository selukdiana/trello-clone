import createElement from './createElement.js';

function createDate(date) {
  const todoDate = createElement('div', 'card__date');
  const span = createElement('p', '');
  span.setAttribute('datetime', date);
  todoDate.append(span);
  return todoDate;
}

function createTodoDescription(description) {
  const todoDescriptiion = createElement('div', 'card__description');
  const p = createElement('p', '');
  p.append(description);
  todoDescriptiion.append(p);
  return todoDescriptiion;
}

function createTitle(title) {
  const todoTitle = createElement('h3', 'card__title');
  todoTitle.append(title);
  return todoTitle;
}

function createTodoItem(todo) {
  const { id, title, description, date, completed, inProcess } = todo;

  const todoItem = createElement('li', 'card');
  const todoTitle = createTitle(title);
  const todoDescriptiion = createTodoDescription(description);
  const todoDate = createDate(date);

  if (completed) {
    todoItem.classList.add('done-card');
  } else if (inProcess) {
    todoItem.classList.add('todo-card');
  } else {
    todoItem.classList.add('backlog-card');
  }
  todoItem.dataset.id = id;

  todoItem.append(todoTitle, todoDescriptiion, todoDate);

  return todoItem;
}

export { createDate, createTodoDescription, createTitle, createTodoItem };
