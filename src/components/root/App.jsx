import React, { useState } from 'react';
import Form from '../Form/Form';
import './App.scss';
import TodoList from '../TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState();
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
