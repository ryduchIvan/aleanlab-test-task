import {Marker} from "@react-google-maps/api";
import WhiteMarker from "assets/images/WhiteMarker.svg";
interface CustomMarkerProps{
	center: {
		lat: number,
		lng: number
	}
}


export const CustomMarker = ({center}: CustomMarkerProps) =>{
	return (
		<Marker position={center} icon={WhiteMarker}/>
	)
}