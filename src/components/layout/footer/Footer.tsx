import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { IsOpenProps } from "@/components/layout/Layout";
import { DiscordIcon, GithubIcon, InstagramIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";

interface FooterProps extends IsOpenProps {}

const Footer: FC<FooterProps> = (props) => {
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footer__top}>
						<div className={scss.block}>
							<Link
								className={scss.logo__link}
								href="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<div className={scss.bg}>
									<SwitchLogo className={scss.logoDevX} />
								</div>
							</Link>
							<p>
								Level up your career, income, and life. WEDEVX helped over 432
								students land their first jobs in tech, become the next one and
								change your life today!
							</p>
						</div>
						<div className={scss.block}>
							<h6>Courses</h6>
							<a className={scss.link__text} href="#">
								SDET
							</a>
							<a className={scss.link__text} href="#">
								Full Stack
							</a>
						</div>
						<div className={scss.block}>
							<h6>Karakol-IKSU</h6>
							<a className={scss.link__text} href="#">
								Pricing
							</a>
							<a className={scss.link__text} href="#">
								About Us
							</a>
							<a className={scss.link__text} href="#">
								FAQs
							</a>
						</div>
						<div className={scss.block}>
							<h6>Contact Us</h6>
							<a className={scss.link__text} href="#">
								hello@devxschool.com
							</a>
							<a className={scss.link__text} href="#">
								312-667-9735
							</a>
						</div>
					</div>
					<hr />
					<div className={scss.footer__bottom}>
						<div className={scss.copyright}>
							Copyright © 2023 DevX | Powered by Elcho911
						</div>
						<div className={scss.icons}>
							<a
								className={scss.link}
								href="https://www.instagram.com/elcho911/"
								target="_blank"
								aria-label="Link to Instagram profile"
							>
								<InstagramIcon />
							</a>
							<a
								className={scss.link}
								href="https://github.com/Elkhan2003"
								target="_blank"
								aria-label="Link to GitHub profile"
							>
								<GithubIcon />
							</a>
							<a
								className={scss.link}
								href="https://discord.gg/NZpxaY4CGC"
								target="_blank"
								aria-label="Link to Discord Call"
							>
								<DiscordIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
