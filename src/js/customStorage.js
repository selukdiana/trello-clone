import Todo from './Todo.js';

const todos = [new Todo('tt', 'sfg', 0), new Todo('tt222', 'sfg', 1)];

function setStorageItem(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function getStorageItem(name) {
  return JSON.parse(localStorage.getItem(name));
}

export { todos, setStorageItem, getStorageItem };
