export default function Almoco(){
    return (
            <>
            <div class = "titulo_almoço righteous"> <p>Primeiro, seu prato</p> </div> 
            <div class="conteiner_almoço">                               
                <div class="caixinha_almoço escondido" onclick="selecionarAlmoço(this, 'Frango Yin Yang', 14.90)">
                    <img src="assets/frango.png" alt="Figura Almoço" class="imagens"/>
                    <p class="nome_comida roboto">Frango Yin Yang</p>
                    <p class="descrição refeição roboto">Um pouco de batata, um pouco de salada</p>
                    <p class="valor_comida roboto">R$14,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>
                
                <div class="caixinha_almoço escondido" onclick="selecionarAlmoço(this, 'Macarrão', 15.90)">
                    <img src="assets/macarrao.jpg" alt="Figura Almoço" class="imagens"/>
                    <p class="nome_comida roboto">Macarrão</p>
                    <p class="descrição refeição roboto">Macarrão soltinho, com molho</p>
                    <p class="valor_comida roboto">R$15,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>

                <div class="caixinha_almoço escondido" onclick="selecionarAlmoço(this, 'Arroz e Feijão', 13.90)">
                    <img src="assets/arroz.jpg" alt="Figura Almoço" class="imagens"/>
                    <p class="nome_comida roboto">Arroz e Feijão</p>
                    <p class="descrição refeição roboto">Um pouco de arroz, um pouco de feijão</p>
                    <p class="valor_comida roboto">R$13,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>

            </div>
            </>
    )
}