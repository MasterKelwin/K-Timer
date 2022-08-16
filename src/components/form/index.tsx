//  FORM
import Button from '../button';
import style from './form.module.scss';

export default function Form () {
    return(
      <form className={style.form}>
        <div className={style.divTask}>
          <label className={style.label} htmlFor="task">Insira sua tarefa</label>
          <input 
            className={style.inputTask}
            type="text" 
            id="task" 
            required />
        </div>
        <div className={style.divTime}>
          <label className={style.label} htmlFor="time">Insira o tempo desejado</label>
          <input 
              className={style.inputTime}
              type="time"
              id="time"
              min={"00:00:01"}
              max={"02:30:00"}
              step="1"
              name="time"
              required
          />
        </div>
        <Button>Adicionar</Button>
      </form>
    );
    
}


