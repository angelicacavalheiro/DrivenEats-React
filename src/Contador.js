import React, { useState } from "react";

export default function Contador(props){

    const {
        clas, 
        setClass,    
        almoco,
        bebida,
        sobremesa,
        mudaQuantidade
    } = props; 

    const [contador, setContador] = useState(1);  

    function decrementaQuantidade(event) {
        event.stopPropagation()  

        if(clas === "caixinha_almoço selecionar"){    
            mudaQuantidade(almoco, almoco.quantidade-1)
            setContador(contador-1)
            
        } else if (clas === "caixinha_bebida selecionar"){
            mudaQuantidade(bebida, bebida.quantidade-1)
            setContador(contador-1)
        } else {
            mudaQuantidade(sobremesa, sobremesa.quantidade-1)
            setContador(contador-1)
        } 

        //logica para retirar borda verde e zerar quantidade

        if(contador === 1){
           if(clas === "caixinha_almoço selecionar"){   
                mudaQuantidade(almoco, 0) 
                setClass("caixinha_almoço escondido")                
           } else if (clas === "caixinha_bebida selecionar"){
                setClass("caixinha_bebida escondido")  
                mudaQuantidade(bebida, 0)   
           } else {
                setClass("caixinha_sobremesa escondido") 
                mudaQuantidade(sobremesa, 0) 
           } 
           setContador(contador)                                         
        }    
    }
  
    function incrementaQuantidade (event){
        event.stopPropagation()

        if(clas === "caixinha_almoço selecionar"){    
            mudaQuantidade(almoco, almoco.quantidade+1)
            setContador(almoco.quantidade)
            
        } else if (clas === "caixinha_bebida selecionar"){
            mudaQuantidade(bebida, bebida.quantidade+1)
            setContador(bebida.quantidade)
        } else {
            mudaQuantidade(sobremesa, sobremesa.quantidade+1)
            setContador(sobremesa.quantidade)
        } 
    }
    
    return(
        <div className="cell">
            <button onClick={(event) => incrementaQuantidade(event) } className="plus">+</button>
            <div className="value">{contador}</div>
            <button onClick={(event) => decrementaQuantidade(event)} className="minus">-</button>
        </div>
    )
}
