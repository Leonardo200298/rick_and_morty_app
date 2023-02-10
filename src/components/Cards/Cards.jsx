import React from 'react'

export default function Cards({key,name,img,specie}) {
  return (
    
        <div key={key}>
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <p>{specie}</p>
         </div> 
    
  )
}
