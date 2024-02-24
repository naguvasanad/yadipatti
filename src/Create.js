import React, { useState } from 'react'

const Create = () => {

    const [fname,setName] = useState();
    const [lname,setLname] = useState();

    const handleClick = () =>{
        fetch("http://localhost:8080/createStudent",

        {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name: fname,
                lname: lname
            })
        }
        ).then(res => res.json())
        .then(json=>console.log(json))
        .catch(err=>console.log(err))
    }

   

  return (
    <div>
       
        
      <input type='text' placeholder='name' value={fname} onChange={ (e) =>setName(e.target.value)}/> <br/>
      <input type='text' placeholder='lname' value={lname} onChange={(e) =>setLname(e.target.value)}/> <br/>
      <button onClick={handleClick}>Create</button>
      
    
    </div>
  )
}

export default Create
