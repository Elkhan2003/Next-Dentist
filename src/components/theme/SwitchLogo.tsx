import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import logoDevX from "@/assets/logo-dark.png";
import logoDevX_dark from "@/assets/logo.png";
import { useTheme } from "next-themes";

interface SwitchLogoProps {
	className?: any;
}

const SwitchLogo: FC<SwitchLogoProps> = ({ className }) => {
	const [mounted, setMounted]: any = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const logo: any = logoDevX;
	const logo_dark: any = logoDevX_dark;

	const { resolvedTheme }: any = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = logo;
			break;
		case "dark":
			src = logo_dark;
			break;
		default:
			src = null;
			break;
	}

	return (
		<>
			{src ? (
				<Image className={className} src={src} alt="logo" />
			) : (
				<p>Unable to determine theme.</p>
			)}
		</>
	);
};
export default SwitchLogo;
