export default function Almoco(props){

    const [img, alt] = props.almoco.imagem;
    const {nomeComida, descricaoComida, valorComida} = props.almoco;

    return (                                           
            <div className="caixinha_almoço escondido" onclick="selecionarAlmoço(this, 'Frango Yin Yang', 14.90)">
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_comida roboto">{nomeComida}</p>
                <p className="descrição refeição roboto">{descricaoComida}</p>
                <p className="valor_comida roboto">{valorComida}</p>
                <ion-icon name="checkmark-circle" className="icone verde"></ion-icon>
            </div>            
    )
}