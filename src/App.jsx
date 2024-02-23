import { useState, useEffect, useMemo } from 'react'
import InputText from './components/InputText'
import InputQtd from './components/InputQtd'
import Item from './components/Item'
import './App.css'

const loadList = () => {
  const itens = localStorage.getItem('list');
  return JSON.parse(itens);
}

function App() {
  const [list, setList] = useState(loadList() ? loadList() : []);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    saveList();
  }, [list]);

  const saveList = () => {
    const newList = [...list];
    localStorage.setItem('list', JSON.stringify(newList));
  }

  const addList = () => {
    if (nome === "" || quantidade == "") return;
    let newList = [...list];
    let newItem = {
      "nome": nome,
      "quantidade": quantidade
    }
    newList.push(newItem);
    setList(newList);
    setNome("");
    setQuantidade(0);
  }
  const showList = useMemo(() => {
    return (list.map((item, index) => (<Item nomeProduto={item.nome} quantidade={item.quantidade} excluir={setList} indexItem={index} />)))
  }, [list]);

  return (
    <div className='flex justify-center flex-col mt-10 gap-5 px-11'>
      <h1 className="font-montserrat text-cinza-escuro text-xl font-semibold">👋Bem vindo!</h1>
      <div className='border-t border-linha w-[100%] m-auto'></div>
      <h1 className="font-montserrat text-cinza-escuro text-xl font-semibold">Adicione um produto a lista</h1>
      <div className='flex flex-col gap-3'>
        <div>
          <InputText valorPassado={setNome} value={nome} />
        </div>
        <div className='flex flex-row justify-between items-end'>
          <InputQtd valorQuantidade={setQuantidade} value={quantidade} />
          <button className='border bg-verde w-28 h-8 rounded' onClick={addList}>Adicionar</button>
        </div>
      </div>
      <div>
        <div className='border-t border-linha w-[100%] m-auto mt-3'></div>
        <h1 className="font-montserrat text-cinza-escuro text-xl font-semibold mt-5">Sua lista de compras</h1>
        <div>
          <p>Status</p>
          <p>Nome do produto</p>
          <p>Quantidade</p>
          <p>Remover</p>
        </div>
        {showList}
      </div>
    </div>
  )
}

export default App
