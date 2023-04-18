import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import AboutTicket from "@/components/pages/AboutTicket";
import ContactPage from "@/components/pages/ContactPage";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
				<AboutPage />
				<AboutTicket />
				<ContactPage />
			</Layout>
		</>
	);
};
export default Index;
