//CSS
import styles from "./Job.module.scss";
//Images
import Location from "assets/images/location.svg";
import Star from "assets/images/star.svg";
import bookMarks from "assets/images/bookMark.svg";
//Instrumets
import {Link} from "react-router-dom";
//Types
import { JobItem } from "type";

interface JobProps {
	job: JobItem,
	getJobId: (id: string) => void 
}

export const Job = ({job, getJobId}: JobProps) =>{
	const {id, name, email, phone, title, salary, address, benefits, location, pictures, createdAt, updatedAt, description, employment_type} = job;
	const date = new Date(createdAt).toString().slice(0,15);
	return (
		<li className={styles.job}>
			<img src={pictures[0]} className={styles.img} alt="avatar"/>
			<div className={styles.row}>
				<div className={styles.item}>
					<div className={styles.info__container}>
						<Link to="/details" className={styles.title} onClick={() =>{
							getJobId(id);
						}}>{title}</Link>
						<ul className={styles.benefits}>
							{
								benefits.map(benefit => <li key={benefit} className={`${styles.thin_text} ${styles.benefit}` }>{benefit}</li>)
							}
						</ul>
						<span className={`${styles.thin_text} ${styles.location}`}>
							<img src={Location} alt="location" className="mr-2" />
							 {address}
						</span>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.stars}>
						<img src={Star} alt="star" className={styles.star}/>
						<img src={Star} alt="star" className={styles.star}/>
						<img src={Star} alt="star" className={styles.star}/>
						<img src={Star} alt="star" className={styles.star}/>
						<img src={Star} alt="star" className={styles.star}/>
					</div>
					<div className={styles.date}>
						<img src={bookMarks} alt="bookMarks" className={styles.bookMarks} />
						<span className={styles.dateText}>{date}</span>
					</div>
				</div>
			</div>
		</li>
	)
}