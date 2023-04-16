import React, { FC } from "react";
import Image from "next/image";
import logoDevX from "@/assets/logo-dark.png";
import logoDevX_dark from "@/assets/logo.png";
import { useTheme } from "next-themes";

interface SwitchLogoProps {
	className?: any;
}

const SwitchLogo: FC<SwitchLogoProps> = ({ className }) => {
	const logo: any = logoDevX;
	const logo_dark: any = logoDevX_dark;

	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = logo;
			break;
		case "dark":
			src = logo_dark;
			break;
		default:
			src =
				"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
			break;
	}

	return (
		<>
			<Image className={className} src={src} alt="logo" />
		</>
	);
};
export default SwitchLogo;
