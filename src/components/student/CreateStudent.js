import axios from 'axios'
import React, { useState } from 'react'
import  toast, { Toaster }  from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {
    const navigate = useNavigate()
    const[student,setStudent]=useState({
        name:"",
        age:"",
        roll:"",
        place:""
    })

    const handleChange =(e)=>{
        // console.log(e.target.id)
        // console.log(e.target.id,e.target.value)
        setStudent((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const toastoption={
        duration: 3000,
        position: 'bottom-right',
        style: {
            color: '#fff',
            background: '#000',
          },
   }

    const handleSubmit =async()=>{
        if(student.name===""){
            toast.error('Enter your FirstName',toastoption)
            return;
        }else if(student.name.length<3){
            toast.error('Enter Atleast 4 words',toastoption)
            return;
        }
        if(student.age===""){
            toast.error('Enter your Age',toastoption)
            return;
        }
        if(student.roll===""){
            toast.error('Enter your roll',toastoption)
            return;
        }
        if(student.place===""){
            toast.error('Enter your place',toastoption)
            return;
        }
        console.log(student)
        const res =await axios.post('https://63dcfc67df83d549ce97ef20.mockapi.io/student',student)
        console.log(res);
        if(res.status===201){
            toast.success("Created Successfully")
            setTimeout(()=>{
                navigate('/table')
            },3000)
            
        }
    }
    return (
        <div className='container'>
            <h1>Create Student</h1>
            <div className='row  mt-4'>
                
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder='Name' onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="age" aria-describedby="emailHelp" placeholder='Age' onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="roll" aria-describedby="emailHelp" placeholder='Roll' onChange={(e)=>handleChange(e)} required/>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="place" aria-describedby="emailHelp" placeholder='Place' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                
            </div>
            <button className=' btn btn-sm btn-primary' onClick={handleSubmit}>Submit</button>
            <Toaster/>
        </div>
    )
}

export default CreateStudent