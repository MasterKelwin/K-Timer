import { ITask } from '../../types/ITask'
import style from './cronometer.module.scss'
import Timer from './timer'
import { timeInSeconds } from '../../common/utils/date'

interface Props {
    selected: ITask | undefined
  }
  

export default function Cron ({ selected } : Props ) {
    return(
        <section className={style.cronometer}>
            <h2 className={style.title}>Escolha sua tarefa e comece estudar</h2>
            <Timer />
        </section>
    )
}