import React, { useState } from "react";
import Contador from "./Contador";
import ConfirmarPedido from "./ConfirmarPedido";

export default function Almoco(props){

    const {
        almoco,
        AlmocoPedido,
        setAlmocoPedido,
    } = props; 

    const [img, alt] = almoco.imagem;
    const {nomeComida, descricaoComida, valorComida} = almoco;
    const [Class, setClass] = useState("caixinha_almoço escondido");
    const [Almoco, setAlmoco] = useState()

    function SelecionarAlmoco(){
            
        setClass("caixinha_almoço selecionar")   
        setAlmocoPedido(AlmocoPedido + 1)  

        setAlmoco(nomeComida)
                
    }
    
 
    return (                                           
            <div className = {Class} onClick={() => SelecionarAlmoco()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_comida roboto">{nomeComida}</p>
                <p className="descrição refeição roboto">{descricaoComida}</p>
                <p className="valor_comida roboto">{valorComida}</p>
                <Contador clas={Class} setClass={setClass} AlmocoPedido={AlmocoPedido} setAlmocoPedido={setAlmocoPedido} 
                Almoco={Almoco} setAlmoco={setAlmoco}/>   
                <ConfirmarPedido Almoco={Almoco} setAlmoco={setAlmoco}/>               
            </div>            
    )
}