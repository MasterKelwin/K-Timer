import style from './timer.module.scss';

interface Props {
    time: number | undefined
}

export default function Timer({ time }: Props) {
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