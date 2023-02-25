import { UnstyledButton } from '@mantine/core';
import { MouseEventHandler, ReactElement } from 'react';

interface IconButtonProps {
  icon: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <UnstyledButton onClick={onClick}>
      {icon}
    </UnstyledButton>
  );
};