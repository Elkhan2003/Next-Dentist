/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	i18n: {
		locales: ["ru", "en", "fr"],
		defaultLocale: "ru",
		localeDetection: false
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }]
		});

		return config;
	}
};

module.exports = nextConfig;
