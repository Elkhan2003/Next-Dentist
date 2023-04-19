import React, { FC, useState, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";
// @ts-ignore
import { SunIcon, MoonIcon } from "@/components/svgs/index";

interface SwitchThemeButtonProps {
	children?: ReactNode;
	className?: any;
}

interface SwitchThemeIconProps {
	className__Icons?: any;
	className__SunIcon?: any;
	className__MoonIcon?: any;
}

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({
	children,
	className
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

	const toggleTheme = () => {
		setTheme(isLight ? "dark" : "light");
	};

	return (
		<div className={className} onClick={toggleTheme}>
			{children}
		</div>
	);
};

const SwitchThemeIcon: FC<SwitchThemeIconProps> = ({
	className__Icons,
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
				<MoonIcon
					className={`${className__Icons} ${className__SunIcon}`}
					onClick={() => setTheme("dark")}
				/>
			) : (
				<SunIcon
					className={`${className__Icons} ${className__MoonIcon}`}
					onClick={() => setTheme("light")}
				/>
			)}
		</>
	);
};

export { SwitchThemeIcon, SwitchThemeButton };
