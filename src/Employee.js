import React, { useEffect ,useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Employee() {
    const [employee,setEmployee]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setEmployee(res.data))
        .catch(err=>console.log(err));
    },[])
    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:8081/delete/${id}`)
            window.location.reload()
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div id='hello' className='bg-white'>
        <h3>EMP MANAGEMENT SYSTEM</h3>
        <div id='main' className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-90 bg-white p-3'>
            <Link to="/create" className='btn btn-success mb-2'>Add</Link>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Ename</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Dob</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.Ename}</td>
                                <td>{data.Department}</td>
                                <td>{data.Designation}</td>
                                <td>{data.Salary}</td>
                                <td>{data.Address}</td>
                                <td>{data.Dob}</td>
                                <td>{data.Age}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={e=>handleDelete(data.EID)}>Del</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Employee