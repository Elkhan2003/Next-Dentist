import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import scss from "./Slider.module.scss";
import Image from "next/image";

import pic from "@/assets/DnI9rquWsAAgfKx-min.png";

interface SlidersProps {
	id: number;
	img: any;
	text: string;
}

interface TabProps {
	title?: any;
	text?: any;
}

const TabFeedBack: FC<TabProps> = ({ title, text }) => {
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
			620: {
				slidesPerView: 2
			},
			950: {
				slidesPerView: 3
			}
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		}
	};

	const sliders: SlidersProps[] = [
		{
			id: 1,
			img: pic,
			text: "«Жогорку сапаттагы билим, Англис тили жана SoftSkills сабактары өтүлөт, менторлор менен студенттердин арасында тыгыз байланыш.»"
		},
		{
			id: 2,
			img: pic,
			text: "«Атмосферасы сонун, чөйрөсү аябай пайдалуу, кызыктуу конкурстар (ивенттер) уюштурулуп турат.»"
		},
		{
			id: 3,
			img: pic,
			text: "«Артыкчылыгы кыргыз тилинде өтөт соонун. Аптасына 5 күн катары менен болгону.»"
		},
		{
			id: 4,
			img: pic,
			text: "«Атмосферасы, тынчтыгы жана мугалимдердин жылмайып жүргөнү жагат.»"
		},
		{
			id: 5,
			img: pic,
			text: " «Бул курста мага бүткүл чөйрөнүн программисттер чөйрөсүнө айланганы жагат, окуучулар, менторлор жана PeakSoftтогу студенттер бир имаратта чогуу жүргөндүктөн, маалымат алмашуу болот жана реалдуу проекттерге күбө болосуң.»"
		},
		{
			id: 6,
			img: pic,
			text: "«Курс өтө соонун. Методдору, мугалимдери, аурасы өзгөчө! Көптөгөн мүмкүнчүлүктөрдү түзүп берген. Жеке личность катары баарын үйрөткөнгө аракет жасашат. Студенттердин санына эмес сапатына карагандары жакты.»"
		}
	];

	return (
		<>
			<div className={scss.FeedBack__container}>
				<div className={title}>Отзывы Клиентов</div>
				<Swiper {...options}>
					{sliders.map((slid) => (
						<SwiperSlide key={slid.id}>
							<div className={scss.card}>
								<p className={scss.feed__back}>{slid.text}</p>
								<div className={scss.user}>
									<Image className={scss.image} src={slid.img} alt={"pic"} />
									<div className={scss.user__working}>
										<h3>Elcho911</h3>
										<p>Frontend Developer. DevX</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
export default TabFeedBack;
