//SCSS
import styles from "./DetailsJob.module.scss";
//Images
import Preload from "assets/images/preload.svg";
import Arrow from "assets/images/arrow.svg";
//Route
import { Link } from "react-router-dom";
//Components
import { Button } from "components/button/Button";
import { DetailsTop } from "components/detailsTop/DetailsTop";
import {DetailsTitle} from "components/detailsTitle/DetailsTitle";
import { DetailsDescription } from "components/detailsDescription/DetailsDescription";
import { DetailsAdditionalInfo } from "components/detailsAdditionalInfo/DetailsAdditionalInfo";
import { DetailsImages } from "components/detailsImages/DetailsImages";
import {Map} from "components/map/Map";
//Types
import {JobItem} from "type";


interface DetailsPageProps{
	job: JobItem | null
}

const defaultCenter = {
	lat: 44,
	lng:55 
}

export const DetailsJobPage = ({job}: DetailsPageProps) =>{

	return(
		<div className={styles.detailsContainer}>
			{
				!job && <img src={Preload} alt="preload" />
			}
			{
				job && <div className={styles.row}>
					<div className={styles.info}>
						<DetailsTop/>
						<div className="mt-10">
							<Button title="apply now"/>
						</div>
						<div className="mt-8">
							<DetailsTitle tilte={job.title} salary={job.salary} createdAt={job.createdAt}/>
						</div>
						<div className="mt-3">
							<DetailsDescription description={job.description}/>
						</div>
						<div className="mt-8">
							<Button title="Apply now"/>
						</div>
						<div className="mt-[86px]">
							<DetailsAdditionalInfo benefist={job.benefits} employmentType={job.employment_type}/>
						</div>
						<div className="mt-[86px]">
							<DetailsImages pictures={job.pictures}/>
						</div>
						<div className="mt-[97px]">
							<Link to="/" className={styles.btnBack}>
							<img src={Arrow} alt="arrow" className={styles.arrowRoute} />
							 <p className={styles.textRoute}>RETURN TO JOB BOARD</p>
							</Link>
						</div>
					</div>
					<div className={styles.map}>
						<Map center={defaultCenter}/>
					</div>
				</div>
			}
		</div>
	)
}