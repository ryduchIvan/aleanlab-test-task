import { SignBoard } from "components/signBoard/SignBoard";
import styles from "./DetailsAdditional.module.scss";

interface DetailsAdditionalInfoProps{
	benefist: string[],
	employmentType: string[]
}


export const DetailsAdditionalInfo = ({benefist, employmentType}: DetailsAdditionalInfoProps) =>{
	return(
		<section>
			<h2 className={styles.title}>Additianal info</h2>
			<div className={styles.info}>
				<p className={styles.subtitle}>Employment type</p>
				<ul className={styles.row}>
					{employmentType.map(item => <li key={item} className={styles.col}>
						<SignBoard title={item}/>
					</li>)}
				</ul>
			</div>
			<div className={styles.info}>
				<p className={styles.subtitle}>Benefits</p>
					<ul className={styles.row}>
						{benefist.map(item => <li key={item} className={styles.col}><SignBoard title={item} theme="yellow"/></li>)}
					</ul>
			</div>
		</section>
	)
}