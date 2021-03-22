import React from 'react';

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit"> </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">Все задачи</option>
          <option value="uncompleted">Незавершенные</option>
          <option value="completed">Завершенные</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
