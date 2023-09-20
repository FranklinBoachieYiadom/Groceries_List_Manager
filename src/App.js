import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
/* import Practice from './Practice'; */
import {useState} from 'react'


function App() {
  const [items, setItems]=useState(JSON.parse(localStorage.getItem('shopping list')))

  const[newItem,setNewItem]= useState('')

  const[search,setSearch]=useState('')

  const setAndSaveItems=(newItems)=>{
    setItems(newItems);
    localStorage.setItem("shopping list", JSON.stringify(newItems))
  }

  const addItem=(item)=>{
    const id=items.length ? items[items.length - 1].id +1: 1;
    const myNewItem= {id,checked:false,item};
    const listItems=[...items, myNewItem]
    setAndSaveItems(listItems);
  }
  
  const handleCheck=(id)=>{
    const listItems= items.map((item)=>item.id===id ? {...item,
    checked:!item.checked} :item);
    setAndSaveItems(listItems);
  }

  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id !== id)
    setAndSaveItems(listItems);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
    <Header title="Groceries List"/>
    <SearchItem 
    search={search}
    setSearch={setSearch}
    />
   {/*  <Practice /> */}
    <AddItem 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <Content 
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
     />
    
    <Footer length={items.length}/>
    </div>
    
  );
}

export default App;