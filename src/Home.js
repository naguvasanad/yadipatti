import React from 'react'
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const Home = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:8080/students")
      .then(Response => Response.json())
      .then(data=>setData(data))
    },[])

    const handleDelete = (item) =>{
       fetch("http://localhost:8080/deleteStudent",
       {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          item
    })
       }
       ).then(res=>res.json())
       .then(json=>console.log(json))
       .catch(err=>console.log(err))
    }
  
    return (
      <div >
 
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>last name</td>
            </tr>
  
          </thead>
          <tbody>
            {data.map((item,key)=>{
              return (
                <tr key={key}>
                   <td>{item.name}</td>
                   <td>{item.lname}</td>
                   <td><button onClick={()=>handleDelete(item)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
  
      </div>
    );
  }
  


export default Home
