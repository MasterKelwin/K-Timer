import Item from '../task-list/item';
import style from './list.module.scss';
import { ITask } from '../../types/ITask'

function List ({ tasks } : { tasks: ITask[]}) {
    return(
        <section className={style.section}>
            <h2 className={style.titulo}>Estudos do dia</h2>
            <ul className={style.lista}>
                {tasks.map((item, index) => (
                    <Item 
                        tarefa={item.task} tempo={item.time} key={index}
                        {...item}                    />
                ))}
            </ul>
        </section>
    )
}

export default List;


/*                onClick={() => {
    setTasks([...tasks, { tarefa: "Banana", tempo: "05:00:00"}])
}} */