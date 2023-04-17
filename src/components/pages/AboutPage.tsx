import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import FaceVideo from "@/assets/img/Video_Dentist.png";

const AboutPage: FC = () => {
	return (
		<>
			<div className={scss.about__page}>
				<div className="container">
					<div className={scss.content}>
						<h3 className={scss.title}>
							<FormattedMessage id="page.about.title" />
						</h3>
						<div className={scss.video__text}>
							<Image className={scss.face__video} src={FaceVideo} alt="video" />
							<p className={scss.text}>
								<FormattedMessage id="page.about.about.me" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutPage;
