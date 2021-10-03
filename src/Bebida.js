import React, { useState } from "react";
import Contador from "./Contador";

export default function Bebida(props){

    const {
        bebida,
        mudaQuantidade
    } = props; 

    const [img, alt] = bebida.imagem;
    const {nomeBebida, descricaoBebida, valorBebida, quantidade} = bebida;
    const [Class, setClass] = useState("caixinha_bebida escondido");
    const [precoBebida, setPrecoBebida] = useState()
    
    function SelecionarBebida(){
    
        setClass("caixinha_bebida selecionar") 
        mudaQuantidade(bebida, bebida.quantidade+1)

        let nvalorBebida = valorBebida.replace('R$', "");
        let nevalorBebida = nvalorBebida.replace(',', ".");
        let newvalorBebida = (parseFloat(nevalorBebida)).toFixed(2)   
            
        setPrecoBebida(newvalorBebida)                       
    }   

    return (
            <div className = {Class} onClick={() => SelecionarBebida()}>
                <img src={img} alt={alt} className ="imagens"/>
                <p className ="nome_bebida roboto">{nomeBebida}</p>
                <p className ="descrição beber roboto">{descricaoBebida}</p>
                <p className ="valor_bebida drink roboto">{valorBebida}</p>
                <Contador clas={Class} setClass={setClass} bebida={bebida} mudaQuantidade={mudaQuantidade}/>   
            </div>
    )
}
