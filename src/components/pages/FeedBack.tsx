import React, { FC } from "react";
import scss from "./Style.module.scss";

const FeedBack: FC = () => {
	return (
		<>
			<div id="feedback" className={scss.feed__back}>
				<h3>FeedBack</h3>
			</div>
		</>
	);
};
export default FeedBack;