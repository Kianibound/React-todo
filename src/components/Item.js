import React, { useState } from 'react'
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'
import { RiCloseCircleFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Item = ({ itemTitle, removeItem, id, showAlert }) => {
  const [itemDone, setItemDone] = useState(false)
  const [remove, setRemove] = useState(false)
  const handleDone = () => {
    setItemDone(true)
    showAlert(true, 'success', 'Great!')
  }
  const handleRemove = () => {
    removeItem(id)
    setRemove(true)
    showAlert(true, 'success', 'Item Removed!')
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.5, ease: [0.075, 0.82, 0.165, 1] }}
      className={
        itemDone
          ? 'w-full py-4 border-blue-800 border-b-2 flex justify-between items-center bg-green-300'
          : 'w-full py-4 border-blue-800 border-b-2 flex justify-between items-center'
      }
    >
      <div className='h-auto'>
        <h3
          className={
            itemDone
              ? 'break-all line-through text-base md:text-lg xl:text-xl ml-4 '
              : 'break-all text-lg xl:text-xl ml-4'
          }
        >
          {itemTitle}
        </h3>
      </div>
      <div className='flex w-1/4 justify-evenly px-2 items-center'>
        <button onClick={handleDone}>
          {!itemDone ? (
            <BsCheckCircle className='text-green-600 shadow-xl md:text-2xl xl:text-3xl text-xl' />
          ) : (
            <BsCheckCircleFill className='text-green-600 shadow-xl md:text-2xl xl:text-3xl text-xl' />
          )}
        </button>
        <button onClick={handleRemove}>
          <i className='bg-red-500 text-2xl md:text-3xl xl:text-4xl text-red-700'>
            <RiCloseCircleFill />
          </i>
        </button>
      </div>
    </motion.div>
  )
}

export default Item
