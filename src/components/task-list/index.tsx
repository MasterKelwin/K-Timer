import React from "react";

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
    }]
    return(
        <section>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={item.id}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default List;