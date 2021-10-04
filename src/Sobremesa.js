import React, { useState } from "react";
import Contador from "./Contador";

export default function Sobremesa(props) {

    const {
      sobremesa,
      mudaQuantidade
  } = props; 

    const [img, alt] = sobremesa.imagem;
    const {nome, descricaoSobremesa, valor, quantidade} = sobremesa;
    const [Class, setClass] = useState("caixinha_sobremesa escondido");

    function SelecionarSobremesa(){
    
      setClass("caixinha_sobremesa selecionar")  
      mudaQuantidade(sobremesa, sobremesa.quantidade+1)

    }

    return (
            <div className = {Class} onClick={() => SelecionarSobremesa()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_sobremesa roboto">{nome}</p>
                <p className="descrição adoçar roboto">{descricaoSobremesa}</p>
                <p className="valor_sobremesa dessert roboto">R$ {valor.toFixed(2)}</p>
                <Contador clas={Class} setClass={setClass} sobremesa={sobremesa} mudaQuantidade={mudaQuantidade}/>                
            </div>    
    ) 
}
