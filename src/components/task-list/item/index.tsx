import style from '../../task-list/list.module.scss';
import { ITask } from '../../../types/ITask';

interface Props extends ITask{
    select: (taskSelected: ITask) => void
}

export default function Item({
                        task,
                        time,
                        completed,
                        selected,
                        id,
                        removed,
                        select
                            }: Props) {
    return (
        <li className=
        {`${style.item} ${selected ? style.itemSelected : ''}
          ${completed ? style.itemCompleted : ''}`}
            onClick={() => select({
                task,
                time,
                completed,
                selected,
                id,
                removed
            })}>
            <h3 className={style.nomeItem}>{task}</h3>
            <span className={style.tempoItem}>{time}</span>
        </li>
    )
}