import { useParams } from "react-router-dom";
import ItemForm from "../../Components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem (){
    const { getItem } = useStock()
    const { id } = useParams()
  
    const item = getItem(id)
    return (
        <>
        <h2>atualizar item - {item.name}</h2>
        <ItemForm itemToUpdate={item}/>
        </>
    )
}