import Alert from './components/Alert'
import React, { useState, useEffect } from 'react'
import ItemList from './components/ItemList'

//function of adding item to local storage in string type
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}
function App() {
  const [inputValue, setInputValue] = useState('')
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })
  const [items, setItmes] = useState(getLocalStorage())

  //function for handling form submit. it Prevents default function of submit and then add items to the list of items
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) {
      showAlert(true, 'danger', 'Please Add Something')
    } else {
      showAlert(true, 'success', 'Item Added!')
      const newItem = {
        id: new Date().getTime().toString(),
        itemTitle: inputValue,
      }
      setItmes([...items, newItem])
      setInputValue('')
    }
  }

  // function for removing an item (by its id)
  const removeItem = (id) => {
    setItmes(items.filter((item) => item.id !== id))
    showAlert(true, 'success', 'Item Removed')
  }

  // function for when whant to clear all list of items
  const clearList = () => {
    setItmes([])
    showAlert(true, 'success', 'List Cleared')
  }
  //adding items to local storage whenever items rerendered
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items))
  }, [items])

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  return (
    <main className='w-full h-screen'>
      <header className='w-full bg-light-hero flex flex-col justify-evenly items-center h-60 xl:h-64 bg-cover object-cover '>
        <h1 className='font-serif text-5xl xl:text-6xl text-center  text-white'>
          Todo:
        </h1>
        <form
          className='w-3/4 xl:w-7/12 shadow-lg h-12 flex justify-between px-1 items-center bg-white rounded-lg'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            value={inputValue}
            className='w-11/12  h-full focus:outline-none'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            className='w-4/12 sm:w-2/12 xl:py-2 xl:text-lg xl:w-1/12 shadow-xl py-2 px-1 text-sm font-bold bg-green-400 rounded-md'
          >
            Add
          </button>
        </form>
      </header>
      <section className='w-full flex flex-col flex-shrink items-center'>
        <div className='w-full h-24 flex justify-center'>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} items={items} />
          )}
        </div>
        <div className='w-full rounded-lg flex flex-col items-center h-screen'>
          <ItemList
            items={items}
            clearList={clearList}
            removeItem={removeItem}
            showAlert={showAlert}
          />
        </div>
      </section>
    </main>
  )
}

export default App
