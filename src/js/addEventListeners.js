import { todos, setStorageItem } from './customStorage.js';
import Todo from './Todo.js';
import { createTodoItem } from './createTodoItem.js';
import { runInThisContext } from 'vm';

function addEventListeners() {
  const todoTitleInput = document.querySelector('input.title-input');
  const todoDescriptionInput = document.querySelector(
    'textarea.description-input'
  );
  const addBtn = document.querySelector('button.todo-btn');
  const closeBtn = document.querySelector('button.hystmodal__close');
  const todoList = document.querySelector('ul.backlog__list');

  addBtn.addEventListener('click', () => {
    if (!todoTitleInput.value.trim() || !todoDescriptionInput.value.trim())
      return;

    const newTodo = todos.length
      ? new Todo(
          todoTitleInput.value,
          todoDescriptionInput.value,
          todos[todos.length - 1].id + 1
        )
      : new Todo(todoTitleInput.value, todoDescriptionInput.value, 0);

    todos.push(newTodo);

    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
    const doc = document.documentElement;
    doc.classList.remove('hystmodal__opened');
    doc.style.marginRight = '0';
    const modalWindow = document.querySelector('.hystmodal');
    modalWindow.classList.remove('hystmodal--active');
  });
}
export default addEventListeners;
