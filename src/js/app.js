import { todos, setStorageItem, getStorageItem } from './customStorage';
import { createTodoItem } from './createTodoItem';
import addEventListeners from './addEventListeners.js';

function appendTodos() {
  const backlogList = document.querySelector('ul.backlog__list');
  console.log(todos);
  const todoList = document.querySelector('ul.todo__list');
  const doneList = document.querySelector('ul.done__list');
  const backlogItems = todos
    .filter((todo) => {
      return !todo.inProcess && !todo.completed;
    })
    .map(createTodoItem);

  const todoItems = todos.filter((todo) => todo.inProcess).map(createTodoItem);

  const doneItems = todos.filter((todo) => todo.completed).map(createTodoItem);

  backlogList.append(...backlogItems.reverse());
  todoList.append(...todoItems.reverse());
  doneList.append(...doneItems.reverse());
}

function initApp() {
  appendTodos();
  addEventListeners();

  // setTodos();

  // setTodoListProperties();
  // console.log(backlogList);
  const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
  });
  console.log(myModal);
}

initApp();
