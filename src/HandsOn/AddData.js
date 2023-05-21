import React, { useState } from "react";
import Nav from "./Nav";
import { store } from "./Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function AddData(props){
    const Data2=useContext(store)
    // console.log("Data2",Data2)
    const navigate=useNavigate()
    // console.log("data2",Data2)
    const [adddata,setadddata]=useState({
        Name:'',
        Age: '',
        Batch:'',
        Course:''
      }
    )
   
    console.log("this is",props);
    function handlesubmit(e){   

      console.log("hello ",adddata);
          Data2.entries.push(adddata)
          navigate("/student")
    }
    function handleInput(event){
        
        adddata[event.target.name]=event.target.value;//Doubt in this line
    }
    function handlecancel(){
        navigate('/student')
    }
    
    return(
        <>
        <Nav/>
         <form>
            <input type="text" id="fname" name="Name" placeholder="Name"  onChange={handleInput} required={true} />
            <input type="text" id="fname" name="Age" placeholder="Age"  onChange={handleInput} required/>
            <br></br>
            <input type="text" id="fname" name="Course" placeholder="Course"  onChange={handleInput} required/>
            <input type="text" id="fname" name="Batch" placeholder="Batch"  onChange={handleInput} required/>
           
            <br></br>
            <Link to='/Student'><button type="submit" className="btnsubmit" onClick={handlesubmit}>Submit</button></Link>
            <button type="submit" className="btncancel" onClick={handlecancel}>Cancel</button>
            </form>
        </>
    )
}
