import { useState } from 'react'
import { Button } from '../components/Button'
import { Modal, RemoveModal } from '../components/Modal';

export const Home = ({items,setItems}) => {

  
  
  
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  
  
  
  const [newQuantity, setNewQuantity] = useState(0);
  
  
  const handleChange = (event) => {
    setNewQuantity(event.target.value)
  }

  const [added, setAdded ] = useState(null)

  const handleAdd = () => {

     setItems(items.map(itm=>{
      if(itm.id===added){
        
        return {...itm, quantity: Number(itm.quantity) + Number(newQuantity) }
        
      
      } else {
        return itm
      }
     }))        
     console.log(items[added-1])
    setAddModal(false)
    
  }

  const handleSub = () => {

    setItems(items.map(itm=>{
      if(itm.id===added){
        return {...itm,  quantity: Number(itm.quantity) - Number(newQuantity) }
        
     
      } else {
        return itm
      }
     }))        
     console.log(items[added-1])
    
    setRemoveModal(false)
    
  }

  

  
  



  return (
    <div className="table">
      
      {addModal && < Modal value={handleChange} add={setAddModal} sum={handleAdd}  items={items} />}
      {removeModal && <RemoveModal value={handleChange} remove={setRemoveModal} sub={handleSub} items={items} />}
      
      <table>
        <tbody>
        <tr className='stock-rows' >
          <th>Items</th>
          <th>Quantity</th>
          <th>Unit</th>
          <th>Actions</th>
        </tr>
        {items.map((stock,i)=>
        <tr  className='stock-rows' key={i}>
          <td>{stock.item}</td>
          <td>{stock.quantity}</td>
          <td>{stock.unit}</td>
          <td><Button add={setAddModal} remove={setRemoveModal} setAdded={setAdded} {...stock}  /></td>
        </tr>
            )}
              </tbody>
       
      </table>


    </div>
  )




}

