export default function Produto ({titulo}){

    return (
        //almocos
          <>
    
              {almocos.map((almoco) => 
                  ( <Almoco almoco={almoco} AlmocoPedido={AlmocoPedido} setAlmocoPedido={setAlmocoPedido}/>))}

        {/* almoco */}

          <div className = {Class} onClick={() => SelecionarSobremesa()}>
                <img src={img} alt={alt} className="imagens"/>
                <p className="nome_sobremesa roboto">{nomeSobremesa}</p>
                <p className="descrição adoçar roboto">{descricaoSobremesa}</p>
                <p className="valor_sobremesa dessert roboto">{valorSobremesa}</p>
                <Contador clas={Class} setClass={setClass} SobremesaPedido={SobremesaPedido} setSobremesaPedido={setSobremesaPedido} 
                Sobremesa={Sobremesa} setSobremesa={setSobremesa} precoSobremesa = {precoSobremesa} setPrecoSobremesa = {setPrecoSobremesa}/> 
                <Footer Sobremesa={Sobremesa} />                 
            </div> 
          </>
  )
}