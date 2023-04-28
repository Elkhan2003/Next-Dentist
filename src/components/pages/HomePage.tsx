import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import woman from "@/assets/img/Woman.webp";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { Typewriter } from "react-simple-typewriter";

const HomePage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.home.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div id="/" className={scss.home__page}>
				<div className={scss.container}>
					<div className={scss.content}>
						{/* ! left */}
						<div className={scss.left}>
							<div className={scss.sub__title}>
								<div className={scss.title__block}>
									<span className={scss.title__padding}></span>
									<h1 className={scss.title}>
										<Typewriter
											words={[intl.formatMessage({ id: "page.home.title" })]}
											loop={true}
											cursor
											cursorStyle="|"
											typeSpeed={50}
											deleteSpeed={10}
											delaySpeed={1000}
										/>
									</h1>
								</div>
								<a
									href="https://wa.me/996990385056"
									className={scss.button__call}
									target="_blank"
								>
									<FormattedMessage id="page.home.call" />
								</a>
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
								<Image src={woman} alt="Woman" priority={true} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
