import Todo from './Todo.js';
import { todos } from './customStorage.js';

function findTodoById(id) {
  return todos.find((todo) => {
    todo.id == id;
  });
}

export default findTodoById;
