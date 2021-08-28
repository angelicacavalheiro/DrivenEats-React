import React, { useState } from "react";

export default function Contador(props){

    const [contador, setContador] = useState(1);
    

    function clickMinus(event) {

        event.stopPropagation()

        setContador(contador - 1)    

        if(contador === 1){
           if(props.class[0] === "caixinha_almoço selecionar"){    
                props.class[1]("caixinha_almoço escondido")
           } else if (props.class[0] === "caixinha_bebida selecionar"){
                props.class[1]("caixinha_bebida escondido")
           } else {
                props.class[1]("caixinha_sobremesa escondido") 
           } 
           setContador(contador)                                         
        }
    }

    return(
        <div className="cell">
            <button onClick={() => setContador(contador + 1)} className="plus">
            +
            </button>

            <div className="value">{contador}</div>

            <button onClick={(event) => clickMinus(event)} className="minus">
            -
            </button>
        </div>

    )
}