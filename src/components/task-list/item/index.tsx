import style from '../../task-list/list.module.scss';
import { ITask } from '../../../types/ITask';

export default function Item({task, time, completed, selected, id}: ITask) {
    return (
        <li className={style.item}>
            <h3 className={style.nomeItem}>{task}</h3>
            <span className={style.tempoItem}>{time}</span>
        </li>
    )
}