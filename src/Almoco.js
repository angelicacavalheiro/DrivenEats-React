import React, { useState } from "react";
import Contador from "./Contador";

export default function Almoco(props){

    const {
        almoco,
        mudaQuantidade
    } = props; 

    const [img, alt] = almoco.imagem;
    const {nome, descricaoComida, valor, quantidade} = almoco;
    const [Class, setClass] = useState("caixinha_almoço escondido");

    function SelecionarAlmoco(){            
        setClass("caixinha_almoço selecionar")   
        mudaQuantidade(almoco, almoco.quantidade+1)            
    }    
 
    return (                                           
            <div className = {Class} onClick={() => SelecionarAlmoco()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_comida roboto">{nome}</p>
                <p className="descrição refeição roboto">{descricaoComida}</p>
                <p className="valor_comida roboto">R$ {valor.toFixed(2)}</p>
                <Contador clas={Class} setClass={setClass} almoco={almoco} mudaQuantidade={mudaQuantidade}/>              
            </div>            
    )
}