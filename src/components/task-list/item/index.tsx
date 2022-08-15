import style from '../../task-list/list.module.scss';

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    return (
        <li className={style.item}>
        <h3 className={style.nomeItem}>{tarefa}</h3>
        <span className={style.tempoItem}>{tempo}</span>
    </li>
    )
}