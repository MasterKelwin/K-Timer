import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import style from './App.module.scss';

export default function App() {
    const [tasks, setTasks] = useState(
        [{
            task: "JavaScript",
            time: "01:30:00"
        },
        {
            task: "React",
            time: "02:00:00"
        }]);
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







