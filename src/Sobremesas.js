import Sobremesa from "./Sobremesa"

export default function Sobremesas(props){

    const {
        titulo,
        produtos,
        mudaQuantidade
    } = props; 

    return (
        <>
        <div className = "titulo_sobremesa righteous"> <p>{titulo}</p> </div>
            <div className="conteiner_sobremesa">
                {produtos.map((sobremesa) => 
                    (<Sobremesa sobremesa={sobremesa} mudaQuantidade={mudaQuantidade}/>))}       
            </div> 
            </>
    )
}