//Hooks
import { useRef, useCallback} from "react";
//Google maps
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//Images
import {defaultTheme} from "./theme";
import { CustomMarker } from "components/customMarker/customMarker";

interface MapProps {
	location: {
		lat: number,
		long: number
	}
}

const APIKEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
	width: '100%',
	height: '249px',
	borderBottomLeftRadius: "8px",
	borderBottomRightRadius: "8px",
};

const defaultOptions ={
	panControl: false,
	IzoomControl: false,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwheel: false,
	disableDoubleClickZoom: false,
	fullscreenControl: false,
	styles: defaultTheme
};

export const Map = ({location}: MapProps) =>{

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: APIKEY ? APIKEY : ""
	  })

	const center ={
		lat: location.lat,
		lng: location.long
	}
	
	const mapRef = useRef(undefined);

	
	const onLoad = useCallback(function callback(map:any) {
		mapRef.current = map;
	}, [])
	
	const onUnmount = useCallback(function callback(map: any) {
		mapRef.current = undefined;
	}, [])
	
	  return isLoaded ? (
		  <GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={13}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={defaultOptions}
		  >
			<CustomMarker center={center}/>
			<></>
		  </GoogleMap>
	  ) : <></>
}
