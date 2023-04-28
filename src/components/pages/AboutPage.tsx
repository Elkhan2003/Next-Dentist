import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "@/assets/icons/Teeth.png";
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
							<Image
								className={scss.balance__for__mobile}
								src={TeethIcon}
								alt={"teeth"}
							/>
							<div className={scss.icon__first}>
								<Image src={TeethIcon} alt={"teeth"} />
							</div>
							<div className={scss.icon__second}>
								<Image src={TeethIcon} alt={"teeth"} />
							</div>
							<h1 className={scss.title}>
								<FormattedMessage id="page.about.title" />
							</h1>
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
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.first" />
								</p>
							</div>
							<div className={scss.card}>
								<Image className={scss.icon} src={CheckMark} alt="CheckMark" />
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.second" />
								</p>
							</div>
							<div className={scss.card}>
								<Image className={scss.icon} src={BxChild} alt="BxChild" />
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.third" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutPage;
