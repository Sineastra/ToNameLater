import { useTranslation as useTranslationOrg } from "react-i18next";
import LangEnum from "../ts/enums/lang.enum";

export function useTranslation() {
	const { i18n: i18nInstance, t } = useTranslationOrg();

	const changeLanguage = (lang: LangEnum) => {
		i18nInstance.changeLanguage(lang);
	};

	return { t, i18n: i18nInstance, changeLanguage };
}
