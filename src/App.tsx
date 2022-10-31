import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
//Components
import { JobList } from 'pages/JobList';
import { DetailsJobPage } from 'pages/DeteilsJobPage';
function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<JobList/>}/>
      <Route path='/details' element={<DetailsJobPage/>}/>
    </Routes>
   </>
  );
}

export default App;
