//instruments
import {useEffect, useState} from "react";
import {Datas} from "type";
//Components
import {Job} from "components/Job/Job";
export const JobList = () =>{
	const [jobs , setJobs] = useState<Datas>();
	useEffect( () =>{
		const loadJobs = async () =>{
			const response =  await fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
			const data: Datas = await response.json();
			setJobs(data);
		}
		loadJobs();
	}, [])
	console.log(jobs);
	return (
		<main className="main">
			<div className="max-w-[1440px] mx-auto p-2.5">
				<ul>
					{
						jobs ? jobs.map(job => <Job key={job.id} {...job}/>) : null
					}
				</ul>
			</div>
		</main>
	)
}