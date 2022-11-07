import styles from "./Button.module.scss";
interface ButtonProps{
	title: string
}

export const Button = ({title}: ButtonProps) =>{

	return (
		<button className={styles.button}>
			{title}
		</button>
	)
}