import style from './cronometer.module.scss'
import Timer from './timer'

export default function Cron () {
    return(
        <section className={style.cronometer}>
            <h2 className={style.title}>Escolha sua tarefa e comece estudar</h2>
            <Timer />
        </section>
    )
}