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
      //ATT CRON
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

    function stop() {
      if(selected) {
        setTasks(oldTasks => oldTasks.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false
            }
          }
          return task;
        }));
        setSelected(undefined);
      }
    } 
    
  return (
    <main className={style.app}>
      <div className={style.tasks}>
        <Form setTasks={setTasks}/>
        <Cron selected={selected} taskOver={taskOver} stop={stop}/>
        <CompletedTasks complets={complets}/>
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
2- add a readme.txt about the project
3- make it responsive
*/