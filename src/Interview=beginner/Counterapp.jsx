import React, { useState } from 'react'

const Counterapp = () => {
    const [counter, setcounter] = useState(0)


    const increment = () =>{
        setcounter(counter  + 1)
    }

    const Decremnt = () =>{
        if (counter > 0) {
            setcounter(counter  - 1)
            
        }else{
            alert("your logic incoorect")
        }``
    }

    const reset = () =>{
        setcounter(0)

    }
  return (
    <div className='h-screen  flex items-center justify-center w-full'>
      
<div className='h-[40vh] flex gap-5 items-center justify-center flex-col w-full '>
    <h3 className='text-9xl'>{counter}</h3>
    <div className='flex items-center justify-center gap-3'>
    <button className='py-2 px-5 bg-black text-white rounded-full' onClick={()=>{
        increment(counter)
    }}>increment</button>
    <button  onClick={()=>{
        Decremnt(counter)
    }} className='py-2 px-5 bg-black text-white rounded-full'>Decrement</button>
        <button  onClick={()=>{
        reset(counter)
    }} className='py-2 px-5 bg-black text-white rounded-full'>Reset</button>
    </div>
    
</div>

    </div>
  )
}

export default Counterapp
