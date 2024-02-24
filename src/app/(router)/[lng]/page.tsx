import LangEnum from "../../../ts/enums/lang.enum";
import { useTranslation } from "../../i18n";
import { LanguageSwitcher } from "../../_components/LangSwitcher";

interface Props {
	params: {
		lng: LangEnum;
	};
}
const IndexPage = async ({ params: { lng } }: Props) => {
	const { t } = await useTranslation(lng);

	return (
		<>
			<h1>{t("title")}</h1>
			<LanguageSwitcher lng={lng} />
		</>
	);
};

export default IndexPage;
