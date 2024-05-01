import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/component/TranslationsProvider";
import Link from "next/link";

const SecondPage = async ({ params: { lng } }: HomeParams) => {
  const namespaces = ['second'];
  const { t, resources } = await initTranslations(lng, namespaces);
  return (
    <TranslationsProvider locale={lng} resources={resources} namespaces={namespaces} >
      <h1>{t('heading')}</h1>
      <Link href={`/`}>
        back
      </Link>
    </TranslationsProvider>
  )
}
export default SecondPage
interface HomeParams {
  params: {
    lng: string;
  };
}