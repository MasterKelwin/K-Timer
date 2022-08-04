import React from "react";
import Botao from "../botao"

class Formulario extends React.Component {
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="task"></label>
                    <input type="text" id="task" required />
                </div>
                <div>
                    <label htmlFor="time"></label>
                    <input 
                        type="time"
                        id="time"
                        min={"00:00:01"}
                        max={"02:30:00"}
                        step="1"
                        name="time"
                        required
                    />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;