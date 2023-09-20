import React from 'react'
import {useState} from 'react'

const Practice=()=>{
const[items,setItems]=useState([
  {id:1,
  checked:false,
  item:'Item 1'
  },
  {id:2,
  checked:false,
  item:'Item 2'
  },
  {id:3,
  checked:false,
  item:'Item 3'
  }
])

const[num, setNum]=useState(0)

const handleIncrease=()=>{
setNum(num+1)
}
const handleDecrease=()=>{
  setNum(num-1)
}
const handleReset=()=>{
  setNum(num-num)
}


const handleCheck=(id)=>{
  const listItems= items.map((item)=>item.id===id ? {...item,
  checked:!item.checked} :item);
  setItems(listItems);
  localStorage.setItem("shopping list", JSON.stringify(listItems))
}

return(
  <main>
    <ul>
      {items.map((item)=>
      <li className='item' key={item.id}>
        <input type="checkbox" 
        onChange={()=>handleCheck(item.id)}
        checked={item.checked} />
        <label>{item.item}</label>
        <button>Delete</button>
      </li>
      )}
    </ul>

    <p>{num}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    <button onClick={handleReset}>Reset</button>

  </main>
)}
export default Practice;