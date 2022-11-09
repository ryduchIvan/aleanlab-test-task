import styles from "./Caption.module.scss";
interface CaptionProps {
	text: string
}
export const Caption = ({text}: CaptionProps) =>{

	return (
		<h2 className={styles.title}>
			{text}
		</h2>
	)
}