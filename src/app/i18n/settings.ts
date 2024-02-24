import LangEnum from "../../ts/enums/lang.enum";

export const fallbackLng = LangEnum.BG;
export const languages = [fallbackLng, LangEnum.EN];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	};
}
