import React from 'react';

const Form = () => (
  <form>
    <input type="text" className="todo-input" />
    <button className="todo-button" type="submit">
      {/* <i className="fas fa-plus-square"> </i> */}
    </button>
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">Все задачи</option>
        <option value="uncompleted">Незавершенные</option>
        <option value="completed">Завершенные</option>
      </select>
    </div>
  </form>
);

export default Form;
