import Item from '../task-list/item';
import style from './list.module.scss';
import { ITask } from '../../types/ITask'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    tasks: ITask[],
    select: (taskSelected: ITask) => (void)
}

function List ({ tasks, select } : Props) {
    return(
        <section className={style.section}>
            <h2 className={style.titulo}>Estudos do dia</h2>
            <ul className={style.lista}>
                {tasks.map((item, index) => (
                    <Item 
                        task={item.task}
                        time={item.time}
                        id={uuidv4()}    
                        completed={false}
                        selected={false}
                        key={item.id}                        
                        select={select}                   
                        />
                ))}
            </ul>
        </section>
    )
}

export default List;


