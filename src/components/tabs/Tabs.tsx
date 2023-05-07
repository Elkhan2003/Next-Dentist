import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import scss from "./Tabs.module.scss";
import TabFeedBack from "@/components/tabs/tab__pages/TabFeedBack";
import TabCalendar from "@/components/tabs/tab__pages/TabCalendar";
import TabStaff from "@/components/tabs/tab__pages/TabStaff";
import TabPhoto from "@/components/tabs/tab__pages/TabPhoto";
import TabVideo from "@/components/tabs/tab__pages/TabVideo";
import TabСertificate from "@/components/tabs/tab__pages/TabСertificate";
import {
	FeedBackIcon,
	CalendarIcon,
	StaffIcon,
	PhotoIcon,
	VideoIcon,
	CertificateIcon
} from "@/components/svgs";
import { FormattedMessage } from "react-intl";

interface tabsProps {
	icon: any;
	label: any;
	page?: any;
}

const tabs: tabsProps[] = [
	{
		icon: <FeedBackIcon />,
		label: <FormattedMessage id="page.tabs.button.feedback" />,
		page: <TabFeedBack />
	},
	// {
	// 	icon: <CalendarIcon />,
	// 	label: <FormattedMessage id="page.tabs.button.schedule" />,
	// 	page: <TabCalendar />
	// },
	{
		icon: <StaffIcon />,
		label: <FormattedMessage id="page.tabs.button.employees" />,
		page: <TabStaff />
	},
	{
		icon: <PhotoIcon />,
		label: <FormattedMessage id="page.tabs.button.photo" />,
		page: <TabPhoto />
	},
	{
		icon: <VideoIcon />,
		label: <FormattedMessage id="page.tabs.button.video" />,
		page: <TabVideo />
	},
	{
		icon: <CertificateIcon />,
		label: <FormattedMessage id="page.tabs.button.certificate" />,
		page: <TabСertificate />
	}
];

const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState<number>(tabs[0].label);

	return (
		<>
			<div className={scss.tabs__container}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.about__us}>
							<FormattedMessage id="page.tabs.title" />
						</h1>
						<div className={scss.tabs}>
							<div className={scss.buttons}>
								{tabs.map((tab, index) => (
									<button
										key={index + 1}
										onClick={() => {
											setActiveTab(tab.label);
										}}
										className={
											activeTab === tab.label
												? `${scss.button} ${scss.active}`
												: `${scss.button}`
										}
									>
										{activeTab === tab.label && (
											<motion.div
												layoutId="active-pill"
												className={scss.active}
												style={{
													borderRadius: 12
												}}
												transition={{ type: "spring", duration: 0.6 }}
											/>
										)}
										<span className={scss.icon}>{tab.icon}</span>
										<span className={scss.label}>{tab.label}</span>
									</button>
								))}
							</div>
							{tabs.map((tab, index) =>
								activeTab === tab.label ? (
									<div key={index + 1} className={scss.tabs__content}>
										{tab.page}
									</div>
								) : null
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Tabs;
