import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { Clusterer } from "@2gis/mapgl-clusterer";

export const MAP_CENTER = [78.39373595078324, 42.48760700516515];

const Mapgl = () => {
	useEffect(() => {
		// @ts-ignore
		let map: mapgl.Map | undefined = undefined;
		let clusterer: Clusterer | undefined = undefined;

		load().then((mapgl) => {
			map = new mapgl.Map("map-container", {
				center: MAP_CENTER,
				zoom: 17,
				key: "a1893935-6834-4445-b97a-3405fb426c5b"
			});

			map.on("click", (e: any) => console.log(e));

			clusterer = new Clusterer(map, {
				radius: 60
			});

			const markers = [{ coordinates: MAP_CENTER }];
			clusterer.load(markers);
		});

		// Destroy the map, if Map component is going to be unmounted
		return () => {
			clusterer && clusterer.destroy();
			map && map.destroy();
		};
	}, []);

	return (
		<>
			<div id="map-container" style={{ width: "100%", height: "100%" }}></div>
		</>
	);
};

export default Mapgl;
