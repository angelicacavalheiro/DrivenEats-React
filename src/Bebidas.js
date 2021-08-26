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
                {bebidas.map((bebida) => 
                        ( <Bebida bebida={bebida} />))}     
            </div>
        </>
    )
}