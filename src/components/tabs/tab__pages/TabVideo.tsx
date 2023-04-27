import React, { FC } from "react";

interface TabProps {
	title?: any;
	text?: any;
}

const TabVideo: FC<TabProps> = ({ title, text }) => {
	return (
		<>
			<div className={title}>About Content</div>
			<p className={text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
				excepturi ducimus sequi dignissimos expedita tempore omnis quos cum,
				possimus, aspernatur esse nihil commodi est maiores dolorum rem iusto
				atque, beatae voluptas sit eligendi architecto.
			</p>
		</>
	);
};
export default TabVideo;
