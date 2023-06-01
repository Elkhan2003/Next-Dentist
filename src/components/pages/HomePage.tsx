import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import woman from "@/assets/img/Woman.webp";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { Typewriter } from "react-simple-typewriter";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";

const HomePage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.home.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div id="/" className={scss.home__page}>
				<div className="container">
					<div className={scss.content}>
						{/* ! left */}
						<div className={scss.left}>
							<div className={scss.sub__title}>
								<h1 className={scss.title}>
									<Typewriter
										words={[intl.formatMessage({ id: "page.home.title" })]}
										loop={true}
										cursor
										cursorStyle="|"
										typeSpeed={50}
										deleteSpeed={10}
										delaySpeed={1500}
									/>
								</h1>
								<div className={scss.button__call}>
									<div className={scss.icons}>
										<a
											className={`${scss.link} ${scss.instagram}`}
											href="https://www.instagram.com/elcho911/"
											target="_blank"
											aria-label="Link to Instagram profile"
										>
											<InstagramIcon />
										</a>
										<a
											className={`${scss.link} ${scss.what__app}`}
											href="https://wa.me/996990385056?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E"
											target="_blank"
											aria-label="Link to WhatApp profile"
										>
											<WhatAppIcon />
										</a>
										<a
											className={`${scss.link} ${scss.telegram}`}
											href="https://t.me/+996990385056"
											target="_blank"
											aria-label="Link to Telegram Call"
										>
											<TelegramIcon />
										</a>
									</div>
								</div>
							</div>

							<div className={scss.stats}>
								<div className={scss.customers}>
									<h1>
										<AnimatedNumbers value={1687} />+
									</h1>
									<hr />
									<p>
										<FormattedMessage id="page.home.stat.first" />
									</p>
								</div>
								<div className={scss.years}>
									<h1>
										<AnimatedNumbers value={9} />+
									</h1>
									<hr />
									<p>
										<FormattedMessage id="page.home.stat.second" />
									</p>
								</div>
							</div>
						</div>

						{/* ! right */}
						<div className={scss.right}>
							<div className={scss.woman}>
								<Image
									priority={true}
									quality={50}
									loading="eager"
									src={woman}
									alt="Woman"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
