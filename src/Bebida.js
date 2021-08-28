import React, { useState } from "react";
import Contador from "./Contador";

export default function Bebida(props){

    const [img, alt] = props.bebida.imagem;
    const {nomeBebida, descricaoBebida, valorBebida} = props.bebida;
    const [Class, setClass] = useState("caixinha_bebida escondido");
    
    function SelecionarBebida(){
    
        setClass("caixinha_bebida selecionar") 
        
    }

    return (
            <div className = {Class} onClick={() => SelecionarBebida()}>
                <img src={img} alt={alt} className ="imagens"/>
                <p className ="nome_bebida roboto">{nomeBebida}</p>
                <p className ="descrição beber roboto">{descricaoBebida}</p>
                <p className ="valor_bebida drink roboto">{valorBebida}</p>
                <Contador class={[Class, setClass]}/>
            </div>
    )
}
