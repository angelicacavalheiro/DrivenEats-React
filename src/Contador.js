import React, { useState } from "react";

export default function Contador(props){

    const {
        clas, 
        setClass,
        AlmocoPedido,
        setAlmocoPedido,
        BebidaPedido,
        setBebidaPedido,
        SobremesaPedido,
        setSobremesaPedido,
        Almoco, 
        setAlmoco
    } = props; 

    const [contador, setContador] = useState(1);    

    function clickMinus(event) {

        event.stopPropagation()

        setContador(contador - 1);   

        //logica para contabilizar se há pelo menos 1 opçao de cada marcada

        if(clas === "caixinha_almoço selecionar"){    
            setAlmocoPedido(AlmocoPedido - 1);
        } else if (clas === "caixinha_bebida selecionar"){
            setBebidaPedido(BebidaPedido - 1);            
        } else {
            setSobremesaPedido(SobremesaPedido - 1);
        }           

        //logica para retirar borda verde e contador da opção escolhida

        if(contador === 1){
           if(clas === "caixinha_almoço selecionar"){    
                setClass("caixinha_almoço escondido")
                setAlmoco([""])
           } else if (clas === "caixinha_bebida selecionar"){
                setClass("caixinha_bebida escondido")             
           } else {
                setClass("caixinha_sobremesa escondido") 
           } 
           setContador(contador)                                         
        }    
    }

    function clickPlus(){

        setContador(contador + 1)

        //let newAlmoco = Almoco+ " " +"("+(contador + 1)+"X)"

        setAlmoco(`${Almoco}`+`${contador}` +`X`)

    }
    console.log(Almoco)
   

    return(
        <div className="cell">
            <button onClick={() => clickPlus() } className="plus">
            +
            </button>

            <div className="value">{contador}</div>

            <button onClick={(event) => clickMinus(event)} className="minus">
            -
            </button>
        </div>

    )
}