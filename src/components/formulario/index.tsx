import React from "react";
import Botao from "../botao"

class Formulario extends React.Component {
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="tarefa"></label>
                    <input type="text" id="tarefa" />
                </div>
                <div>
                    <label htmlFor="tempo"></label>
                    <input 
                        type="time"
                        id="tempo"
                        min={"00:00:01"}
                        max={"02:30:00"}
                    />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;