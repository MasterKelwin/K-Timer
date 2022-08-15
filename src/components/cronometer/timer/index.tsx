import style from './timer.module.scss';

export default function Timer() {
    return (
        <section className={style.timer}>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
            <span className={style.points}>:</span>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
            <span className={style.points}>:</span>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
        </section>
    )
}