import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { useIntl } from "react-intl";
import Image from "next/image";
import woman from "@/assets/img/Woman.webp";

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
							<p></p>
							<p></p>
							<div className={scss.sub__title}>
								<h1 className={scss.title}>
									Мы создаем красивые улыбки и заботимся о вас!
								</h1>
								<a
									href="https://wa.me/996990385056"
									className={scss.button__call}
									target="_blank"
								>
									Связаться
								</a>
							</div>

							<div className={scss.stats}>
								<div className={scss.customers}>
									<h1>1687+</h1>
									<hr />
									<p>Довольных клиентов</p>
								</div>
								<div className={scss.years}>
									<h1>8</h1>
									<hr />
									<p>Лет на рынке</p>
								</div>
							</div>
						</div>

						{/* ! right */}
						<div className={scss.right}>
							<div className={scss.woman}>
								<Image src={woman} alt="Woman" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
