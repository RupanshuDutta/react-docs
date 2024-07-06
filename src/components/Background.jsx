import React from 'react'

function Background() {
  return (
    <>
        <div className='w-full h-screen z-[2] fixed'>
            <div className="w-full py-10 absolute top-[5%] flex justify-center text-zinc-400 font-medium text-3xl">
                Documents.
            </div>
            <h1 className="text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-medium leading-none tracking-tighter text-zinc-700">
                Docs.
            </h1>
        </div>
    </>
  )
}

export default Background