import React, { useState } from "react";

export default function Contador(){

    const [contador, setContador] = useState(0);

    return(
        <div className="cell">
            <button onClick={() => setContador(contador + 1)} className="plus">
            +
            </button>

            <div className="value">{contador}</div>

            <button onClick={() => setContador(contador - 1)} className="minus">
            -
            </button>
        </div>

    )
}