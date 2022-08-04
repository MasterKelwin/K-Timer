import React from 'react';
import Form from './components/form';
import List from './components/task-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;




