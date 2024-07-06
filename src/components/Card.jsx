import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';

function Card({data,reference}) {
  return (
    <>
        {/* *{making cards}* */}
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 200}} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-black/30 text-white px-5 py-10 overflow-hidden'>
            {/* card consist of icon, text,footer,data,tag */}
            <FaRegFileAlt/>
            <p className='text-xs mt-5 font-semibold leading-tight'>
              {data.desc} 
            </p>
            <div className='footeer absolute bottom-0 w-full h-20 left-0'>
              <div className='flex items-center justify-between px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 mb-3 bg-sky-300 rounded-full flex items-center justify-center'>
                  {data.close ? 
                    <IoIosClose size=".7em" color='#fff'/> : 
                    <LuDownload size=".7em" color='#fff'/>}
                </span>
              </div>
              
            </div>
        </motion.div>
    </>
  )
}

export default Card