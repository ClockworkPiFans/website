import { ActionIcon, Menu } from '@mantine/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { HiLanguage } from 'react-icons/hi2';

export default function SwitchLanguage() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const switchLanguage = (locale: string) => {
    router.push(
      router.asPath,
      router.asPath.replace(router.query.locale as string, locale),
      { locale: locale });
  };

  return (
    <Menu position='bottom' offset={5}>
      <Menu.Target>
        <ActionIcon>
          <HiLanguage size={24} color='#595757' />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{t('language')}</Menu.Label>
        <Menu.Item onClick={() => switchLanguage('zh')}>
          中文
        </Menu.Item>
        <Menu.Item onClick={() => switchLanguage('en')}>
          English
        </Menu.Item>
      </Menu.Dropdown>
    </Menu >
  );
};