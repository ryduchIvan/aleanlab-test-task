import styles from "./DetailsImages.module.scss";
//Hooks
import {useRef, useEffect, useState, Ref} from "react";
import {motion} from "framer-motion";
interface DetailsImagesProps {
	pictures: string[]
}
export const DetailsImages = ({pictures}: DetailsImagesProps) =>{
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<any>(null);
	let offsetWidth = 640;
	let scroll:number;
	if (carousel.current) {
		offsetWidth = carousel.current.offsetWidth;
		scroll = carousel.current.scrollWidth;
	}
	useEffect(() =>{
		setWidth(scroll - offsetWidth);
		console.log(offsetWidth);
	}, [offsetWidth]);

	return(
		<motion.section className={styles.carousel} ref={carousel}>
			<motion.ul className={styles.innerCarousel} drag="x" dragConstraints={{right: 0, left: -width}}>
				{
					pictures.map((picture, index) =>(
						<motion.li key={index} className={styles.item}>
							<img src={picture} alt="additional img" className={styles.img} />
						</motion.li>
					) 
					)
				}
			</motion.ul>
		</motion.section>
	)
}