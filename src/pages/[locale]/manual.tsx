import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Developing from '@/components/Developing';
import i18nextConfig from '@/../next-i18next.config';
import { getI18nPaths } from '@/../getI18nPaths';

export default function Manual() {

  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title', { title: t('manual') })}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Developing />
    </>
  )
}

Manual.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>{page}</MainLayout>
  )
};

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getI18nPaths(),
  }
}

export async function getStaticProps(context: { params: { locale: string } }) {

  return {
    props: {
      ...(await serverSideTranslations(context.params.locale, ['common'], i18nextConfig)),
    },
  }
}