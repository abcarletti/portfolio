import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from '@nextui-org/react';
import DarkModeToggle from '../DarkMode/dark-mode';
import useDarkMode from 'use-dark-mode';

const CustomNavBar = () => {
  const darkMode = useDarkMode();
  return (
    <Navbar isBlurred>
      <NavbarContent>
        <NavbarBrand>
          <p className='font-bold text-inherit text-lg'>
            <span className='text-success'>#</span>abcarletti
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <DarkModeToggle />
        </NavbarItem>
        <NavbarItem>
          <Avatar
            className={`${darkMode.value ? 'grayscale' : ''}`}
            style={{
              transform: 'scaleX(-1)',
            }}
            radius='sm'
            src='/src/assets/images/icono.webp'
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavBar;
