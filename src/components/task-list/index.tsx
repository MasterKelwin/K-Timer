import React from "react";
import style from './list.module.scss';

function List () {
    const tasks = [{
        tarefa: "JavaScript",
        tempo: "01:30:00",
        id: "javascript"
    },
    {
        tarefa: "React",
        tempo: "02:00:00",
        id: "react"
    },
]
    return(
        <section className={style.section}>
            <h2 className={style.titulo}>Estudos do dia</h2>
            <ul className={style.lista}>
                {tasks.map((item, index) => (
                    <li className={style.item} key={item.id}>
                        <h3 className={style.nomeItem}>{item.tarefa}</h3>
                        <span className={style.tempoItem}>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default List;