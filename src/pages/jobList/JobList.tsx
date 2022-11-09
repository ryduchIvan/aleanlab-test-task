import styles from "./JobList.module.scss";
//Components
import {Job} from "components/Job/Job";
//Types
import {Jobs} from "type";
//Images
import Preload from "assets/images/preload.svg";

interface JobListProps {
	jobs: Jobs,
	getJobId: (id:string) => void
}

export const JobList = ({jobs, getJobId}: JobListProps) =>{

	return(
		<main className={styles.main}>
		{
		jobs.length < 1 && <img src={Preload} alt="preload" className={styles.preload} />
		}
		{
		jobs && 
				<div className={styles.jobList}>
					<ul>
						{
							jobs ? jobs.map(job => <Job key={job.id} job={job} getJobId={getJobId}/>) : null
						}
					</ul>
				</div>
		}
		</main>
	)
}