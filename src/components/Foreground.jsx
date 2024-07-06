import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
  useState
  const ref = useRef(null)
  const data = [
    {desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
     filesize: ".9mb",
     close: true,
     tag: {
      isOpen : true, tagTitle: "Download now", tagColor: "green"
     },
    },
    
    {desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      filesize: ".9mb",
      close: true,
      tag: {
       isOpen : true, tagTitle: "Download now", tagColor: "green"
      },
     },
     
    {desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      filesize: ".9mb",
      close: true,
      tag: {
       isOpen : true, tagTitle: "Download now", tagColor: "green"
      },
     },
  ]
  return (
    <>
        <div ref={ref} className="fixed z-[3] w-full h-full left-0 top-o flex gap-10 flex-wrap p-5">
            {data.map((item, index) => (
              <Card key={index} data={item} reference = {ref} />
            ))}
        </div>
    </>
  )
}

export default Foreground