import React from "react";
import Item from '../task-list/item';
import style from './list.module.scss';

function List () {
    const tasks = [{
        tarefa: "JavaScript",
        tempo: "01:30:00"
    },
    {
        tarefa: "React",
        tempo: "02:00:00"
    }
]
    return(
        <section className={style.section}>
            <h2 className={style.titulo}>Estudos do dia</h2>
            <ul className={style.lista}>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </section>
    )
}

export default List;