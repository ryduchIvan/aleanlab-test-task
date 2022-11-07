import {useState, useRef, useCallback} from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const APIKEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
	width: '400px',
	height: '400px'
  };
  

interface MapProps {
	center: any
}
export const Map = ({center}: MapProps) =>{

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: APIKEY ? APIKEY : ""
	  })
	
	  const [map, setMap] = useState(null)
	
	  const onLoad = useCallback(function callback(map:any) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
	
		setMap(map)
	  }, [])
	
	  const onUnmount = useCallback(function callback(map: any) {
		setMap(null)
	  }, [])
	
	  return isLoaded ? (
		  <GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		  >
			{ /* Child components, such as markers, info windows, etc. */ }
			<></>
		  </GoogleMap>
	  ) : <></>
}
