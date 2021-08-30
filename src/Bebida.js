import React, { useState } from "react";
import Contador from "./Contador";
import ConfirmarPedido from "./ConfirmarPedido";

export default function Bebida(props){

    const {
        bebida,
        BebidaPedido,
        setBebidaPedido,
    } = props; 

    const [img, alt] = bebida.imagem;
    const {nomeBebida, descricaoBebida, valorBebida} = bebida;
    const [Class, setClass] = useState("caixinha_bebida escondido");
    const [Bebida, setBebida] = useState()
    const [precoBebida, setPrecoBebida] = useState()
    
    function SelecionarBebida(){
    
        setClass("caixinha_bebida selecionar") 
        setBebidaPedido(BebidaPedido + 1) 

        setBebida(nomeBebida)

        let nvalorBebida = valorBebida.replace('R$', "");
        let nevalorBebida = nvalorBebida.replace(',', ".");
        let newvalorBebida = (parseFloat(nevalorBebida)).toFixed(2)   
            
        setPrecoBebida(newvalorBebida)                       
    }
    
    console.log(precoBebida)

    return (
            <div className = {Class} onClick={() => SelecionarBebida()}>
                <img src={img} alt={alt} className ="imagens"/>
                <p className ="nome_bebida roboto">{nomeBebida}</p>
                <p className ="descrição beber roboto">{descricaoBebida}</p>
                <p className ="valor_bebida drink roboto">{valorBebida}</p>
                <Contador clas={Class} setClass={setClass} BebidaPedido={BebidaPedido} setBebidaPedido={setBebidaPedido} 
                Bebida={Bebida} setBebida={setBebida} precoBebida = {precoBebida} setPrecoBebida = {setPrecoBebida}/>   
                <ConfirmarPedido Bebida={Bebida} setBebida={setBebida}
                precoBebida = {precoBebida} setPrecoBebida = {setPrecoBebida}/>
            </div>
    )
}
