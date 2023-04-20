import "@/pages/globals.scss";
import "@/pages/theme.scss";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "next-themes";

import ru from "../../i18n/ru.json";
import en from "../../i18n/en.json";
import kg from "../../i18n/kg.json";

const messages: any = {
	ru,
	en,
	kg
};

function getDirection(locale: any): "ltr" {
	return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale }: any = useRouter();

	return (
		// @ts-ignore
		<IntlProvider locale={locale} messages={messages[locale]}>
			<ThemeProvider>
				<Component {...pageProps} dir={getDirection(locale)} />
			</ThemeProvider>
		</IntlProvider>
	);
}
