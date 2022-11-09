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
import { LabelMap } from "components/labelMap/LabelMap";
import { Caption } from "components/caption/Caption";


interface DetailsPageProps{
	job: JobItem | null
}

const defaultCenter = {
	lat: 44,
	lng:55 
}

export const DetailsJobPage = ({job}: DetailsPageProps) =>{
	const testCenter = {
		lat: 48.2219, 
		long: 16.3511
	}
	return(
		<div className={styles.detailsContainer}>
			{
				!job && <img src={Preload} alt="preload" className={styles.preload}  />
			}
			{
				job && <div className={styles.row}>
					<div className={styles.info}>
						<DetailsTop/>
						<div className="mt-10 hidden lg:block">
							<Button title="apply now"/>
						</div>
						<div className="mt-8">
							<DetailsTitle tilte={job.title} salary={job.salary} createdAt={job.createdAt}/>
						</div>
						<div className="mt-[26px] lg:mt-[43px]">
							<DetailsDescription description={job.description}/>
						</div>
						<div className="mt-8 flex justify-center lg:block">
							<Button title="Apply now"/>
						</div>
						<div className={styles.additionalInfoBox}>
							<div className="mt-[63px] lg:mt-[86px]">
								<Caption text="Addition info"/>
								<DetailsAdditionalInfo list={job.employment_type} theme={"blue"} title={"Employment type"}/>
								<div className="mt-[22px]">
								<DetailsAdditionalInfo list={job.benefits} theme={"yellow"} title={"Benefists"}/>
								</div>
							</div>
							<div className="mt-[135px] lg:mt-[87px]">
								<Caption text="Attached images"/>
								<DetailsImages pictures={job.pictures}/>
							</div>
						</div>
						<div className="mt-[95px]">
							<Link to="/" className={styles.btnBack}>
							<img src={Arrow} alt="arrow" className={styles.arrowRoute} />
							 <p className={styles.textRoute}>RETURN TO JOB BOARD</p>
							</Link>
						</div>
					</div>
					<h2 className={styles.titleMap}>Contacts</h2>
					<div className={styles.map}>
						<LabelMap name={job.name} addres={job.address} email={job.email} phone={job.phone}/>
						<Map location={testCenter}/>
					</div>
				</div>
			}
		</div>
	)
}