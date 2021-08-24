export default function Bebida(){
    return (
        <>
        <div class = "titulo_bebida righteous"> <p>Agora, sua bebida</p> </div>
            <div class="conteiner_bebida">
                <div class="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Coquinha gelada', 4.90)">
                    <img src="assets/coca.png" alt="Figura bebidas" class="imagens"/>
                    <p class="nome_bebida roboto">Coquinha gelada</p>
                    <p class="descrição beber roboto">Lata 350ml</p>
                    <p class="valor_bebida drink roboto">R$4,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>
                
                <div class="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Pepsi gelada', 4.50)">
                    <img src="assets/pepsi.jpg" alt="Figura bebidas" class="imagens"/>
                    <p class="nome_bebida roboto">Pepsi gelada</p>
                    <p class="descrição beber roboto">Lata 350ml</p>
                    <p class="valor_bebida drink roboto">R$4,50</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>

                <div class="caixinha_bebida escondido" onclick="selecionarBebida(this, 'Fanta gelada', 4.50)">
                    <img src="assets/fanta.jpg" alt="Figura bebidas" class="imagens"/>
                    <p class="nome_bebida roboto">Fanta gelada</p>
                    <p class="descrição beber roboto">Lata 350ml</p>
                    <p class="valor_bebida drink roboto">R$4,50</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>      
            </div>
        </>
    )
}