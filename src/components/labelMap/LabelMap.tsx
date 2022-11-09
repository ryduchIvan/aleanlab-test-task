import styles from "./LabelMap.module.scss";
//Images
import SilverMarker from "assets/images/SilverMarker.svg";
interface LableMapProps{
	name: string,
	addres: string,
	phone: string,
	email: string
}


export const LabelMap = ({name, addres, phone, email}: LableMapProps) =>{

	return (
		<section className={styles.labelMap}>
			<div>
				<h3 className={styles.title}>Department name. <br/>{name}</h3>
				<p className={styles.address}>
					<img className={styles.marker} src={SilverMarker} alt="silver-marker"/>
					{addres}
				</p>
				<p className={styles.phone}>{phone}</p>
				<p className={styles.email}>{email}</p>
			</div>
		</section>
	)
}