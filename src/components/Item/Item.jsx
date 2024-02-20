import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item ({nomeProduto, quantidade}){
    return(
        <div className="border border-verde rounded flex flex-row justify-between items-center w-2/4">
            <input type="checkbox" />
            <p>{nomeProduto}</p>
            <p>{quantidade}</p>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    )
}