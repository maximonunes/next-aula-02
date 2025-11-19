"use Client"

import { useState } from "react";

export default function Like(){

    const [valor , setValor] = useState(0);

    function incrementar(){

        const novoValor = valor + 1;

        if( novoValor % 5 === 0){
            alert("O valor é múltiplo de 5!");
        }
    }

    function decrementar(){

        const novoValor = valor - 1;
        
        if(novoValor % 5 === 0){
            alert("O valor é múltiplo de 5!");
        }

    }

    return(
        <div>
            <button onClick = {incrementar}>+</button>
            <button onClick = {decrementar}>-</button>
        </div>
    );
}