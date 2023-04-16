import React, { FC, useState, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";

interface SwitchThemeButtonProps {
	children: ReactNode;
	className?: any;
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
		<>
			<button className={className} onClick={toggleTheme}>
				{children}
			</button>
		</>
	);
};

export default SwitchThemeButton;
