import Bebida from "./Bebida"

export default function Bebidas(props){

    const {
        titulo,
        produtos,
        mudaQuantidade
    } = props; 

    return (
        <>
        <div className  = "titulo_bebida righteous"> <p>{titulo}</p> </div>
            <div className ="conteiner_bebida">
                {produtos.map((bebida) => 
                    (<Bebida bebida={bebida} mudaQuantidade={mudaQuantidade}/>))}     
            </div>
        </>
    )
}