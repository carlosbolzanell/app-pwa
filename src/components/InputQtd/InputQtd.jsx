import { useEffect, useState } from "react"

export default function InputQtd({valorQuantidade}) {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        valorQuantidade(number);
    })

    const changeQtd = (add) => {
        setNumber((add ? number + 1 : (number == 0 ? 0 : number - 1)));
    }

    return (
        <div className="flex flex-col items-center">
            <p className="font-montserrat text-xl text-cinza-escuro">Quantidade</p>
            <div className="flex flex-row gap-5">
                <button onClick={() => changeQtd(false)} className='border bg-verde w-7 h-6 rounded'>-</button>
                <p className="border border-verde w-7 h-8 rounded">{number}</p>
                <button onClick={() => changeQtd(true)} className="border bg-verde w-7 h-6 rounded">+</button>
            </div>
        </div>
    )
}