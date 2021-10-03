import React, { useState } from "react";
import Contador from "./Contador";
import Footer from "./Footer";

export default function Sobremesa(props) {

    const {
      sobremesa,
      mudaQuantidade
  } = props; 

    const [img, alt] = sobremesa.imagem;
    const {nomeSobremesa, descricaoSobremesa, valorSobremesa, quantidade} = sobremesa;
    const [Class, setClass] = useState("caixinha_sobremesa escondido");
    const [precoSobremesa, setPrecoSobremesa] = useState()
 

    function SelecionarSobremesa(){
    
      setClass("caixinha_sobremesa selecionar")  
      mudaQuantidade(sobremesa, sobremesa.quantidade+1)

      let nvalorSobremesa = valorSobremesa.replace('R$', "");
      let nevalorSobremesa = nvalorSobremesa.replace(',', ".");
      let newvalorSobremesa = (parseFloat(nevalorSobremesa)).toFixed(2)   
          
      setPrecoSobremesa(newvalorSobremesa)  
    }

    return (
            <div className = {Class} onClick={() => SelecionarSobremesa()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_sobremesa roboto">{nomeSobremesa}</p>
                <p className="descrição adoçar roboto">{descricaoSobremesa}</p>
                <p className="valor_sobremesa dessert roboto">{valorSobremesa}</p>
                <Contador clas={Class} setClass={setClass} sobremesa={sobremesa} mudaQuantidade={mudaQuantidade}/>                
            </div>    
    ) 
}
