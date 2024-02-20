import { useState, useEffect } from 'react'
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

  useEffect(() => {
    saveList();
  }, [list]);

  const saveList = () => {
    const newList = [...list];
    localStorage.setItem('list', JSON.stringify(newList));
  }

  const addList = () => {
    if(nome === "" || quantidade == "") return;
    let newList = [[...list], <Item nomeProduto={nome} quantidade={quantidade}/>] ;
    setList(newList); 
  }

  return (
    <div className='flex justify-center flex-col mt-10 gap-5'>
      <div className='flex flex-row items-end gap-3'>
        <InputText valorPassado={setNome} />
        <InputQtd valorQuantidade={setQuantidade} />
        <button className='border bg-verde w-36 h-8 rounded' onClick={addList}>Adicionar</button>
      </div>
      <Item nomeProduto="Bla" quantidade="2" />
    </div>
  )
}

export default App
