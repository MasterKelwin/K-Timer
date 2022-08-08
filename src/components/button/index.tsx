import React from "react";
import style from './button.module.scss'

function Button(props: any) {
    return(
        <button className={style.button}>{props.children}</button>
    )
}

export default Button;