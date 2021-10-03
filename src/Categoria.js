import Produto from "./Produto"

export default function Categoria({titulo}){

      return (
            <>
                <div class = "titulo_almoço righteous"> <p>{titulo}</p> </div> 
               
               
                <div className="conteiner_almoço">
                    <Produto />
                </div>
                
            </>
    )
}