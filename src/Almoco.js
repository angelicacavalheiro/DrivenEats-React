import React, { useState } from "react";
import Contador from "./Contador";

export default function Almoco(props){

    const [img, alt] = props.almoco.imagem;
    const {nomeComida, descricaoComida, valorComida} = props.almoco;
    const [Class, setClass] = useState("caixinha_almoço escondido");
    
    //console.log(itens.itemPedido)
    


    function SelecionarAlmoco(){
    
        setClass("caixinha_almoço selecionar")
        
    }
 
    return (                                           
            <div className = {Class} onClick={() => SelecionarAlmoco()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_comida roboto">{nomeComida}</p>
                <p className="descrição refeição roboto">{descricaoComida}</p>
                <p className="valor_comida roboto">{valorComida}</p>
                <Contador class={[Class, setClass]}/>   
            </div>            
    )
}