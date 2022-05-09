import {
  format,
  render,
  cancel,
  register,
} from '../../node_modules/timeago.js';

function Todo(title, description, id) {
  this.title = title;
  this.id = id;
  this.description = description;
  this.completed = false;
  this.inProcess = false;
  this.date = new Date();
}

export default Todo;
