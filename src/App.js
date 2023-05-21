import './App.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import Nav from './HandsOn/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './HandsOn/Home';
import Student from './HandsOn/Student';
import Contact from './HandsOn/Contact';
import Store from './HandsOn/Store';
import { store } from './HandsOn/Store';
import { AddData } from './HandsOn/AddData';
import { Updatedata } from './HandsOn/Updatedata';


function App() {
  const[data,setdata]=useState([{
    Name:'MOHD ARIF',
    Age:'22',
    Batch:'EA21',
    
   Course:'MERN'
  },
  {
    Name:'MOHD ARIF',
    Age:'22',
    Batch:'EA21',
   Course:'MERN'
  },
  {
    Name:'MOHD ARIF',
    Age:'22',
    Batch:'EA21',
   Course:'MERN'
  },
  {
    Name:'MOHD ARIF',
    Age:'22',
    Batch:'EA21',
   Course:'MERN'
  },
  {
    Name:'MOHD ARIF',
    Age:'22',
    Batch:'EA21',
   Course:'MERN'
  }])
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/student' element={
          <store.Provider value={{entries:data,entriesFun:setdata}}>
            <Student data={data}/>
          </store.Provider>
         }/>
    
         
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/adddata' element={
          <store.Provider value={{entries:data,entriesFun:setdata}}>
            <AddData />
          </store.Provider>
         }/>
         <Route path='/updatedata' element={
          <store.Provider value={{entries:data,entriesFun:setdata}}>
            <Updatedata/>
          </store.Provider>
         }/>
      
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
