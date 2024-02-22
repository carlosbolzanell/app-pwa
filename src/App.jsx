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
  const [quantidade, setQuantidade] = useState("");
  let clean = false;

  useEffect(() => {
    saveList();
  }, [list]);

  function onClean(){
    
  }

  const saveList = () => {
    const newList = [...list];
    localStorage.setItem('list', JSON.stringify(newList));
    onClean();
  }

  const addList = () => {
    if (nome === "" || quantidade == "") return;
    let newList = [...list];
    let newItem ={
      "nome": nome,
      "quantidade": quantidade
    }
    newList.push(newItem);
    setList(newList);   
  }
  const showList = useMemo(() => {
    return (list.map((item, index) => ( <Item nomeProduto={item.nome} quantidade={item.quantidade} excluir={setList} indexItem={index}/>)))
  }, [list]);

  return (
    <div className='flex justify-center flex-col mt-10 gap-5'>
      <div className='flex flex-row items-end gap-3'>
        <InputText valorPassado={setNome} onClean={onClean}/>
        <InputQtd valorQuantidade={setQuantidade} />
        <button className='border bg-verde w-36 h-8 rounded' onClick={addList}>Adicionar</button>
      </div>
      <div>
        {showList}
      </div>
    </div>
  )
}

export default App
