import { Center, Group, Text } from "@mantine/core";
import { useTranslation } from "next-i18next";
import { FaInfoCircle } from "react-icons/fa";

export default function Developing() {

  const { t } = useTranslation('common');

  return (
    <Center style={{ width: '100%', height: '90vh' }}>
      <Group spacing={6}>
        <FaInfoCircle />
        <Text>{t('developing-description')}</Text>
      </Group>
    </Center>
  );
};