import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import Image from "next/image";
import MedPlus from "@/assets/icons/med_plus.png";
import CheckMark from "@/assets/icons/check_mark.png";
import BxChild from "@/assets/icons/bx-child.png";

const AboutTicket: FC = () => {
	return (
		<>
			<div className={scss.about__ticket}>
				<div className="container">
					<div className={scss.content}>
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
		</>
	);
};
export default AboutTicket;
