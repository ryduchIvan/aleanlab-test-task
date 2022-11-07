//instruments
import {useEffect, useState} from "react";
//Components
import {Job} from "components/Job/Job";
//Types
import {Jobs} from "type";
interface JobListProps {
	jobs: Jobs,
	getJobId: (id:string) => void
}

export const JobList = ({jobs, getJobId}: JobListProps) =>{

	return (
		<main className="main bg-cover">
			<div className="max-w-[1440px] mx-auto p-2.5">
				<ul>
					{
						jobs ? jobs.map(job => <Job key={job.id} job={job} getJobId={getJobId}/>) : null
					}
				</ul>
			</div>
		</main>
	)
}