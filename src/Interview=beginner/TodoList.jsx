import React, { useState } from 'react'

const TodoList = () => {
 

      const [name, setname] = useState("")
      const [Email, setEmail] = useState("")
        const [mapingsystem, setmapingsystem] = useState([])
      const handlersubmit = (e) =>{
        e.preventDefault();
        setEmail("")
        setname("")
        setmapingsystem([...mapingsystem, {name,Email}])
        console.log("name",name)
        console.log("Email",Email)
        

      }

      const editdata = (editid) =>{
        alert("make sure you can update your data???")
        const editfilterdata = mapingsystem.find((editcondtion) => editcondtion.editid === editid)
        try {
            console.log(editfilterdata,"your data hass been updated")
        } catch {
            console.log("soory brother your edit data conditon hass not be sumbited")

        }

      }

      const Deletefunctionalilt = (deletedata) =>{
        alert("are u sure data was delete??")
        const filterdata  = mapingsystem.filter((u) => u.deletedata !== deletedata)
        setmapingsystem(filterdata)
        console.log("error hass been found")


      }



  return (
    <div className='h-screen pt-10 w-full px-3 '>
        <form action="" onSubmit={handlersubmit}>
        <div className=' w-full  flex items-center gap-7 justify-start px-3'>
            <input type="text" required placeholder='enter your name' className='py-2 rounded-full px-3 border-1 border-black'
            value={name}
            onChange={(e)=>{
                setname(e.target.value)

            }}
            />
            <input type="email"  required placeholder='enter your Email'  className='py-2 rounded-full px-3 border-1 border-black'    value={Email}
            onChange={(e)=>{
                setEmail(e.target.value)

            }}
            /> 
            <button className='py-2 px-4 bg-black rounded-full cursor-pointer text-white'>Submit</button>
        </div>
        <div className="  mt-10 w-full ">
      <div className="w-full bg-white  shadow-2xl overflow-hidden">

        <table className="w-full text-left">
          <thead className=" text-gray-700">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {mapingsystem.map((items,index) => (
              <tr
                key={index}
                className=" hover:bg-gray-50 transition"
              >
                <td className="p-4 ">{items.name}</td>
                <td className="p-4 text-gray-600">{items.Email}</td>
                <td className="p-4 text-center flex items-center justify-center gap-2">
                  <button onClick={()=>{
                    editdata(mapingsystem.id)
                  }} className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-red-600 transition">
                    Edit
                  </button>
                  <button onClick={()=>{
                    Deletefunctionalilt(mapingsystem.id)
                  }} className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

        </form>

     


    </div>
  )
}

export default TodoList
