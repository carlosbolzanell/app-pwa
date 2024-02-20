import { useEffect, useState } from "react"

export default function InputText ({valorPassado}){
    const [nome, setNome] = useState("");

    useEffect(()=>{
        valorPassado(nome)
    })

    const inputValue = (event)=>{
        setNome(event.target.value);
    }
    return(
        <div>
            <p className="font-montserrat text-xl text-cinza-escuro">Nome do Produto</p>
            <input type="text" value={nome} onChange={inputValue} placeholder="Digite o Nome do Produto" className="border border-black rounded py-0.5 w-96 pl-1 focus:outline-0 bg-fundo border-verde border-1 text-cinza-claro"/>
        </div>
    )
}