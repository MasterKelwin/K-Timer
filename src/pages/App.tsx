import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import style from './App.module.scss';
import { ITask } from '../types/ITask';

export default function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form setTasks={setTasks}/>
        <Cron />
      </div>
      <List tasks={tasks}/>
    </main>
  );
}







