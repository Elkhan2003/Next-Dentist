import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
				<AboutPage />
			</Layout>
		</>
	);
};
export default Index;
