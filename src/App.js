import React, { useState } from "react";
import Topo from "./Topo"
import Almocos from "./Almocos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
import Footer from "./Footer"

export default function App(){

    function mudaQuantidade (produto, novaQuantidade){
        console.log("chamou: ", produto, novaQuantidade)
        produto.quantidade = novaQuantidade;
        setCategorias([...categorias])

    }
    const [categorias, setCategorias] = useState(categoriasIniciais)

    return (
        <>
            <Topo />

            <Almocos 
            titulo={categorias[0].titulo}
            produtos={categorias[0].produtos}
            mudaQuantidade={mudaQuantidade}
            />

            <Bebidas 
            titulo={categorias[1].titulo}
            produtos={categorias[1].produtos}
            mudaQuantidade={mudaQuantidade}
            />

            <Sobremesas 
            titulo={categorias[2].titulo}
            produtos={categorias[2].produtos}
            mudaQuantidade={mudaQuantidade}
             />

            <Footer categorias={categorias}/>
        </>
    )
}

const categoriasIniciais = [
    {
        titulo: "Primeiro, seu prato", 
        produtos: [
            { 
                imagem: [ "assets/frango.png", 
                "Prato com frango frito e salada"
            ],
                nomeComida: "Frango Yin Yang",
                descricaoComida: "Um pouco de batata, um pouco de salada",
                valorComida: "R$ 14,90",    
                id: 1,
                quantidade: 0
    
            },
            { 
                imagem: [ "assets/macarrao.jpg", 
                "Prato com spaghetti"
            ],
                nomeComida: "Spaghetti",
                descricaoComida: "Spaghetti ao alho e óleo",
                valorComida: "R$ 15,90",
                id: 2,
                quantidade: 0
    
            },
            { 
                imagem: [ "assets/arroz.jpg", 
                "Prato com arroz feijão e salada"
    
            ],
                nomeComida: "Arroz e Feijão",
                descricaoComida: "Um pouco de arroz, um pouco de feijão",
                valorComida: "R$ 13,90",  
                id: 3,
                quantidade: 0   
            },
        ]
    },


    {
        titulo: "Agora, sua bebida", 
        produtos: [
            { 
                imagem: [ "assets/coca.png", 
                "3 latas de coca-cola"
            ],
                nomeBebida: "Coquinha gelada",
                descricaoBebida: "Lata 350ml",
                valorBebida: "R$ 4,90",
                id: 4,
                quantidade: 0     
    
            },
            { 
                imagem: [ "assets/pepsi.jpg", 
                "Prato com spaghetti"
            ],
                nomeBebida: "Pepsi gelada",
                descricaoBebida: "Lata 350ml",
                valorBebida: "R$ 4,50",
                id: 5,
                quantidade: 0  
    
            },
            { 
                imagem: [ "assets/fanta.jpg", 
                "Prato com arroz feijão e salada"
    
            ],
                nomeBebida: "Fanta gelada",
                descricaoBebida: "Lata 350ml",
                valorBebida: "R$ 4,50",
                id: 6,
                quantidade: 0     
            }
        ]
    },

    {
        titulo: "Por fim, sua sobremesa", 
        produtos: [
            { 
                imagem: [ "assets/pudim.png", 
                "Pudim"
            ],
                nomeSobremesa: "Pudim",
                descricaoSobremesa: "Pudim Tradicional",
                valorSobremesa: "R$ 7,90",
                id: 7,
                quantidade: 0    
    
            },
            { 
                imagem: [ "assets/tiramisu.jpg", 
                "Pedaço de Tiramisu"
            ],
                nomeSobremesa: "Tiramisu",
                descricaoSobremesa: "Tiramisu Italiano",
                valorSobremesa: "R$ 10,90",
                id: 8,
                quantidade: 0 
    
            },
            { 
                imagem: [ "assets/morango.jpg", 
                "Mousse de morango"
    
            ],
                nomeSobremesa: "Mousse",
                descricaoSobremesa: "Mousse de morango",
                valorSobremesa: "R$ 5,90",
                id: 9,
                quantidade: 0     
            },
        ]
    }
]


