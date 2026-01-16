import React from 'react'

const PropsDrilling = ({name,fullname,birthdate,fatehrname,goalcompany}) => {
  return (
    <div className='h-screen text-4xl w-full flex items-center justify-center flex-col '>
        <h1>hey iam {name}</h1>
        <h1>my full name is {fullname} </h1>
        <h1>my brith-date is {birthdate}</h1>
        <h1>my father name { fatehrname}</h1>
        <h1>my goal company is { goalcompany}</h1>
      
    </div>
  )
}

export default PropsDrilling
