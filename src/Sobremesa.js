export default function Sobremesa(props) {

    const [img, alt] = props.sobremesa.imagem;
    const {nomeSobremesa, descricaoSobremesa, valorSobremesa} = props.sobremesa;

    return (
            <div class="caixinha_sobremesa escondido" onclick="selecionarSobremesa(this, 'Mousse', 5.90)">
                <img src={img} alt={alt} class="imagens"/>
                <p class="nome_sobremesa roboto">{nomeSobremesa}</p>
                <p class="descrição adoçar roboto">{descricaoSobremesa}</p>
                <p class="valor_sobremesa dessert roboto">{valorSobremesa}</p>
                <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
            </div>    
    ) 
}
