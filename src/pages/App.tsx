import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import style from './App.module.scss';
import { ITask } from '../types/ITask';

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

    function taskOver() {
      if(selected) {
        setSelected(undefined);
        setTasks(oldTasks => oldTasks.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }));
      }
    }
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form setTasks={setTasks}/>
        <Cron selected={selected} taskOver={taskOver}/>
      </div>
      <List tasks={tasks} select={select}/>
    </main>
  );
}







//useEffect(1, 2)  1- função 2- array de dependencias
//ternario, useState, useEffect
//interfaces ou types, quando e porque utilizar
//styled components e sass, qual e porque usar?



/*
to add:
1-A way to remove a task after complet
2-fixes in cronometer:
 a: the number on display doesnt update to 00:00:00
 b: a solution to stop or add a new task on cronometer, even before the task is done
3- add a readme.txt about the project
4- list of completed tasks
*/