import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import scss from "./TabPages.module.scss";
import Image from "next/image";
import pic from "@/assets/DnI9rquWsAAgfKx-min.png";

interface imagesProps {
	id: number;
	img: any;
}

const images: imagesProps[] = [
	{
		id: 1,
		img: pic
	},
	{
		id: 2,
		img: pic
	},
	{
		id: 3,
		img: pic
	},
	{
		id: 4,
		img: pic
	},
	{
		id: 5,
		img: pic
	}
];

const TabСertificate: FC = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	return (
		<>
			<div className={scss.Certificate__container}>
				<Swiper
					spaceBetween={10}
					navigation={true}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
					}}
					modules={[FreeMode, Navigation, Thumbs]}
					className={scss.mySwiper1}
				>
					{images.map((items) => (
						<SwiperSlide key={items.id}>
							<Image className={scss.image} src={items.img} alt="Сertificate" />
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className={scss.mySwiper2}
				>
					{images.map((items) => (
						<SwiperSlide key={items.id}>
							<Image className={scss.image} src={items.img} alt="Сertificate" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
export default TabСertificate;
