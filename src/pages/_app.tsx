import "@/pages/globals.scss";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import ru from "../../i18n/ru.json";
import en from "../../i18n/en.json";
import fr from "../../i18n/kg.json";

const messages: any = {
	ru,
	en,
	fr
};

function getDirection(locale: any): "ltr" {
	return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale }: any = useRouter();

	return (
		// @ts-ignore
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Component {...pageProps} dir={getDirection(locale)} />
		</IntlProvider>
	);
}
