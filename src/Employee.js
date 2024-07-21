import React, { useEffect ,useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Employee() {
    const [employee,setEmployee]=useState([])
    const [emptyEmp,setEmptyEmp]=useState(true)

    // useEffect(()=>{
    //     axios.get(process.env.API_URL)
    //     .then(res=>setEmployee(res.data))
    //     .catch(err=>console.log(err));
    // },[])

    const handleDelete=(id)=>{
        try{
            // await axios.delete(process.env.API_URL`/${id}`)
            console.log(`Data with ${id} has been deleted!`)
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
                    {/*Since there will be no data from the backend to fetch and display , let it be false.*/}
                    {emptyEmp && 
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
                                    <button className='btn btn-primary' >Del</button>
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