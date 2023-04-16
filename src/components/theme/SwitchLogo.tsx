import React, { FC } from "react";
import Image from "next/image";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo.png";
import { useTheme } from "next-themes";

interface SwitchLogoProps {
	className?: string;
}

const SwitchLogo: FC<SwitchLogoProps> = ({ className }) => {
	const { resolvedTheme }: any = useTheme();
	const logo: any = resolvedTheme === "light" ? logoDark : logoLight;

	return (
		<>
			<Image className={className} src={logo} alt="logo" />
		</>
	);
};

export default SwitchLogo;
