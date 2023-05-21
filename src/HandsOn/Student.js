import React, { useContext }  from "react";
import Nav from "./Nav";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { store } from "./Store";
import { AddData } from "./AddData";

function Student(props){
    const Data=useContext(store)
    // console.log("this is props1",props);
    // console.log("this is Data",Data);
    
    return(
        <>
        <Nav/>
        <div className="student_btn">
            <span>Student Details</span>
            
            <button className="btn"><Link to='/adddata'>Add New Student</Link></button>
        </div>
      
         
        <table className="Table">
            <thead> 
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Batch</th>
                    <th>Course</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
            
               {Data.entries.map((item,index)=>{return(
               <tr key={index}> 
              <td>{item.Name}</td>
               <td>{item.Age}</td>
               <td>{item.Batch}</td>
                <td>{item.Course}</td>
               <td><Link to='/updatedata' state={{data:index}}>Edit</Link></td>
               </tr> )})}
              
            </tbody>
        </table>
        </>
    )
}

export default Student;