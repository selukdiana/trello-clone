function initApp() {
  const todoList = document.querySelector('ul.todo__list');
  const todoItems = todos.map(createTodoItem);

  todoList.append(...todoItems.reverse());

  addEventListeners();

  setTodos();

  setTodoListProperties();
}

initApp();
