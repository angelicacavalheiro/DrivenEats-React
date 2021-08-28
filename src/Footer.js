export default function Footer(){
    if (false){
        return (
            <div class="barra-final">
                    <bottom class="primeiro-botão finalizar " onclick="enviar_pedido()"> 
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
}