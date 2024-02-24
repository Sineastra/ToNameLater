import { dir } from "i18next";
import LangEnum from "../../../ts/enums/lang.enum";
import { languages } from "../../i18n/settings";

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

interface Props {
	children: React.ReactNode;
	params: {
		lng: LangEnum;
	};
}
export default function RootLayout({ children, params: { lng } }: Props) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<body>{children}</body>
		</html>
	);
}