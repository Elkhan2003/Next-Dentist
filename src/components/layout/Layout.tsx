import Head from "next/head";
import React, { FC, ReactNode, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
	dir?: any;
}

export interface IsOpenProps {
	isOpen: boolean;
	setIsOpen: (param: boolean) => void;
	isOpenDropdown: boolean;
	setIsOpenDropdown: (param: boolean) => void;
	isOpenDropdownLanguage: boolean;
	setIsOpenDropdownLanguage: (param: boolean) => void;
}

const Layout: FC<LayoutProps> = ({ children, dir }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenDropdownLanguage, setIsOpenDropdownLanguage] = useState(false);

	const props = {
		isOpen,
		setIsOpen,
		isOpenDropdown,
		setIsOpenDropdown,
		isOpenDropdownLanguage,
		setIsOpenDropdownLanguage
	};

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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/favicon.ico" hrefLang="x-default" />
				<link rel="icon" href="/favicon.ico" hrefLang="ru" />
				<link rel="icon" href="/favicon.ico" hrefLang="en" />
				<link rel="icon" href="/favicon.ico" hrefLang="kg" />
			</Head>
			<div dir={dir}>
				<div className={`${inter.className} ${scss.layout}`}>
					<header>
						<Header {...props} />
					</header>
					<main>{children}</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</div>
		</>
	);
};
export default Layout;
