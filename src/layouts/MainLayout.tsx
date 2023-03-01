import HeaderMenu from '@/components/HeaderMenu';
import { useTranslation } from 'next-i18next';
import IconButton from '@/components/IconButton';
import {
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaQuestionCircle,
  FaBook,
  FaGamepad,
} from 'react-icons/fa';
import { BsJoystick } from 'react-icons/bs';
import { MdSmartScreen } from 'react-icons/md';
import SwitchLanguage from '@/components/SwitchLanguage';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import customColors from '@/configs/customColors';
import { getExternalLocaleLink, getLocaleLink } from '@/lib/localeUrl';

interface MainLayoutProps {
  children: ReactElement;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation();
  const router = useRouter();

  function getLocaleLinkWrapper(originalLink: string) {
    return getLocaleLink(originalLink, router.query.locale as string);
  }

  function getExternalLocaleLinkWrapper(originalLink: string) {
    return getExternalLocaleLink(originalLink, router.query.locale as string);
  }

  const defaultLinks = [
    {
      link: getLocaleLinkWrapper("/"),
      label: t('home'),
      startIcon: <FaHome />
    },
    {
      link: getLocaleLinkWrapper("/gameshell-ext"),
      label: t('gameshell-ext'),
      startIcon: <FaGamepad />,
      links: [
        {
          link: getLocaleLinkWrapper("/gameshell-ext/screen"),
          label: t('screen'),
          startIcon: <MdSmartScreen />
        },
        {
          link: getLocaleLinkWrapper("/gameshell-ext/joypad"),
          label: t('joypad'),
          startIcon: <BsJoystick />
        }
      ]
    },
    {
      link: getExternalLocaleLinkWrapper("https://manual.clockworkpi-fans.com"),
      label: t('manual'),
      startIcon: <FaBook />
    },
    {
      link: getLocaleLinkWrapper("/about"),
      label: t('about'),
      startIcon: <FaInfoCircle />
    },
    {
      link: getLocaleLinkWrapper("/faq"),
      label: t('faq'),
      startIcon: <FaQuestionCircle />
    },
  ];

  return (
    <>
      <HeaderMenu links={defaultLinks} extraElements={
        [
          <SwitchLanguage key='language' />,
          <IconButton
            key='github'
            icon={<FaGithub size={24} color={customColors.default} />}
            onClick={() => window.open('https://github.com/ClockworkPiFans', '_blank')} />
        ]} />
      {children}
    </>
  );
};