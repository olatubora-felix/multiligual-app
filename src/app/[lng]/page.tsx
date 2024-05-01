import TranslationsProvider from "@/component/TranslationsProvider";
import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n";

const Home = async ({ params: { lng } }: HomeParams) => {
  const namespaces = ['home'];
  const { t, resources } = await initTranslations(lng, namespaces);
  return (
    <TranslationsProvider locale={lng} resources={resources} namespaces={namespaces} >
      <h1>{t('heading')}</h1>
      <Link href={`/second-page`}>
        second page
      </Link>
    </TranslationsProvider>
  );
};
export default Home
interface HomeParams {
  params: {
    lng: string;
  };
}

