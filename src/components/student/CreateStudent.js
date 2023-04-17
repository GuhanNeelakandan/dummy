import React, { useState } from 'react'
import  toast, { Toaster }  from 'react-hot-toast'

function CreateStudent() {
    const[student,setStudent]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
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

    const handleSubmit =()=>{
        if(student.firstname===""){
            toast.error('Enter your FirstName',toastoption)
            return;
        }else if(student.firstname.length<3){
            toast.error('Enter Atleast 4 words',toastoption)
            return;
        }
        if(student.lastname===""){
            toast.error('Enter your lastname',toastoption)
            return;
        }else if(student.lastname.length<3){
            toast.error('Enter Atleast 4 words',toastoption)
            return;
        }
        if(student.email===""){
            toast.error('Enter your email',toastoption)
            return;
        }
        if(student.password===""){
            toast.error('Enter your password',toastoption)
            return;
        }else if(student.password.length<8){
            toast.error('Enter 8 digit password',toastoption)
            return;
        }
        console.log(student)
    }
    return (
        <div className='container'>
            <h1>Create Student</h1>
            <div className='row  mt-4'>
                
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder='First Name' onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder='Last Name' onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder='Email' onChange={(e)=>handleChange(e)} required/>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder='Password' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                
            </div>
            <button className=' btn btn-sm btn-primary' onClick={handleSubmit}>Submit</button>
            <Toaster/>
        </div>
    )
}

export default CreateStudent