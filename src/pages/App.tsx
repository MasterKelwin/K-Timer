import React from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import style from './App.module.scss';

function App() {
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form />
        <List />
      </div>
    </main>
  );
}

export default App;






