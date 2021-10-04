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
                    <bottom class="primeiro-botão finalizar " onClick={() => EnviarParaWhats(categorias, finalizarPedido)}>
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

    function EnviarParaWhats(categorias, finalizarPedido){

        if (!finalizarPedido) return;

        let message = "Olá, gostaria de fazer o pedido: \n";
        let total = 0;

        categorias.forEach((categoria) => {
            categoria.produtos
                .filter(produto => produto.quantidade > 0)
                .forEach(produto => {
                    message += `-${categoria.nome} : ${produto.nome} ${produto.quantidade > 1 ? `(${produto.quantidade}x)` : ''} \n`

                    total += produto.valor * produto.quantidade; 
                })                                   
        })

        message += `Total: R$ ${total.toFixed(2).toLocaleString('pt-Br')}`
    
        const mensagem = encodeURIComponent(message);
        window.location.href = `https://wa.me/5511977505769?text=${mensagem}`
    }                
}