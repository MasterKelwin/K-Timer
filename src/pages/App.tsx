import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import style from './App.module.scss';
import { ITask } from '../types/ITask';
import { timeInSeconds } from '../common/utils/time';

export default function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [selected, setSelected] = useState<ITask>();

    function select(taskSelected: ITask) {
      setSelected(taskSelected);
      setTasks(oldTasks => oldTasks.map(task => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false
      })))
      console.log(taskSelected);
    }
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form setTasks={setTasks}/>
        <Cron selected={selected}/>
      </div>
      <List tasks={tasks} select={select}/>
    </main>
  );
}







//useEffect(1, 2)  1- função 2- array de dependencias


//ternario, useState, useEffect