import Almoco from "./Almoco"

export default function Almocos(props){
    const {
        titulo,
        produtos,
        mudaQuantidade
    } = props;    

      return (
            <>
            <div class = "titulo_almoço righteous"> <p>{titulo}</p> </div> 
            <div className="conteiner_almoço">
                {produtos.map((almoco) => 
                    (<Almoco almoco={almoco} mudaQuantidade={mudaQuantidade}/>))}
            </div>   
            </>
    )
}