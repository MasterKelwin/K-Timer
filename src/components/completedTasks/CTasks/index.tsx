import style from '../completedTasks.module.scss';
import { ITask } from '../../../types/ITask';


export default function CTasks({ task } : ITask) {
    return (
        <li className={style.item}>
            <h3 className={style.name}>{task} &#x2714;</h3>
        </li>
    )
}
