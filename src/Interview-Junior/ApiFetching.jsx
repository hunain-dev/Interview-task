import axios from 'axios'
import React, { useEffect, useState } from 'react';

const ApiFetching = () => {
const [DisplayList, setDisplayList] = useState([])
const api = "https://jsonplaceholder.typicode.com/posts"
const [Loading, setLoading] = useState("")
    useEffect(() => {
        const apihandler = async () =>{
            try {
                const apiresponse = await axios.get(api)
                const apidata = apiresponse
                console.log(apidata.data)

                setDisplayList(apidata.data)
            } catch {
                alert("your api deos-not exist")
            }
            finally{

                setLoading(false)
            }

            
         
        }

        apihandler();
      
    }, [])
    

  return (
    <div className=' w-full '>


{
    Loading ?(
        <h1 className="text-white text-2xl text-center">Loading...</h1>
    ):(
            DisplayList.map((elem,index)=>{
                return(
                    <div key={index}>
                        <h1>{elem.id}</h1>
                        <h1>{elem.title}</h1>
                        <h1>{elem.body}</h1>
                    </div>
                )
            })
    )
}


      
      
    </div>
  )
}

export default ApiFetching
