import styles from "./Job.module.scss";
import Test from "assets/images/test.png";
import Location from "assets/images/location.svg";
import Star from "assets/images/star.svg";
import bookMarks from "assets/images/bookmark.svg";
import { Data } from "type";
//{id, name, email, phone, title, salary, address, benefits, location, pictures, createdAt, updatedAt, desciption, employment_type}: Data

export const Job = ({id, name, email, phone, title, salary, address, benefits, location, pictures, createdAt, updatedAt, desciption, employment_type}: Data) =>{
	return (
		<li className={styles.job}>
			<img src={pictures[0]} className={styles.img} alt="avatar"/>
			<div className={styles.row}>
				<div className={styles.item}>
					<div className={styles.info__container}>
						<h1 className={styles.title}>{title}</h1>
						<div className={styles.benefits}>
							{
								benefits.map(benefit => <span key={benefit} className={styles.thin_text}>{benefit}</span>)
							}
						</div>
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
						<span className={styles.thin_text}>Posted 2 days ago</span>
					</div>
				</div>
			</div>
		</li>
	)
}