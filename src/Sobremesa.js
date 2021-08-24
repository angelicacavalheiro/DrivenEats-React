export default function Sobremesa(){
    return (
        <>
        <div class = "titulo_sobremesa righteous"> <p>Por fim, sua sobremesa</p> </div>
            <div class="conteiner_sobremesa">
               
                <div class="caixinha_sobremesa escondido" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
                    <img src="assets/pudim.png" alt="Figura pudim" class="imagens"/>
                    <p class="nome_sobremesa roboto">Pudim</p>
                    <p class="descrição adoçar roboto">Delicioso pudim</p>
                    <p class="valor_sobremesa dessert roboto">R$7,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>

                <div class="caixinha_sobremesa escondido" onclick="selecionarSobremesa(this, 'Tiramisu', 10.90)">
                    <img src="assets/tiramisu.jpg" alt="Figura pudim" class="imagens"/>
                    <p class="nome_sobremesa roboto">Tiramisu</p>
                    <p class="descrição adoçar roboto">Incrível Tiramisu</p>
                    <p class="valor_sobremesa dessert roboto">R$10,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>

                <div class="caixinha_sobremesa escondido" onclick="selecionarSobremesa(this, 'Mousse', 5.90)">
                    <img src="assets/morango.jpg" alt="Figura pudim" class="imagens"/>
                    <p class="nome_sobremesa roboto">Mousse</p>
                    <p class="descrição adoçar roboto">Mousse de morango</p>
                    <p class="valor_sobremesa dessert roboto">R$5,90</p>
                    <ion-icon name="checkmark-circle" class="icone verde"></ion-icon>
                </div>          
            </div> 
            </>
    )
}