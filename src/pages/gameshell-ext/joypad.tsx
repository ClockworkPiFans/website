import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Developing from '@/components/Developing';

export default function Joypad() {

  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title', { title: t('joypad') })}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Developing />
    </>
  )
}

Joypad.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>{page}</MainLayout>
  )
};

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common'])),
    },
  }
}