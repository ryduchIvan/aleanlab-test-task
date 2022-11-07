import styles from "./DetailsDescription.module.scss";
interface DetailsDescriptionProps {
	description: string
}

export const DetailsDescription = ({description}: DetailsDescriptionProps) =>{
	const trimmedString = description.split("\n");
	const compensationAndBenefits = trimmedString[7].split(".").splice(0, trimmedString[7].split(".").length-1);

	return (
		<div className={styles.description}>
			<p className={styles.text}>{trimmedString[1]}</p>
			<p className={`${styles.text} ${styles.bold}`}>{trimmedString[3]}</p>
			<p className={styles.text}>{trimmedString[4]}</p>
			<p className={`${styles.text} ${styles.bold}`} >{trimmedString[6]}</p>
			<p className="mt-3">Our physicians enjoy a wide range of benefits, including:</p>
			{
				<ul>
					{
						compensationAndBenefits.map(item =><li key={item} className={styles.benefit}>{item}</li>)
					}
				</ul>
			}
		</div>
	)
}