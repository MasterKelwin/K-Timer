//  FORM
import React, { useState } from 'react';
import Button from '../button';
import style from './form.module.scss';
import { ITask } from '../../types/ITask'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form ({setTasks}: Props) {
    const [task, setTask] = useState(""); //inputs states
    const [time, setTime] = useState("00:00:00"); //inputs states
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldProps => 
        [...oldProps,
            {task,
            time,
            completed: false,
            selected: false,
            id: uuidv4()}
        ]);

        setTask("");  //flush form
        setTime("00:00:00"); //flush form
    }

    return(
      <form className={style.form} onSubmit={addTask}>
        <div className={style.divTask}>
          <label className={style.label} htmlFor="task">Insira sua tarefa</label>
          <input 
            className={style.inputTask}
            type="text" 
            id="task" 
            value={task}
            onChange={evento => setTask(evento.target.value)}
            required />
        </div>
        <div className={style.divTime}>
          <label className={style.label} htmlFor="time">Insira o tempo desejado</label>
          <input 
              className={style.inputTime}
              type="time"
              id="time"
              value={time}
              min={"00:00:01"}
              max={"02:30:00"}
              step="1"
              name="time"
              onChange={evento => setTime(evento.target.value)}
              required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    )};