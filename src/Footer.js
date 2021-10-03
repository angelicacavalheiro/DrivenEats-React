export default function Footer(props){

    const {
        Almoco,
        Bebida,
        Sobremesa,
        categorias
    } = props;
    
    let finalizarPedido = checarSelecaodeCategorias(categorias)

    function checarSelecaodeCategorias(categorias){

        const selecionarCategorias = categorias.filter((categoria) => {
            return categoria.produtos.find(produto => produto.quantidade > 0)
        })
        return selecionarCategorias.length === categorias.length
    }

    
    if (finalizarPedido){
        return (
            <div class="barra-final">
                    <bottom class="primeiro-botão finalizar "> 
                    {/* <bottom class="primeiro-botão finalizar " onClick={() => Confirmar(almoco)}>  */}
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

    // function Confirmar(){

    //     let valorTotal = precoTotal
    
    //     const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    //     - Prato: ${almoco} 
    //     - Bebida: ${Bebida}
    //     - Sobremesa: ${Sobremesa}
    //     - Total R$: ${valorTotal}`);
    //     window.location.href = `https://wa.me/5511977505769?text=${mensagem}`;
        
       
    // }                
}