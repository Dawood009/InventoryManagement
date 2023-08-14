import { Modal } from "./Modal";
import {} from '../pages/Home'





export const Button = ({id,add,remove,setAdded}) => {

    const plusQuantity=()=>{
        setAdded(id)
    
        add(true)
    
    }
    const subQuantity=()=>{
        setAdded(id)
    
        remove(true)
    
    }

    

    return (
        <div className="buttons">
            <button onClick={plusQuantity} >+</button>

            <button onClick={subQuantity}>-</button>
        </div>
    );




}