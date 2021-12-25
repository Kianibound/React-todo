import React from 'react'
import Item from './Item'

const ItemList = ({ items, removeItem, clearList, showAlert }) => {
  return (
    <>
      <div className='flex shadow-2xl flex-col w-3/4 xl:w-7/12 h-full mt-1 rounded-xl items-center '>
        {items.map((item) => {
          const { itemTitle, id } = item
          return (
            <Item
              itemTitle={itemTitle}
              key={id}
              id={id}
              removeItem={removeItem}
              showAlert={showAlert}
            />
          )
        })}
        {items.length > 1 && (
          <button
            onClick={() => clearList()}
            className='text-base shadow-xl xl:text-xl font-bold border-0 rounded-3xl px-4 py-2 bg-indigo-600 text-white mt-6 hover:bg-purple-400 hover:text-green-900 hover:transition hover:duration-1000 hover:ease-in'
          >
            Clear List
          </button>
        )}
      </div>
    </>
  )
}

export default ItemList
