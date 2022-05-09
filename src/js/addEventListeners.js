import { todos, setTodos, getTodos } from './customStorage.js';
import Todo from './Todo.js';
import { createTodoItem } from './createTodoItem.js';
import { render } from '../../node_modules/timeago.js';
import { findTodoById } from './findTodoById.js';

function addEventListeners() {
  const todoTitleInput = document.querySelector('input.title-input');
  const todoDescriptionInput = document.querySelector(
    'textarea.description-input'
  );
  const addBtn = document.querySelector('button.todo-btn');

  const backlogList = document.querySelector('ul.backlog__list');
  const todoList = document.querySelector('ul.todo__list');
  const doneList = document.querySelector('ul.done__list');

  const board = document.querySelector('.board');
  const nodes = document.querySelectorAll('.card__date p');
  render(nodes);
  // cancel();

  // const doc = document.documentElement;
  // doc.addEventListener('click', () => {});

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
    setTodos(todos);

    const todoNode = createTodoItem(newTodo);
    backlogList.prepend(todoNode);
    render(todoNode.querySelector('.card__date p'));

    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
    const doc = document.documentElement;
    doc.classList.remove('hystmodal__opened');
    doc.style.marginRight = '0';
    const modalWindow = document.querySelector('.hystmodal');
    const modalShadow = document.querySelector('.hystmodal__shadow');
    modalWindow.classList.remove('hystmodal--active');
    modalShadow.classList.remove('hystmodal__shadow--show');
  });

  //board task click
  board.addEventListener('click', (e) => {
    const todo = e.target.closest('li');
    const id = todo.dataset.id;

    const todoTap = todos.find((todo) => {
      return todo.id == id;
    });
    if (!todoTap.inProcess && !todoTap.completed) {
      todoTap.inProcess = true;
      const todoNode = createTodoItem(todoTap);
      todoList.append(todoNode);
      render(todoNode.querySelector('.card__date p'));
      backlogList.removeChild(todo);
    } else if (!todoTap.completed) {
      todoTap.completed = true;
      todoTap.inProcess = false;
      const todoNode = createTodoItem(todoTap);
      doneList.append(todoNode);
      render(todoNode.querySelector('.card__date p'));
      todoList.removeChild(todo);
    }
    setTodos(todos);

    console.log(todoTap);
  });
}

export default addEventListeners;
