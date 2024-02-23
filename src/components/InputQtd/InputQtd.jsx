
export default function InputQtd({ valorQuantidade, value }) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-montserrat text-cinza-escuro text-lg">Quantidade</p>
            <div className="flex flex-row items-center justify-center gap-4">
                <button onClick={() => valorQuantidade(value == 0 ? 0 : value - 1)} className='bg-verde w-7 h-6 rounded'>-</button>
                <div className="border border-verde w-8 h-8 rounded flex justify-center items-center">
                    <p className="font-xl text-center" type="text" value={(value) ? value : 0} disabled>{value}</p>
                </div>
                <button onClick={() => valorQuantidade(value + 1)} className="bg-verde w-7 h-6 rounded">+</button>
            </div>
        </div>
    )
}