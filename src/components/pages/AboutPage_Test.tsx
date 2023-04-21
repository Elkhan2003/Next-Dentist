import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

const AboutPage_Test: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.about.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={scss.about__page__test}>
				<div className="container">
					<h1>
						<FormattedMessage id="page.about.title" />
					</h1>
					<h3>
						<FormattedMessage id="page.about.about.me" />
					</h3>
				</div>
			</div>
		</>
	);
};
export default AboutPage_Test;
