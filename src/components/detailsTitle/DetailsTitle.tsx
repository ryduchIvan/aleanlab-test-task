import styles from "./DetailsTitle.module.scss";

interface DetailsTitleProps{
	tilte: string, 
	salary: string,
	createdAt: string
}

export const DetailsTitle = ({tilte, salary, createdAt}: DetailsTitleProps) =>{
	const date = new Date(createdAt).toString().slice(0,15);

	return (
		<section>
			<div className={styles.row}>
				<h2 className={styles.title}>{tilte}</h2>
				<div>
					<p className={styles.salary}>€ {salary}</p>
					<p className={styles.salaryType}>Brutto, per year</p>
				</div>
			</div>
			<span className={styles.date}>Posted {date}</span>
		</section>
	)
}