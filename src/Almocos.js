import Almoco from "./Almoco"

export default function Almocos(){
    const almocos = [
        { 
            imagem: [ "assets/frango.png", 
            "Prato com frango frito e salada"
        ],
            nomeComida: "Frango Yin Yang",
            descricaoComida: "Um pouco de batata, um pouco de salada",
            valorComida: "R$ 14,90"     

        },
        { 
            imagem: [ "assets/macarrao.jpg", 
            "Prato com spaghetti"
        ],
            nomeComida: "Spaghetti",
            descricaoComida: "Spaghetti ao alho e óleo",
            valorComida: "R$ 15,90"     

        },
        { 
            imagem: [ "assets/arroz.jpg", 
            "Prato com arroz feijão e salada"

        ],
            nomeComida: "Arroz e Feijão",
            descricaoComida: "Um pouco de arroz, um pouco de feijão",
            valorComida: "R$ 13,90"     
        },
    ]
    return (
            <>
            <div class = "titulo_almoço righteous"> <p>Primeiro, seu prato</p> </div> 
            <div className="conteiner_almoço">
                {almocos.map((almoco) => 
                    ( <Almoco almoco={almoco} />))}
            </div>

    

            </>
    )
}