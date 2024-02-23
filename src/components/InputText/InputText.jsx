export default function InputText({valorPassado, value}) {

  return (
    <div>
      <p className="font-montserrat text-cinza-escuro text-lg">Nome do Produto</p>
      <input
        id="inputText"
        type="text"
        value={value}
        onChange={(event)=>{valorPassado(event.target.value)}}
        placeholder="Digite o Nome do Produto"
        className="border border-black rounded py-0.5 w-[100%] pl-1 focus:outline-0 bg-fundo border-verde border-1 text-cinza-claro"
      />
    </div>
  );
}
