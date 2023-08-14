import "./Modal.css";
import { } from '../pages/Home'
import {} from '../App'

export function Modal({value,add,sum}) {

    return ( 
        <div className="modal-container">
        <div className="modal">
            <button onClick={()=> add(false)} className="cross" >X</button>
            <h2 >Add Quantity</h2>
            <input  onChange={value}  type="number"  />
            <button type="button" className="modal-btn" onClick={sum}>Add</button>
        </div>
        </div>
    )
    }

export const RemoveModal = ({value,remove,sub})=>{

    return ( 
        <div className="modal-container">
        <div className="modal">
            <button onClick={()=> remove(false)} className="cross" >X</button>
            <h2>Remove Quantity</h2>
            <input onChange={value} type="number"  />
            <button  type="button" className="modal-btn" onClick={sub}>Remove</button>
        </div>
        </div>
    )
}