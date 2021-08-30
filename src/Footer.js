export default function Footer(props){

    const {
        AlmocoPedido,
        BebidaPedido,
        SobremesaPedido,
        Almoco,
        Bebida,
        Sobremesa,
        precoTotal
    } = props;

    
    let almoco

    if (Almoco !== undefined){
        console.log(Almoco) 
    }    
 
    console.log(almoco)
    
    if (AlmocoPedido >= 1 && BebidaPedido >= 1 && SobremesaPedido >= 1){
        return (
            <div class="barra-final">
                    <bottom class="primeiro-botão finalizar " onClick={() => Confirmar(almoco)}> 
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

    function Confirmar(){

        let valorTotal = precoTotal
        console.log(almoco)
    
        const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${almoco} 
        - Bebida: ${Bebida}
        - Sobremesa: ${Sobremesa}
        - Total R$: ${valorTotal}`);
        window.location.href = `https://wa.me/5511977505769?text=${mensagem}`;
        
       
    }                
}