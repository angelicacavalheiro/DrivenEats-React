import React, { useState } from "react";
import Contador from "./Contador";
import Footer from "./Footer";

export default function Sobremesa(props) {

    const {
      sobremesa,
      SobremesaPedido,
      setSobremesaPedido,
  } = props; 

    const [img, alt] = sobremesa.imagem;
    const {nomeSobremesa, descricaoSobremesa, valorSobremesa} = sobremesa;
    const [Class, setClass] = useState("caixinha_sobremesa escondido");
    const [Sobremesa, setSobremesa] = useState()
    const [precoSobremesa, setPrecoSobremesa] = useState()
 

    function SelecionarSobremesa(){
    
      setClass("caixinha_sobremesa selecionar") 
      setSobremesaPedido(SobremesaPedido + 1) 

      setSobremesa(nomeSobremesa)

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
                <Contador clas={Class} setClass={setClass} SobremesaPedido={SobremesaPedido} setSobremesaPedido={setSobremesaPedido} 
                Sobremesa={Sobremesa} setSobremesa={setSobremesa} precoSobremesa = {precoSobremesa} setPrecoSobremesa = {setPrecoSobremesa}/> 
                <Footer Sobremesa={Sobremesa} />                 
            </div>    
    ) 
}
