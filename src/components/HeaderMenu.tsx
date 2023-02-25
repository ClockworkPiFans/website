import { createStyles, Header, Menu, Group, Center, Burger, Container, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import SegmentedToggle from './SwitchColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  inner: {
    height: 74,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'flex',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    justifyContent: 'space-between',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    startIcon?: ReactElement;
    links?: {
      link: string;
      label: string;
      startIcon?: ReactElement;
    }[]
  }[];
  extraElements?: ReactElement[];
}

export default function HeaderMenu({ links, extraElements }: HeaderSearchProps) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const onLinkClick = (event: any, link: string): void => {
    event.preventDefault();
    router.push(link);;
  };

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} onClick={() => router.push(item.link)}>
        <Group spacing={6}>
          {item.startIcon}
          {item.label}
        </Group>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => onLinkClick(event, link.link)}
            >
              <Center>
                <Group spacing={6}>
                  {link.startIcon}
                  {link.label}
                </Group>
                <FiChevronDown size={12} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }



    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => onLinkClick(event, link.link)}
      >
        <Group spacing={6}>
          {link.startIcon}
          {link.label}
        </Group>
      </a>
    );
  });

  return (
    <Header height={74}>
      <Container style={{ maxWidth: "90%" }}>
        <div className={classes.inner}>
          <UnstyledButton onClick={() => router.push('/')}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={220}
              height={48}
              priority
            />
          </UnstyledButton>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <div className={classes.toolbar}>
            <Group spacing={20}>
              {
                extraElements?.map((el) => el)
              }
              <SegmentedToggle />
            </Group>
          </div>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </Header>
  );
}