import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

const HomePage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.title" });
	const description: any = intl.formatMessage({
		id: "page.head.meta.description"
	});

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<div className={scss.home__page}>
				<h3>
					<FormattedMessage id="page.home.title" />
				</h3>
				<p>
					<FormattedMessage id="page.home.description" />
				</p>
			</div>
		</>
	);
};
export default HomePage;
