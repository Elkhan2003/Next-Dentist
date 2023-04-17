import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import AboutTicket from "@/components/pages/AboutTicket";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
				<AboutPage />
				<AboutTicket />
			</Layout>
		</>
	);
};
export default Index;
