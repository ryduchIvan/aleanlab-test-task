//Images
import share from "assets/images/share.svg";
//CSS
import styles from "./DetailsTop.module.scss";

export const DetailsTop = () =>{
	return (
		<section className={styles.row}>
			<h1 className={styles.title}>Job Details</h1>
			<div className={styles.options}>
				<div className={styles.option}>
					<div className={`${styles.icon} ${styles.iconList}`}></div>
					<p className={styles.subtitle}>Save to my list</p>
				</div>
				<div className={styles.option}>
					<img src={share} alt="share" className={styles.icon}/>
					<p className={styles.subtitle}>Share</p>
				</div>
			</div>
		</section>
	)
}