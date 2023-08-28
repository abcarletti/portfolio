import useDarkMode from 'use-dark-mode';
import SunIcon from '@assets/icons/SunIcon';
import { Button } from '@nextui-org/react';
import MoonIcon from '@assets/icons/MoonIcon';

const DarkModeToggle = () => {
  const darkMode = useDarkMode();

  return (
    <div>
      <Button
        isIconOnly
        variant='light'
        onClick={darkMode.disable}
        className={darkMode.value ? '' : 'hidden'}
      >
        <SunIcon />
      </Button>
      <Button
        isIconOnly
        variant='light'
        onClick={darkMode.enable}
        className={darkMode.value ? 'hidden' : ''}
      >
        <MoonIcon />
      </Button>
    </div>
  );
};

export default DarkModeToggle;
