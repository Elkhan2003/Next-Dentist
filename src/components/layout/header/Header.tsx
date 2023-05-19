import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";
import scss from "./Header.module.scss";
import SwitchLogo from "@/components/theme/SwitchLogo";
import { LangIcon, ArrowIcon, PhoneIcon, TimeIcon } from "@/components/svgs";
// import {
// 	SwitchThemeButton,
// 	SwitchThemeIcon
// } from "@/components/theme/SwitchTheme";

import { IsOpenProps } from "@/components/layout/Layout";

interface HeaderProps extends IsOpenProps {}

interface linksProps {
	to: string;
	label: any;
	spy: boolean;
	smooth: boolean;
	offset: number;
	duration: number;
}

const Header: FC<HeaderProps> = (props) => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const { locales, locale: activeLocale, pathname }: any = useRouter();

	// ! Scrolling Scroll
	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 10) {
				setHeaderScroll(true);
			} else {
				setHeaderScroll(false);
			}
		};

		changeBackground();
		window.addEventListener("scroll", changeBackground);

		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	// ! Link Scroll
	const offsetScroll = -30;
	const durationScroll = 500;

	const links: linksProps[] = [
		{
			label: <FormattedMessage id="page.header.home" />,
			to: "/",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.about" />,
			to: "about",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.feedback" />,
			to: "feedback",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.contact" />,
			to: "contact",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		}
	];

	const handleScroll = () => {
		setTimeout(() => {
			window.scrollBy(0, 1);
		}, 570);
	};

	return (
		<div>
			<header className={scss.header}>
				<div
					className={
						headerScroll
							? `${scss.headerScroll} ${scss.active}`
							: `${scss.headerScroll}`
					}
				>
					<div className="container">
						<div className={scss.content}>
							{/* ! header menu */}
							<div className={scss.logo}>
								<ScrollLink
									to="/"
									spy={true}
									smooth={true}
									offset={offsetScroll}
									duration={durationScroll}
									onClick={() => {
										props.setIsOpen(false);
										props.setIsOpenDropdown(false);
										props.setIsOpenDropdownLanguage(false);
										handleScroll();
									}}
								>
									<div className={scss.logo__bg}>
										<SwitchLogo className={scss.logo__img} />
									</div>
								</ScrollLink>
							</div>
							<div className={scss.nav__menu}>
								<div className={scss.left}>
									<div className={scss.links}>
										{links.map((link, index) => (
											<ScrollLink
												key={index + 1}
												to={link.to}
												spy={link.spy}
												smooth={link.smooth}
												offset={link.offset}
												duration={link.duration}
												className={scss.link}
												activeClass={scss.active}
												onClick={() => {
													handleScroll();
												}}
											>
												{link.label}
											</ScrollLink>
										))}
									</div>
								</div>

								<div className={scss.right}>
									{/* ! switch lang */}
									<div className={scss.dropdown__language__menu__for__desktop}>
										<div className={scss.icon}>
											<span>
												<LangIcon
													className={`${scss.arrow__icon} ${scss.arrow__icon__V1}`}
												/>
												<ArrowIcon
													className={`${scss.arrow__icon} ${scss.arrow__icon__V2}`}
												/>
											</span>
										</div>

										<div className={scss.dropdown__content}>
											{[...locales].map((locale, index) => (
												<Link
													key={index + 1}
													className={
														locale === activeLocale
															? `${scss.button} ${scss.active}`
															: `${scss.button}`
													}
													href={pathname}
													locale={locale}
												>
													{locale}
												</Link>
											))}
										</div>
									</div>

									{/* ! switch theme */}
									{/*<div className={scss.switch__theme}>*/}
									{/*	<SwitchThemeIcon*/}
									{/*		className__Icons={scss.icons}*/}
									{/*		className__SunIcon={scss.SunIcon}*/}
									{/*		className__MoonIcon={scss.MoonIcon}*/}
									{/*	/>*/}
									{/*</div>*/}

									{/* ! timetable */}
									<div className={scss.timetable}>
										<div className={scss.icon__text}>
											<TimeIcon />
											<p className={scss.text}>
												<FormattedMessage id="page.header.timetable" />
											</p>
										</div>
										<div className={scss.icon__text}>
											<a className={scss.tel} href="tel:+996558777366">
												<PhoneIcon />
												<p className={scss.text}>+996 558 777 366</p>
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* ! burger menu */}
							<div
								className={
									props.isOpen
										? `${scss.nav__burger__menu} ${scss.show}`
										: `${scss.nav__burger__menu}`
								}
							>
								{links.map((link, index) => (
									<ScrollLink
										key={index + 1}
										to={link.to}
										spy={link.spy}
										smooth={link.smooth}
										offset={link.offset}
										duration={link.duration}
										className={scss.link}
										activeClass={scss.active}
										onClick={() => {
											props.setIsOpen(false);
											props.setIsOpenDropdown(false);
											props.setIsOpenDropdownLanguage(false);
											handleScroll();
										}}
									>
										{link.label}
									</ScrollLink>
								))}

								{/* ! switch lang */}
								<div
									className={
										props.isOpenDropdownLanguage
											? `${scss.dropdown__language__menu__for__mobile} ${scss.open}`
											: `${scss.dropdown__language__menu__for__mobile}`
									}
									onClick={() => {
										props.setIsOpenDropdownLanguage(
											!props.isOpenDropdownLanguage
										);
									}}
								>
									<span>
										<FormattedMessage id="page.header.switch.lang" />
										<LangIcon
											className={`${scss.arrow__icon} ${scss.arrow__icon__V1}`}
										/>
										<ArrowIcon
											className={`${scss.arrow__icon} ${scss.arrow__icon__V2}`}
										/>
									</span>

									<div
										className={
											props.isOpenDropdownLanguage
												? `${scss.dropdown__content} ${scss.open}`
												: `${scss.dropdown__content} `
										}
										onClick={(event) => {
											event.stopPropagation();
											props.setIsOpen(false);
											props.setIsOpenDropdownLanguage(true);
										}}
									>
										{[...locales].map((locale, index) => (
											<Link
												key={index + 1}
												className={
													locale === activeLocale
														? `${scss.button} ${scss.active}`
														: `${scss.button}`
												}
												href={pathname}
												locale={locale}
											>
												{locale}
											</Link>
										))}
									</div>
								</div>

								{/* ! switch theme */}
								{/*<div className={scss.burger__menu__switch__theme}>*/}
								{/*	<SwitchThemeButton className={scss.button__switch__theme}>*/}
								{/*		<FormattedMessage id="page.header.switch.theme" />*/}
								{/*		<SwitchThemeIcon*/}
								{/*			className__Icons={scss.icons}*/}
								{/*			className__SunIcon={scss.SunIcon}*/}
								{/*			className__MoonIcon={scss.MoonIcon}*/}
								{/*		/>*/}
								{/*	</SwitchThemeButton>*/}
								{/*</div>*/}

								{/* ! timetable */}
								<div className={scss.timetable}>
									<div className={scss.icon__text}>
										<TimeIcon />
										<p className={scss.text}>
											<FormattedMessage id="page.header.timetable" />
										</p>
									</div>
									<div className={scss.icon__text}>
										<PhoneIcon />
										<p className={scss.text}>+996 990 38 50 56</p>
									</div>
								</div>
							</div>

							<div className={scss.burger__button}>
								<div
									className={
										props.isOpen
											? `${scss.burger__icon} ${scss.open}`
											: `${scss.burger__icon} `
									}
									onClick={() => props.setIsOpen(!props.isOpen)}
								>
									<span />
								</div>
							</div>

							{/* <div className="burger__button">
								<label>
									<input
										type="checkbox"
										checked={isOpen}
										onChange={() => props.setIsOpen(!isOpen)}
									/>
									<span></span>
									<span></span>
									<span></span>
								</label>
							</div> */}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
export default Header;
