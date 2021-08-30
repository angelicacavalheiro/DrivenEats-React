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
        setAlmoco,
        Bebida, 
        setBebida,
        Sobremesa, 
        setSobremesa,
        precoBebida,
        setPrecoBebida
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
                setBebida([""])         
           } else {
                setClass("caixinha_sobremesa escondido") 
           } 
           setContador(contador)                                         
        }    
    }

  

    function clickPlus(event){

        event.stopPropagation()

        setContador(contador + 1)


        //logica para guardar numero de pedidos
        if(clas === "caixinha_almoço selecionar"){    
            setAlmoco(`${Almoco}` + " (" + `${(contador+1)}` +`X` + ")")
        } else if (clas === "caixinha_bebida selecionar"){
            setBebida(`${Bebida}` + " (" + `${(contador+1)}` +`X` + ")")  
            setPrecoBebida(precoBebida + precoBebida)
            console.log(precoBebida)
        } else {
             setSobremesa(`${Sobremesa}` + " (" + `${(contador+1)}` +`X` + ")") 
        }           
    }
      

    return(
        <div className="cell">
            <button onClick={(event) => clickPlus(event) } className="plus">
            +
            </button>

            <div className="value">{contador}</div>

            <button onClick={(event) => clickMinus(event)} className="minus">
            -
            </button>
        </div>

    )
}