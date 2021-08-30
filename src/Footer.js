import ConfirmarPedido from "./ConfirmarPedido";

export default function Footer(props){

    const {
        AlmocoPedido,
        BebidaPedido,
        SobremesaPedido
    } = props;

    
    if (AlmocoPedido >= 1 && BebidaPedido >= 1 && SobremesaPedido >= 1){
        return (
            <div class="barra-final">
                    <bottom class="primeiro-botão finalizar " onClick={(event) => Confirmar(event)}> 
                        <a class="frase2"> Fechar pedido </a>
                    </bottom>   
                </div>
        )
    } else {
            return (
                <div class="barra-final">
                    <bottom class="primeiro-botão começar esconder-link"> 
                        <p class="frase1">Selecione os 3 itens <br/> para fechar o pedido</p>
                    </bottom>   
                </div>                   
            )
    }

    function Confirmar(event){
        event.stopPropagation()
        return(
            < ConfirmarPedido />
        )
       
    }                
}