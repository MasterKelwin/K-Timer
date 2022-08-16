import React from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import style from './App.module.scss';

export default function App() {
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form />
        <Cron />
      </div>
      <List />
    </main>
  );
}


// lista no APP
//criar interfaces
// pasta types
// TAREFAS em lista
// SETTAREFAS em form





