import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import FeedBack from "@/components/pages/FeedBack";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
				{/*<AboutPage />*/}
				<FeedBack />
				<ContactPage />
			</Layout>
		</>
	);
};
export default Index;
