import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import scss from "./Swiper.module.scss";
import Image from "next/image";

import pic from "@/assets/DnI9rquWsAAgfKx-min.png";

interface SlidersProps {
	id: number;
	img: any;
	text: string;
}

const SwiperPage: FC = () => {
	const options: SwiperOptions = {
		modules: [Navigation, Pagination, Autoplay],
		rewind: true,
		navigation: true,
		pagination: {
			clickable: true
		},
		grabCursor: true,
		spaceBetween: 30,
		speed: 1000,
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			520: {
				slidesPerView: 2
			},
			950: {
				slidesPerView: 3
			}
		},
		autoplay: {
			delay: 2500000,
			disableOnInteraction: false
		}
	};

	const sliders: SlidersProps[] = [
		{
			id: 1,
			img: pic,
			text: "1"
		},
		{
			id: 2,
			img: pic,
			text: "2"
		},
		{
			id: 3,
			img: pic,
			text: "3"
		},
		{
			id: 4,
			img: pic,
			text: "4"
		},
		{
			id: 5,
			img: pic,
			text: "5"
		},
		{
			id: 6,
			img: pic,
			text: "6"
		}
	];

	return (
		<>
			<Swiper {...options}>
				{sliders.map((slid) => (
					<SwiperSlide key={slid.id}>
						<div className={scss.card}>
							<Image className={scss.image} src={slid.img} alt={"pic"} />
							<p>{slid.text}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SwiperPage;
