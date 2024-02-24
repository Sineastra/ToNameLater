"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";
import LangEnum from "../../ts/enums/lang.enum";

const runsOnServerSide = typeof window === "undefined";

//
i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(
		resourcesToBackend((prop: any) => {
			const language = prop.language ?? prop;
			const namespace = prop.namespace ?? "translation";

			return import(`./locales/${language}/${namespace}.json`);
		})
	)
	.init({
		...getOptions(),
		lng: undefined, // let detect the language on client side
		detection: {
			order: ["path", "htmlTag", "cookie", "navigator"],
		},
		preload: runsOnServerSide ? languages : [],
	});

export function useTranslation(lng: LangEnum, ns?: string, options: any = {}) {
	const [cookies, setCookie] = useCookies([cookieName]);
	const ret = useTranslationOrg(ns, options);
	const { i18n } = ret;
	const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

	useEffect(() => {
		if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
			return;
		}
		if (activeLng === i18n.resolvedLanguage) {
			return;
		}
		setActiveLng(i18n.resolvedLanguage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeLng, i18n.resolvedLanguage]);

	useEffect(() => {
		if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
			return;
		}
		if (!lng || i18n.resolvedLanguage === lng) {
			return;
		}
		i18n.changeLanguage(lng);
	}, [lng, i18n]);

	useEffect(() => {
		if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
			return;
		}
		if (cookies.i18next === lng) {
			return;
		}
		setCookie(cookieName, lng, { path: "/" });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lng, cookies.i18next, setCookie]);

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
		i18n.changeLanguage(lng);
	}

	return ret;
}
