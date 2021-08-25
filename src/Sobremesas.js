import Sobremesa from "./Sobremesa"

export default function Sobremesas(){

    const sobremesas = [
        { 
            imagem: [ "assets/pudim.png", 
            "Pudim"
        ],
            nomeSobremesa: "Pudim",
            descricaoSobremesa: "Pudim Tradicional",
            valorSobremesa: "R$ 7,90"     

        },
        { 
            imagem: [ "assets/tiramisu.jpg", 
            "Pedaço de Tiramisu"
        ],
            nomeSobremesa: "Tiramisu",
            descricaoSobremesa: "Tiramisu Italiano",
            valorSobremesa: "R$ 10,90"    

        },
        { 
            imagem: [ "assets/morango.jpg", 
            "Mousse de morango"

        ],
            nomeSobremesa: "Mousse",
            descricaoSobremesa: "Mousse de morango",
            valorSobremesa: "R$ 5,90"      
        },
    ]

    return (
        <>
        <div class = "titulo_sobremesa righteous"> <p>Por fim, sua sobremesa</p> </div>
            <div class="conteiner_sobremesa">
                {sobremesas.map((sobremesa) => 
                            ( <Sobremesa sobremesa={sobremesa} />))}       
            </div> 
            </>
    )
}