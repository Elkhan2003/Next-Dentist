import React, { FC } from "react";
import scss from "./Style.module.scss";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import MapTest from "@/assets/img/map_test.png";
import { EmailIcon, MarkerIcon, PhoneIcon } from "@/components/svgs";
import logo from "@/assets/ortodont.webp";
import Mapgl from "@/components/map/Mapgl";
import MapYandex from "@/components/map/MapYandex";

const ContactPage: FC = () => {
	return (
		<>
			<div className={scss.contact__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.left}>
							<ContactForm className={scss.form__block} />
						</div>
						<div className={scss.right}>
							<div className={scss.block}>
								<div className={scss.texts}>
									<h1 className={scss.title}>Наши контакты:</h1>
									<p className={`${scss.text} ${scss.email}`}>
										<EmailIcon /> boss.armsport@gmail.com
									</p>
									<p className={scss.text}>
										<PhoneIcon /> +996 990 38 50 56
									</p>
									<p className={scss.text}>
										<MarkerIcon /> DevX 911
									</p>
								</div>
								<div className={scss.logo}>
									<div className={scss.logo__bg}>
										<Image className={scss.logo__img} src={logo} alt="logo" />
									</div>
								</div>
							</div>
							<div className={scss.map}>
								<iframe
									src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0104d8fd2fce3ebe9b6941505ffd9358e15d07f3b15e49a32188767462a62cf&amp;source=constructor"
									frameBorder="0"
								></iframe>
								{/*<Image src={MapTest} alt="test map" />*/}
								{/*<Mapgl />*/}
								{/*<MapYandex className={scss.size} />*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
