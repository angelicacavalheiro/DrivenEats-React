import React, { useState } from "react";
import Almoco from "./Almoco"

export default function ItemPedido() {
    const [itemPedido, setitemPedido] = useState("teste");
    
    return(
        <Almoco itemPedido={[itemPedido, setitemPedido]} />
    )
    
}