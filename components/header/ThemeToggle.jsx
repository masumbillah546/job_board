import { useTheme } from '../../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const color = theme == 'dark' ? 'white' : 'black'

  return (
    <div
      onClick={toggleTheme}
      style={{ height: '40px', width: '40px' }}
      className='d-flex align-items-center justify-content-center pointer'
    >
      {/* Switch to {theme === "light" ? "Dark" : "Light"} Mode */}
      {theme === 'light' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-sun h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        >
          <circle cx='12' cy='12' r='4'></circle>
          <path d='M12 2v2'></path>
          <path d='M12 20v2'></path>
          <path d='m4.93 4.93 1.41 1.41'></path>
          <path d='m17.66 17.66 1.41 1.41'></path>
          <path d='M2 12h2'></path>
          <path d='M20 12h2'></path>
          <path d='m6.34 17.66-1.41 1.41'></path>
          <path d='m19.07 4.93-1.41 1.41'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-moon absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
        </svg>
      )}
    </div>
  )
}

export default ThemeToggle
