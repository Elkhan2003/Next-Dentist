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
										<EmailIcon /> testemail@gmail.com
									</p>
									<p className={scss.text}>
										<PhoneIcon /> +707 787 686 079
									</p>
									<p className={scss.text}>
										<MarkerIcon /> Lenina 967
									</p>
								</div>
								<div className={scss.logo}>
									<div className={scss.logo__bg}>
										<Image className={scss.logo__img} src={logo} alt="logo" />
									</div>
								</div>
							</div>
							<div className={scss.map}>
								<Image src={MapTest} alt="test map" />
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
