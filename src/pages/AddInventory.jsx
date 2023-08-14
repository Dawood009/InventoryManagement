import { useState } from 'react'
import { Home } from './Home'


export const AddInventory = ({ items , setItems}) => {



    

    const [showModal, setShowModal] = useState(false);

    const addItems = () => {
        setShowModal(true)
    }

    



    return (<div>
        {showModal && <InventoryModal closeModal={setShowModal} items={items} setItems={setItems}/>}
        <div><button className='add-item' onClick={addItems}>Add Item</button></div>
        <div className='table-wrapper'>
            <table id='item-table'>
                <thead>
                    <tr className='item-rows'>
                        <th className='sno'>S.No</th>
                        <th className='items'>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((list, i) =>
                        <tr className='item-rows' key={i}>
                            <td className='sno'>{list.id}</td>
                            <td className='items'>{list.item}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    )

}


const InventoryModal = ({ closeModal,items ,setItems}) => {

    
    const [inputItem,setInputItem] = useState("");
    const [inputQuantity,setInputQuantity] = useState(0);
    const [unit,setUnit] = useState("Kg");
    const handleItem =(event)=>{
        setInputItem(event.target.value)
    }
    const handleQuantity=(event)=>{
        setInputQuantity(event.target.value)
    }

    const handleSelect=(event)=>{
        setUnit(event.target.value)
    }

    const handleItemAdd =()=>{
        const newItem = {
            id: items.length + 1,
            item: inputItem,
            quantity: inputQuantity,
            unit: unit
        }
        setItems([...items, newItem])
        closeModal(false)
           
    }


    return (<div className='inventory-modal-container'>
        <div className='inventory-modal'>
            <button onClick={() => closeModal(false)} className='cross-btn'>X</button>
            <br />
            <form action="">
                <label ><strong>Item:</strong></label>
                <input onChange={handleItem} className='inventory-option' type="text" /><br />
                <label ><strong>Quantity:</strong></label>
                <input onChange={handleQuantity} className='inventory-option' type="number" /><br />
                <label ><strong>Unit:</strong></label>
                <select onChange={handleSelect} className='inventory-option' name="units" >
                    <option value="kg">Kg</option>
                    <option value="dozen">Dozen</option>
                    <option value="litre">Litre</option>
                </select>
                <button type='button' onClick={handleItemAdd} className='add-itm-btn' >Add</button>
            </form>
        </div>
    </div>
    )
}