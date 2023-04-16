import React, { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
// @ts-ignore
import { SunIcon, MoonIcon } from "@/components/svgs/Icons";

interface SwitchThemeIconProps {
	className__Icon?: any;
	className__SunIcon?: any;
	className__MoonIcon?: any;
}

const SwitchThemeIcon: FC<SwitchThemeIconProps> = ({
	className__Icon,
	className__SunIcon,
	className__MoonIcon
}) => {
	const [mounted, setMounted]: any = useState(false);
	const { theme, setTheme }: any = useTheme();
	const isLight: any = theme === "light";

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{isLight ? (
				<SunIcon
					className={`${className__Icon} ${className__SunIcon}`}
					onClick={() => setTheme("dark")}
				/>
			) : (
				<MoonIcon
					className={`${className__Icon} ${className__MoonIcon}`}
					onClick={() => setTheme("light")}
				/>
			)}
		</>
	);
};
export default SwitchThemeIcon;
