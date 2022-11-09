//CSS
import styles from "./DetailsImages.module.scss";
//Hooks
import {useRef, useEffect, useState} from "react";
import {motion} from "framer-motion";

interface DetailsImagesProps {
	pictures: string[]
}
export const DetailsImages = ({pictures}: DetailsImagesProps) =>{
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLUListElement>(null);

	useEffect(() =>{
			const getWidth = () =>{
				if (carousel !== undefined && carousel.current !== null) {
					setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);	
				}
			}
			getWidth();
			window.addEventListener("resize", getWidth);
			return () => window.removeEventListener("resize", getWidth);	
	}, []);

	return(
		<motion.section className={styles.carousel} >
			<motion.ul className={styles.innerCarousel} ref={carousel} key={width} drag="x" dragConstraints={{right: 0, left: -width}}>
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