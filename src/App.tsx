//Types
import {Jobs, JobItem} from "./type";
//Hooks
import {useEffect, useState} from "react";
//Instruments
import {Route, Routes} from "react-router-dom";
//Components
import { JobList } from 'pages/jobList/JobList';
import { DetailsJobPage } from 'pages/details/DeteilsJobPage';
//url
import {url} from "api";

function App() {
  //const [jobs , setJobs] = useState<Jobs>([]);
  //const [id , setId] = useState<string>();
  //const [job, setJob] = useState<JobItem>();

	//useEffect( () =>{
	//	const loadJobs = async () =>{
	//		const response =  await fetch(url)
	//		const data: Jobs = await response.json();
	//		setJobs(data);
	//	}
	//	loadJobs();
	//}, []);

  //useEffect(() =>{
  //  setId(sessionStorage.getItem("id")?.toString());
  //  if (id) {
  //    const chosenJob = jobs.find(job => job.id === id);
  //    if (chosenJob) {
  //      setJob(chosenJob);
  //    }
  //  }
  //}, [id, jobs]);

  //const getJobId = (id: string) =>{
  //    sessionStorage.setItem("id", id);
  //    setId(id);
  //};

  return (
   <>
    <Routes>
      {/*<Route path='/t' element={<JobList jobs={jobs} getJobId={getJobId}/>}/>
      <Route path='/details' element={<DetailsJobPage job={job ? job : null}/>}/>*/}
    </Routes>
   </>
  )
}

export default App;
