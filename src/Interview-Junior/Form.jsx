import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const formhandler = (e) =>{
        e.preventDefault();
       
        console.log("this is your name",name)
        console.log("this is your email",email)
        if (password > 6) {
            alert("your password is not greather than 6")
            
        }else{
            alert("your password is  greather than 6")

        }
        console.log("this is your password",password)

        try {
        alert("form hass been submit")
            
        } catch{

            alert("data hasss been submit")
        }
        setname()
        setemail()
        setpassword()
    }

  return (
    <div className='h-screen w-full '>
<section className='h-full w-full '>
  <div
    className="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8"
  >
    <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
      <div className="mb-2 flex justify-center"></div>
      <h2 className="text-center text-2xl font-bold leading-tight text-black">
        Register now in account
      </h2>
 
      <form className="mt-8" method="POST" action="#" onSubmit={formhandler}>
        <div className="space-y-5">
        <div>
            <label className="text-base font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                placeholder="name"
                type="name"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                value={name}
                onChange={(e)=>{
                    setname(e.target.value)

                }}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-base font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                placeholder="Email"
                type="email"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)

                }}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-base font-medium text-gray-900">
                Password
              </label>
            
            </div>
            <div className="mt-2">
              <input
                placeholder="Password"
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)

                }}
                required
              />
            </div>
          </div>
          <div>
            <button
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Get started
            </button>
          </div>
        </div>
      </form>
 
    </div>
  </div>
</section>

    </div>
  )
}

export default Form
