import React, { useState } from "react";
import Contador from "./Contador";

export default function Almoco(props){

    const {
        almoco,
        mudaQuantidade
    } = props; 

    const [img, alt] = almoco.imagem;
    const {nomeComida, descricaoComida, valorComida, quantidade} = almoco;
    const [Class, setClass] = useState("caixinha_almoço escondido");
    const [precoAlmoco, setPrecoAlmoco] = useState()

    function SelecionarAlmoco(){            
        setClass("caixinha_almoço selecionar")   
        mudaQuantidade(almoco, almoco.quantidade+1)

        let nvalorAlmoco = valorComida.replace('R$', "");
        let nevalorAlmoco = nvalorAlmoco.replace(',', ".");
        let newvalorAlmoco = (parseFloat(nevalorAlmoco)).toFixed(2)   
            
        setPrecoAlmoco(newvalorAlmoco)                
    }    
 
    return (                                           
            <div className = {Class} onClick={() => SelecionarAlmoco()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_comida roboto">{nomeComida}</p>
                <p className="descrição refeição roboto">{descricaoComida}</p>
                <p className="valor_comida roboto">{valorComida}</p>
                <Contador clas={Class} setClass={setClass} almoco={almoco} mudaQuantidade={mudaQuantidade}/>              
            </div>            
    )
}