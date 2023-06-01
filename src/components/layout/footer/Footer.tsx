import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";

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
								<FormattedMessage id="page.footer.block_1.title" />
							</p>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_2.title" />
							</h6>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_1" />
							</a>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_2" />
							</a>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_3" />
							</a>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_4" />
							</a>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_3.title" />
							</h6>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_3.text_1" />
							</a>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_3.text_2" />
							</a>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_4.title" />
							</h6>
							{/*<a className={scss.link__text} href="#">*/}
							{/*	boss.armsport@gmail.com*/}
							{/*</a>*/}
							<a className={scss.link__text} href="tel:+996990385056">
								+996 990 38 50 56
							</a>
							<a className={scss.link__text} href="tel:+996990385056">
								+996 990 38 50 56
							</a>
						</div>
					</div>
					<hr />
					<div className={scss.footer__bottom}>
						<div className={scss.copyright}>Copyright © 2023 DevX</div>
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
								href="https://wa.me/996990385056?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E"
								target="_blank"
								aria-label="Link to WhatApp profile"
							>
								<WhatAppIcon />
							</a>
							<a
								className={scss.link}
								href="https://t.me/+996990385056"
								target="_blank"
								aria-label="Link to Telegram Call"
							>
								<TelegramIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
