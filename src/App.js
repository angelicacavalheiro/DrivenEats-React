import React, { useState } from "react";
import Topo from "./Topo"
import Almocos from "./Almocos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
import Footer from "./Footer"

export default function App(){

    const [AlmocoPedido, setAlmocoPedido] = useState(0);
    const [BebidaPedido, setBebidaPedido] = useState(0);
    const [SobremesaPedido, setSobremesaPedido] = useState(0);

    return (
        <>
            <Topo />
            <Almocos AlmocoPedido={AlmocoPedido} setAlmocoPedido={setAlmocoPedido} />
            <Bebidas BebidaPedido={BebidaPedido} setBebidaPedido={setBebidaPedido}/>
            <Sobremesas SobremesaPedido={SobremesaPedido} setSobremesaPedido={setSobremesaPedido}/>
            <Footer AlmocoPedido={AlmocoPedido} BebidaPedido={BebidaPedido} SobremesaPedido={SobremesaPedido} />
        </>
    )
}


