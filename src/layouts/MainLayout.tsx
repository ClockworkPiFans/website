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

interface MainLayoutProps {
  children: ReactElement;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation();
  const router = useRouter();

  function getLocaleLink(originalLink:string): string {
    return `/${router.query.locale}${originalLink}`;
  }

  const defaultLinks = [
    {
      link: getLocaleLink("/"),
      label: t('home'),
      startIcon: <FaHome />
    },
    {
      link: getLocaleLink("/gameshell-ext"),
      label: t('gameshell-ext'),
      startIcon: <FaGamepad />,
      links: [
        {
          link: getLocaleLink("/gameshell-ext/screen"),
          label: t('screen'),
          startIcon: <MdSmartScreen />
        },
        {
          link: getLocaleLink("/gameshell-ext/joypad"),
          label: t('joypad'),
          startIcon: <BsJoystick />
        }
      ]
    },
    {
      link: getLocaleLink("/manual"),
      label: t('manual'),
      startIcon: <FaBook />
    },
    {
      link: getLocaleLink("/about"),
      label: t('about'),
      startIcon: <FaInfoCircle />
    },
    {
      link: getLocaleLink("/faq"),
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
            icon={<FaGithub size={24} color='#595757' />}
            onClick={() => window.open('https://github.com/ClockworkPiFans', '_blank')} />
        ]} />
      {children}
    </>
  );
};