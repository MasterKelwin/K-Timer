import style from './button.module.scss'

export default function Button(props: any) {
    return(
        <button className={style.button}>{props.children}</button>
    )
}
