import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import FaceVideo from "@/assets/img/Video_Dentist.png";
import MedPlus from "@/assets/icons/med_plus.png";
import CheckMark from "@/assets/icons/check_mark.png";
import BxChild from "@/assets/icons/bx-child.png";

const AboutPage: FC = () => {
	return (
		<>
			<div id="about" className={scss.about__page}>
				<div className={scss.block__1}>
					<div className="container">
						<div className={scss.about__us}>
							<h3 className={scss.title}>
								<FormattedMessage id="page.about.title" />
							</h3>
							<div className={scss.video__text}>
								<Image
									className={scss.face__video}
									src={FaceVideo}
									alt="video"
								/>
								<p className={scss.text}>
									<FormattedMessage id="page.about.about.me" />
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={scss.block__2}>
					<div className="container">
						<div className={scss.about__ticket}>
							<div className={scss.card}>
								<Image className={scss.icon} src={MedPlus} alt="MedPlus" />
								<p className={scss.text}>Современные методики лечения</p>
							</div>
							<div className={scss.card}>
								<Image className={scss.icon} src={CheckMark} alt="CheckMark" />
								<p className={scss.text}>Детская стоматология</p>
							</div>
							<div className={scss.card}>
								<Image className={scss.icon} src={BxChild} alt="BxChild" />
								<p className={scss.text}>Гаранития качества</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutPage;
