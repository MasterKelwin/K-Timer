import style from './timer.module.scss';

interface Props {
    time: number | undefined
}

export default function Timer({ time = 0 }: Props) {
    const secondsForHour = Math.floor(time / 3600);
    const secondsForMinutes = (Math.floor(time / 60)) - (secondsForHour*60);
    const seconds = time % 60;

    const hourString = String(secondsForHour).padStart(2, '0');
    const minuteString = String(secondsForMinutes).padStart(2, '0');
    const secondString = String(seconds).padStart(2, '0');



    return (
        <section className={style.timer}>
            <span className={style.number} >{hourString[0]}</span>
            <span className={style.number} >{hourString[1]}</span>
            <span className={style.points}>:</span>
            <span className={style.number} >{minuteString[0]}</span>
            <span className={style.number} >{minuteString[1]}</span>
            <span className={style.points}>:</span>
            <span className={style.number} >{secondString[0]}</span>
            <span className={style.number} >{secondString[1]}</span>
        </section>
    )
}