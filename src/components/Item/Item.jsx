import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item({ nomeProduto, quantidade, excluir, indexItem}) {
    const removeItem = () => {
        let listJson = localStorage.getItem('list');
        let newList = JSON.parse(listJson);
        newList.splice(indexItem, 1);
        excluir(newList);
    }
    return (
        <div className="border border-verde rounded flex flex-row justify-between items-center w-2/4 p-2 my-4">
            <input type="checkbox"/>
            <p>{nomeProduto}</p>
            <p>{quantidade}</p>
            <button onClick={removeItem}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    )
}