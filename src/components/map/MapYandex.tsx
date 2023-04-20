import React, { FC } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

interface MapYandexProps {
	className?: any;
}

const MapYandexTest: FC<MapYandexProps> = ({ className }) => {
	const MAP_CENTER = [42.48760700516515, 78.39373595078324];

	return (
		<>
			<YMaps>
				<Map
					className={className}
					defaultState={{
						center: MAP_CENTER,
						zoom: 17,
						controls: [
							"zoomControl",
							"fullscreenControl",
							"geolocationControl",
							"typeSelector"
						]
					}}
					modules={[
						"control.ZoomControl",
						"control.FullscreenControl",
						"control.GeolocationControl",
						"control.TypeSelector"
					]}
				>
					<Placemark defaultGeometry={MAP_CENTER} />
				</Map>
			</YMaps>
		</>
	);
};
export default MapYandexTest;
