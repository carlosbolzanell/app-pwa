import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item({ nomeProduto, quantidade, excluir, indexItem, checked}) {
    const removeItem = () => {
        let listJson = localStorage.getItem('list');
        let newList = JSON.parse(listJson);
        newList.splice(indexItem, 1);
        excluir(newList);
    }
    return (
        <div className="border border-verde rounded flex flex-row justify-between items-center w-[100%] p-2 my-4">
            <div className='w-[20%] flex justify-start items-center'> <input type="checkbox" checked={checked} /> </div>
            <div className='w-[30%] flex justify-center items-center'> <p className='text- font-montserrat'>{nomeProduto}</p> </div>
            <div className='w-[30%] flex justify-center items-center'> <p className='text- font-montserrat'>{quantidade}</p> </div>
            <div className='w-[20%] flex justify-end items-center'>
                <button onClick={removeItem}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

        </div>
    )
}