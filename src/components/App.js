import React from 'react';
import '../syles/App.css';
import TodoList from './TodoList';
import LastItemDisplay from './LastItemDisplay';
import RemoveItem from './RemoveItem';

function App() {
  return (
    <div className="main">
      <h2 className="title">  Checklist  </h2>
      <TodoList />
      <LastItemDisplay />
      <RemoveItem />
    </div>
  );
}

export default App;
