import Item from '../task-list/item';
import style from './list.module.scss';
import { ITask } from '../../types/ITask'

interface Props {
    tasks: ITask[],
    select: (taskSelected: ITask) => (void)
}

function List ({ tasks, select } : Props) {
    return(
        <section className={style.section}>
            <h2 className={style.titulo}>Estudos do dia</h2>
            <ul className={style.lista}>
                {tasks.map(item => (
                    <Item 
                        key={item.id}                        
                        select={select}
                        {...item}                   
                        />
                ))}
            </ul>
        </section>
    )
}

export default List;


