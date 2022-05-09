import Todo from './Todo.js';

const todos = getTodos() || [new Todo('Покормить кота', 'Завтра утром', 0)];

function setTodos(value) {
  localStorage.setItem('todos', JSON.stringify(value));
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos'));
}

export { todos, setTodos, getTodos };
