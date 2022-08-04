import React from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import './style.scss'

function App() {
  return (
    <main className="app">
      <div className="tasks">
        <Form />
        <List />
      </div>
    </main>
  );
}

export default App;






