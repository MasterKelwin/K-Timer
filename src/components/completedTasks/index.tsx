import style from '../completedTasks/completedTasks.module.scss';
import { ITask } from  '../../types/ITask';
import CTasks from './CTasks'

interface Props {
    complets: ITask[]
}

export default function CompletedTasks({ complets }: Props) {
    return (
        <div className={style.div}>
            <h2 className={style.title}>Tarefas concluídas &#x2714;</h2>
            <div className={style.trace}></div>
            <ul className={style.list}>
                {complets.map(task => (
                    <CTasks 
                        key={task.id}
                        {...task}                
                    /> 
                ))}
            </ul>
        </div>
    )
}


