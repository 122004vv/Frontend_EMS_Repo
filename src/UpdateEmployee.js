import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateEmployee() {
    const [name,setName]=useState('')
    const [department,setDepartment]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState('')
    const [address,setAddress]=useState('')
    const [dob,setDob]=useState('')
    const [age,setAge]=useState('')
    const {id}=useParams();
    const navigate=useNavigate();

    function handleSubmit(event){

        // event.preventDefault();
        // console.log(name, department, designation, salary, address, dob, age);
        // axios.put(process.env.API_URL+id,{name,department,designation,salary,address,dob,age})

        console.log("UPDATE DATA Loaded to Backend Succesfully")
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }
    
  return (
    <div className='f-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h3>Update Employee</h3>
                <div className='mb-2'>
                    <label htmlFor="">Employee Name*</label>
                    <input type="text" required placeholder='Name' className='form-control' onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Department*</label>
                    <input type="text" required placeholder='Department' className='form-control' onChange={e=>setDepartment(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Position*</label>
                    <input type="text" required placeholder='Designation' className='form-control' onChange={e=>setDesignation(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Salary*</label>
                    <input type="number" required max="1000000" min="10000" step="1" pattern="\d+" placeholder='Salary' className='form-control' onChange={e=>setSalary(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Address*</label>
                    <input type="text" required placeholder='Address' className='form-control' onChange={e=>setAddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Date of Birth*</label>
                    <input type="date" required placeholder='Date of Birth' className='form-control' onChange={e=>setDob(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Age*</label>
                    <input type="number" required min="21" placeholder='Age' className='form-control' onChange={e=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateEmployee