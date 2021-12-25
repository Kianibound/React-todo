import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Alert = ({ type, msg, removeAlert, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [items])
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-8/12 xl:w-1/4 xl:h-18 h-16 text-center invisble rounded-full rounded-t-none ${
        type === 'success'
          ? ' bg-green-400 flex justify-center items-center'
          : ' bg-red-600 flex justify-center items-center'
      }`}
    >
      <p className='text-sm xl:text-lg font-bold'>{msg}</p>
    </motion.div>
  )
}

export default Alert
