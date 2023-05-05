import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewStudent() {
    let params =useParams()
    const[student,setStudent]=useState({})
    console.log(params.id);

    const fetchstudentDetail=async()=>{
        const res =await axios.get(`https://63dcfc67df83d549ce97ef20.mockapi.io/student/${params.id}`)
        
        setStudent(res.data)
    }

    useEffect(()=>{
        fetchstudentDetail()
    },[])

    
  return (
    <div className='container'>
        <div class="card" style={{width: "18rem"}}>
  <img src={student.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{student.name}</h5>
    <h5>Age : {student.age}</h5>
    <h5>Roll : {student.roll}</h5>
    <h5>Place : {student.place}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default ViewStudent