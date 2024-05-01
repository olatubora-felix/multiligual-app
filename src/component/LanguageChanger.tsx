'use client';
import i18nConfig from '@/i18nConfig';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';


export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        // document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // set i18next language
        i18n.changeLanguage(newLocale);

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <select className=' border-none outline-none' onChange={handleChange} value={currentLocale}>
            <option value="ja">日本語</option>
            <option value="en">English</option>
        </select>
    );
}