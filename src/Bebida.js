import React, { useState } from "react";
import Contador from "./Contador";

export default function Bebida(props){

    const {
        bebida,
        mudaQuantidade
    } = props; 

    const [img, alt] = bebida.imagem;
    const {nome, descricaoBebida, valor, quantidade} = bebida;
    const [Class, setClass] = useState("caixinha_bebida escondido");
    
    function SelecionarBebida(){
    
        setClass("caixinha_bebida selecionar") 
        mudaQuantidade(bebida, bebida.quantidade+1)                     
    }   

    return (
            <div className = {Class} onClick={() => SelecionarBebida()}>
                <img src={img} alt={alt} className ="imagens"/>
                <p className ="nome_bebida roboto">{nome}</p>
                <p className ="descrição beber roboto">{descricaoBebida}</p>
                <p className ="valor_bebida drink roboto">R$ {valor.toFixed(2)}</p>
                <Contador clas={Class} setClass={setClass} bebida={bebida} mudaQuantidade={mudaQuantidade}/>   
            </div>
    )
}
