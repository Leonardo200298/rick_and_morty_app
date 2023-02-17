import React from 'react'


export default function Paginated({setCurrentPage,charactersPerPage,charactersState}) {
  const numberPage = [];
  for (let index = 1; index < Math.ceil(charactersState/charactersPerPage); index++) {
    numberPage.push(index);
    
  }  
  return (
    <div>
         {numberPage&&numberPage.map(n =>(
                    <>
                        <button onClick={() => setCurrentPage(n)} key={n}>{n} </button>
                    </>
                ))
                }
            
    </div>
  )
}
