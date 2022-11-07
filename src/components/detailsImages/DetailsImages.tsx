import styles from "./DetailsImages.module.scss";
interface DetailsImagesProps {
	pictures: string[]
}
export const DetailsImages = ({pictures}: DetailsImagesProps) =>{
	return(
		<section>
			<h2 className={styles.title}>Attached images</h2>
			<ul className={styles.row}>
				{
					pictures.map((picture, index) => <li key={index} className={styles.col}>
						<img src={picture} alt="additional img" className={styles.img} />
					</li>)
				}
			</ul>
		</section>
	)
}