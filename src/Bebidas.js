import Bebida from "./Bebida"

export default function Bebidas(){
    const bebidas = [
        { 
            imagem: [ "assets/coca.png", 
            "3 latas de coca-cola"
        ],
            nomeBebida: "Coquinha gelada",
            descricaoBebida: "Lata 350ml",
            valorBebida: "R$ 4,90"     

        },
        { 
            imagem: [ "assets/pepsi.jpg", 
            "Prato com spaghetti"
        ],
            nomeBebida: "Pepsi gelada",
            descricaoBebida: "Lata 350ml",
            valorBebida: "R$ 4,50"    

        },
        { 
            imagem: [ "assets/fanta.jpg", 
            "Prato com arroz feijão e salada"

        ],
            nomeBebida: "Fanta gelada",
            descricaoBebida: "Lata 350ml",
            valorBebida: "R$ 4,50"      
        },
    ]

    return (
        <>
        <div className  = "titulo_bebida righteous"> <p>Agora, sua bebida</p> </div>
            <div className ="conteiner_bebida">
                
                <div className ="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Coquinha gelada', 4.90)">
                    <img src="assets/coca.png" alt="Figura bebidas" className ="imagens"/>
                    <p className ="nome_bebida roboto">Coquinha gelada</p>
                    <p className ="descrição beber roboto">Lata 350ml</p>
                    <p className ="valor_bebida drink roboto">R$4,90</p>
                    <ion-icon name="checkmark-circle" className ="icone verde"></ion-icon>
                </div>
                
                <div className ="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Pepsi gelada', 4.50)">
                    <img src="assets/pepsi.jpg" alt="Figura bebidas" className ="imagens"/>
                    <p className ="nome_bebida roboto">Pepsi gelada</p>
                    <p className ="descrição beber roboto">Lata 350ml</p>
                    <p className ="valor_bebida drink roboto">R$4,50</p>
                    <ion-icon name="checkmark-circle" className ="icone verde"></ion-icon>
                </div>

                <div className ="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Fanta gelada', 4.50)">
                    <img src="assets/fanta.jpg" alt="Figura bebidas" className ="imagens"/>
                    <p className ="nome_bebida roboto">Fanta gelada</p>
                    <p className ="descrição beber roboto">Lata 350ml</p>
                    <p className ="valor_bebida drink roboto">R$4,50</p>
                    <ion-icon name="checkmark-circle" className ="icone verde"></ion-icon>
                </div>      
            </div>
        </>
    )
}