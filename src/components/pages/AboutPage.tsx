import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

const AboutPage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={scss.about__page}>
				<h3>
					<FormattedMessage id="page.about.title" />
				</h3>
				<p>
					<FormattedMessage id="page.about.about.me" />
				</p>
			</div>
		</>
	);
};
export default AboutPage;
