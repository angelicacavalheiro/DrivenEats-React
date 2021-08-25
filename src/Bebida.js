export default function Bebida(props){

    const [img, alt] = props.bebida.imagem;
    const {nomeBebida, descricaoBebida, valorBebida} = props.bebida;

    return (
            <div className ="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Coquinha gelada', 4.90)">
                <img src={img} alt={alt} className ="imagens"/>
                <p className ="nome_bebida roboto">{nomeBebida}</p>
                <p className ="descrição beber roboto">{descricaoBebida}</p>
                <p className ="valor_bebida drink roboto">{valorBebida}</p>
                <ion-icon name="checkmark-circle" className ="icone verde"></ion-icon>
            </div>
    )
}
