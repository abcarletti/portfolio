import CustomNavBar from '@components/Navbar/nav-bar';
import useDarkMode from 'use-dark-mode';

import Timeline from '@components/Timeline/timeline';
import Intro from '@components/Intro/intro';

import './App.css';

function App() {
  const darkMode = useDarkMode();
  return (
    <div className={`${darkMode.value ? 'dark' : ''} text-foreground bg-background`}>
      <main className='w-full min-h-screen flex justify-center'>
        <div className='flex max-w-6xl flex-col'>
          <CustomNavBar />
          <Intro />
          <Timeline />
        </div>
      </main>
      <footer className='flex justify-center items-center w-full h-14'>
        <p className='text-foreground'>Made with ❤️ by <span className='text-success'>Ángel Bolado Carletti</span></p>
      </footer>
    </div>
  );
}

export default App;
