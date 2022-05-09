import { todos, setStorageItem, getStorageItem } from './customStorage';
import { createTodoItem } from './createTodoItem';
import addEventListeners from './addEventListeners.js';

function initApp() {
  const backlogList = document.querySelector('ul.backlog__list');
  console.log(todos);
  const todoItems = todos.map(createTodoItem);

  backlogList.append(...todoItems.reverse());

  addEventListeners();

  // setTodos();

  // setTodoListProperties();
  console.log(backlogList);
  const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
  });
  console.log(myModal);
}

initApp();
