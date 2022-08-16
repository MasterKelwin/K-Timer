//  FORM
import React, { useState } from 'react';
import Button from '../button';
import style from './form.module.scss';

export default function Form () {
    const [task, setTask] = useState(
        {
            tarefa: "",
            tempo: "00:00:00"
        })

    function addTask(event: React.FormEvent<HTMLElement>) {
        event.preventDefault();
        console.log(task);
    }

    return(
      <form className={style.form} onSubmit={addTask}>
        <div className={style.divTask}>
          <label className={style.label} htmlFor="task">Insira sua tarefa</label>
          <input 
            className={style.inputTask}
            type="text" 
            id="task" 
            value={task.tarefa}
            onChange={evento => setTask({...task, tarefa: evento.target.value})}
            required />
        </div>
        <div className={style.divTime}>
          <label className={style.label} htmlFor="time">Insira o tempo desejado</label>
          <input 
              className={style.inputTime}
              type="time"
              id="time"
              value={task.tempo}
              min={"00:00:01"}
              max={"02:30:00"}
              step="1"
              name="time"
              onChange={evento => setTask({...task, tempo: evento.target.value})}
              required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
    
}


