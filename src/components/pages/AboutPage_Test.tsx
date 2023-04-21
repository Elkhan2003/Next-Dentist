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
					<p className={scss.text}>
						<FormattedMessage id="page.about.title" />
						<FormattedMessage id="page.about.about.me" />
					</p>
				</div>
			</div>
		</>
	);
};
export default AboutPage_Test;
