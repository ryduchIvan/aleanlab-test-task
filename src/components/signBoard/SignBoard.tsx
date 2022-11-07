import styles from "./SignBoard.module.scss";

interface SignBoardProps{
	title: string,
	theme?: "yellow" | "blue"
}


export const SignBoard = ({title, theme = "blue"}: SignBoardProps) =>{

	return(
		<div className={`${styles.signBoard} ${theme === "blue" ? styles.blue: styles.yellow}`}>
			{title}
		</div>
	)
}