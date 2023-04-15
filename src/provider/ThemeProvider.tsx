import React, { ReactNode, FC, createContext, useMemo, useState, useEffect } from "react";

interface ThemeProviderProps {
	children: ReactNode;
};

interface ThemeContextType {
	isDark: boolean;
	setIsDark: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	isDark: false, setIsDark: () => {
	}
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState(() => {
		const savedIsDark = localStorage.getItem("isDark");
		return savedIsDark ? JSON.parse(savedIsDark) : false;
	});

	useEffect(() => {
		localStorage.setItem("isDark", JSON.stringify(isDark));
	}, [isDark]);

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};