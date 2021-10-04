import React, { useState } from "react";
import Topo from "./Topo"
import Almocos from "./Almocos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
import Footer from "./Footer"

export default function App(){

    function mudaQuantidade (produto, novaQuantidade){
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
        nome: "Prato",
        produtos: [
            { 
                imagem: [ "assets/frango.png", 
                "Prato com frango frito e salada"
            ],
                nome: "Frango Yin Yang",
                descricaoComida: "Um pouco de batata, um pouco de salada",
                valor: 14.90,    
                id: 1,
                quantidade: 0
    
            },
            { 
                imagem: [ "assets/macarrao.jpg", 
                "Prato com spaghetti"
            ],
                nome: "Spaghetti",
                descricaoComida: "Spaghetti ao alho e óleo",
                valor: 15.90,
                id: 2,
                quantidade: 0
    
            },
            { 
                imagem: [ "assets/arroz.jpg", 
                "Prato com arroz feijão e salada"
    
            ],
                nome: "Arroz e Feijão",
                descricaoComida: "Um pouco de arroz, um pouco de feijão",
                valor: 13.90,  
                id: 3,
                quantidade: 0   
            },
        ]
    },


    {
        titulo: "Agora, sua bebida", 
        nome: "Bebida",
        produtos: [
            { 
                imagem: [ "assets/coca.png", 
                "3 latas de coca-cola"
            ],
                nome: "Coquinha gelada",
                descricaoBebida: "Lata 350ml",
                valor: 4.90,
                id: 4,
                quantidade: 0     
    
            },
            { 
                imagem: [ "assets/pepsi.jpg", 
                "Prato com spaghetti"
            ],
                nome: "Pepsi gelada",
                descricaoBebida: "Lata 350ml",
                valor: 4.50,
                id: 5,
                quantidade: 0  
    
            },
            { 
                imagem: [ "assets/fanta.jpg", 
                "Prato com arroz feijão e salada"
    
            ],
                nome: "Fanta gelada",
                descricaoBebida: "Lata 350ml",
                valor: 4.50,
                id: 6,
                quantidade: 0     
            }
        ]
    },

    {
        titulo: "Por fim, sua sobremesa", 
        nome: "Sobremesa",
        produtos: [
            { 
                imagem: [ "assets/pudim.png", 
                "Pudim"
            ],
                nome: "Pudim",
                descricaoSobremesa: "Pudim Tradicional",
                valor: 7.90,
                id: 7,
                quantidade: 0    
    
            },
            { 
                imagem: [ "assets/tiramisu.jpg", 
                "Pedaço de Tiramisu"
            ],
                nome: "Tiramisu",
                descricaoSobremesa: "Tiramisu Italiano",
                valor: 10.90,
                id: 8,
                quantidade: 0 
    
            },
            { 
                imagem: [ "assets/morango.jpg", 
                "Mousse de morango"
    
            ],
                nome: "Mousse",
                descricaoSobremesa: "Mousse de morango",
                valor: 5.90,
                id: 9,
                quantidade: 0     
            },
        ]
    }
]


