import React, { useContext } from "react";
import { AddData } from "./AddData";
import { store } from "./Store";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Updatedata(){
    const Data3=useContext(store)
    console.log(Data3.entries[0].Name);
    const navigate=useNavigate()
    const index=useLocation().state.data
    const index1=useLocation().state
    const index2=useLocation().state.data
    console.log("index1",index1,index2);
    console.log("location",index)
    const Updateobj={
        
            Name:Data3.entries[index].Name,
            Age:Data3.entries[index].Age,
            Batch:Data3.entries[index].Batch,
            Course:Data3.entries[index].Course
          
    }
    
    
    // console.log("Data3",Data3);

    const handleupdate=()=>{
        Data3.entries[index]=Updateobj
      console.log("this is  3",Data3.entries)
    }
   const  handleInput=(event)=>{

       Updateobj[event.target.name] = event.target.value;

    }




    const handlecancel=()=>{
      navigate("/student")
    }
    

    return(
        <>
          <Nav/>
         <form>
            <input type="text" id="fname" name="Name" placeholder="Name" onChange={handleInput} required={true} />
            <input type="text" id="fname" name="Age" placeholder="Age"  onChange={handleInput} required/>
            <br></br>
            <input type="text" id="fname" name="Course" placeholder="Course"  onChange={handleInput} required/>
            <input type="text" id="fname" name="Batch" placeholder="Batch"  onChange={handleInput} required/>
           
            <br></br>
            <Link to='/Student'><button type="submit" className="btnsubmit" onClick={handleupdate}>Update</button></Link>
            <button type="submit" className="btncancel" onClick={handlecancel}>Cancel</button>
          
            </form>
        </>
    )
}