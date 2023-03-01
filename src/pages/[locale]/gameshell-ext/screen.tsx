import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '@/../next-i18next.config';
import { getI18nPaths } from '@/../getI18nPaths';
import { Box, Button, Card, Container, Group, Image, List, Space, Stack, Text } from '@mantine/core';
import customColors from '@/configs/customColors';

export default function Screen() {

  const { t } = useTranslation('gameshell-ext');

  return (
    <>
      <Head>
        <title>{t('title', { title: t('screen') })}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Group>
          <Card shadow='sm' radius='md' withBorder>
            <Card.Section>
              <Image src='/images/screen_showcase.jpg' />
            </Card.Section>
            <Box px={50} py={15}>
              <Group spacing={50}>
                <Box>
                  <Text color={customColors.default}>
                    <h1>{t('screen-description-title')}</h1>
                    <List size='xl'>
                      <List.Item>{t('screen-description-1')}</List.Item>
                      <List.Item>{t('screen-description-2')}</List.Item>
                      <List.Item>{t('screen-description-3')}</List.Item>
                      <List.Item>{t('screen-description-4')}</List.Item>
                    </List>
                  </Text>
                </Box>
                {/* TODO handle onClick event, navigate to manual. */}
                <Button fullWidth>{t('screen-more')}</Button>
              </Group>
            </Box>
          </Card>
        </Group>
        <Space h={30}/>
      </Container>
    </>
  )
}

Screen.getLayout = (page: ReactElement) => {
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
      ...(await serverSideTranslations(context.params.locale, ['gameshell-ext', 'common'], i18nextConfig)),
    },
  }
}