import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/task-list';
import Cron from '../components/cronometer';
import CompletedTasks from '../components/completedTasks';
import style from './App.module.scss';
import { ITask } from '../types/ITask';

export default function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [selected, setSelected] = useState<ITask>();
    const [complets, setComplets] = useState<ITask[]>([]);

    function select(taskSelected: ITask) {
      
    if(taskSelected.completed === false) {
        setSelected(taskSelected);
        setTasks(oldTasks => oldTasks.map(task => ({
            ...task,
            selected: task.id === taskSelected.id ? true : false
        })))
      }

      console.log(taskSelected);
    }

    function delay(seconds: number){
      return new Promise(function(_function){
          setTimeout(_function, seconds * 1000);
      });
    }
    
    async function removeTask(){  
      await delay(1);
      setTasks(oldTasks => oldTasks.filter(task => {
        return task.removed !== true;
      }));
    }

    function taskOver() {
      if(selected) {
        setComplets(oldTasks => [...oldTasks, selected]);
        setTasks(oldTasks => oldTasks.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
              removed: true
            }
          }
          return task;
        }));
        setSelected(undefined);
        removeTask();
      }
    }

  

    
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form setTasks={setTasks}/>
        <Cron selected={selected} taskOver={taskOver} />
        <CompletedTasks complets={complets}/>
      </div>
      <List tasks={tasks} select={select}/>
    </main>
  );
}







