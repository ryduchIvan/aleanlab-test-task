import { SignBoard } from "components/signBoard/SignBoard";
import styles from "./DetailsAdditionalInfo.module.scss";

interface DetailsAdditionalInfoProps{
	list: string[],
	theme: "yellow" | "blue",
	title: "Benefists" | "Employment type"
}


export const DetailsAdditionalInfo = ({title, list, theme}: DetailsAdditionalInfoProps) =>{
	return(
		<section className={styles.additionalInfo}>
			<div className={styles.info}>
				<p className={styles.subtitle}>{title}</p>
				<ul className={styles.row}>
					{list.map(item => <li key={item} className={styles.col}>
						<SignBoard title={item} theme={theme}/>
					</li>)}
				</ul>
			</div>
		</section>
	)
}