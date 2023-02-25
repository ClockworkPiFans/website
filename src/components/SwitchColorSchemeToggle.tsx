import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function SwitchColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<FaSun color={theme.white} size={20} />}
        offLabel={<FaMoon color={theme.colors.gray[6]} size={20} />}
      />
    </Group>
  );
}