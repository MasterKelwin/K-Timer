import style from '../../task-list/list.module.scss';

export default function Item({task, time}: {task: string, time: string}) {
    return (
        <li className={style.item}>
            <h3 className={style.nomeItem}>{task}</h3>
            <span className={style.tempoItem}>{time}</span>
        </li>
    )
}