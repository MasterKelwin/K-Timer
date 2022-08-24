import { ITask } from '../../types/ITask'
import style from './cronometer.module.scss'
import Timer from './timer'
import { timeInSeconds } from '../../common/utils/time'
import { useEffect, useState } from 'react'
import Button from '../button'

interface Props {
    selected: ITask | undefined,
    taskOver: () => void,
    stop: () => void
  }
  
export default function Cron ({ selected, taskOver, stop } : Props ) {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if(selected?.time) {
            setTime(timeInSeconds(selected.time));
        }
    },[selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if(counter >= 0) {
                setTime(counter--);
                return regressive(counter--)

            } else{
                taskOver();
            }
        }, 1000);

    }

    return(
        <section className={style.cronometer}>
            <h2 className={style.title}>Escolha sua tarefa e comece estudar</h2>
            <Timer time={time}/>
            <Button onClick={() => regressive(time)}>Começar</Button>
        </section>
    );
}