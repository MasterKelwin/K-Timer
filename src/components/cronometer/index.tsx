import { ITask } from '../../types/ITask'
import style from './cronometer.module.scss'
import Timer from './timer'
import { timeInSeconds } from '../../common/utils/time'
import { useEffect, useState } from 'react'
import Button from '../button'

interface Props {
    selected: ITask | undefined
  }
  
export default function Cron ({ selected } : Props ) {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if(selected?.time) {
            setTime(timeInSeconds(selected.time));
        }
    },[selected]);

    return(
        <section className={style.cronometer}>
            <h2 className={style.title}>Escolha sua tarefa e comece estudar</h2>
            <Timer time={time}/>
            <Button>Começar</Button>
        </section>
    );
}