
export default function InputQtd({valorQuantidade, value}) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-montserrat text-xl text-cinza-escuro">Quantidade</p>
            <div className="flex flex-row gap-5">
                <button onClick={() => valorQuantidade(value == 0 ? 0 : value - 1)} className='border bg-verde w-7 h-6 rounded'>-</button>
                <input className="border border-verde w-7 h-8 rounded" type="text" value={(value)? value : 0} disabled/>
                <button onClick={() => valorQuantidade(value+1)} className="border bg-verde w-7 h-6 rounded">+</button>
            </div>
        </div>
    )
}