import Link from 'next/link'
import { CLASSES } from '../../assets/styles/styles'
import { Button } from 'react-bootstrap'
// import NotificationSmallView from '../../pages/main/notifications/components/NotificationSmallView'

import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{height: '40px', width: '40px'}} className="d-flex align-items-center justify-content-center">
      {/* Switch to {theme === "light" ? "Dark" : "Light"} Mode */}
      {theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>}
    </button>
  );
}


function ButtonsSection() {
  return (
    <div className={CLASSES.items_center + ' gap-3'}>
      <ThemeToggle/>
      {/* <NotificationSmallView /> */}
      <Link href={'/auth/login'} className={CLASSES.items_center}>
        {/* Login */}
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1085_1106)">
          <path d="M14 28C12.0571 28 10.1754 27.6101 8.40967 26.84C6.70196 26.0957 5.18113 25.0357 3.88907 23.6856C1.38228 21.0661 0 17.6281 0 14C0 12.1119 0.370541 10.2785 1.10196 8.55144C1.8076 6.88562 2.81611 5.38734 4.10173 4.10173C5.38734 2.81611 6.88562 1.8076 8.55144 1.10196C10.2785 0.370541 12.1119 0 14 0C15.8881 0 17.7247 0.370541 19.4486 1.10196C21.1144 1.8076 22.6127 2.81611 23.8983 4.10173C25.1839 5.38734 26.1924 6.88562 26.898 8.55144C27.6295 10.2785 28 12.1119 28 14C28 17.6281 26.6177 21.0661 24.1109 23.6856C22.8189 25.0357 21.298 26.0957 19.5903 26.84C17.8246 27.6101 15.9429 28 14 28ZM14 1.06329C6.86628 1.06329 1.06329 6.86628 1.06329 14C1.06329 17.351 2.33924 20.528 4.65915 22.9478C7.12083 25.5222 10.4396 26.9367 14 26.9367C17.5604 26.9367 20.8792 25.519 23.3441 22.9478C25.6608 20.5312 26.9367 17.351 26.9367 14C26.9367 6.86628 21.1337 1.06329 14 1.06329Z" fill="rgb(18, 64, 90)"/>
          <path d="M14.0008 16.3134C10.6917 16.3134 7.99805 13.6198 7.99805 10.3107C7.99805 7.00159 10.6917 4.30792 14.0008 4.30792C17.3099 4.30792 20.0036 7.00159 20.0036 10.3107C20.0036 13.6198 17.3099 16.3134 14.0008 16.3134ZM14.0008 5.30677C11.2427 5.30677 8.9969 7.55257 8.9969 10.3107C8.9969 13.0688 11.2427 15.3146 14.0008 15.3146C16.7589 15.3146 19.0047 13.0688 19.0047 10.3107C19.0047 7.55257 16.7589 5.30677 14.0008 5.30677Z" fill="black"/>
          <path d="M13.9994 27.9678C12.2724 27.9678 10.5099 27.6617 8.90853 27.0849C7.15893 26.4534 5.64777 25.5061 4.53293 24.3429C4.41693 24.2237 4.30094 24.0948 4.18816 23.9692L4.0625 23.8274V23.6373C4.0625 22.574 4.23327 21.6654 4.5877 20.8631C4.96469 20.006 5.55433 19.2842 6.34052 18.7139C7.9709 17.5347 10.4777 16.9611 13.9994 16.9611C15.8038 16.9611 17.3762 17.1287 18.6747 17.4638C19.912 17.7828 20.9398 18.2596 21.7325 18.8879C22.4768 19.4776 23.0342 20.2122 23.3822 21.0725C23.6915 21.8361 23.8494 22.719 23.8494 23.7017V23.8918L23.7237 24.0336C23.6109 24.1593 23.495 24.2849 23.379 24.4074C22.2802 25.5544 20.7497 26.4921 18.955 27.1204C17.3859 27.6681 15.6266 27.9678 13.9994 27.9678ZM5.06457 23.4472C5.12901 23.5149 5.19023 23.5825 5.25468 23.6502C7.21693 25.6962 10.5679 26.9689 13.9994 26.9689C16.5546 26.9689 20.3566 26.1183 22.6572 23.7146C22.7217 23.647 22.7829 23.5793 22.8473 23.5116C22.8086 21.8233 22.2383 20.5634 21.1106 19.6709C19.6768 18.5367 17.286 17.96 13.9994 17.96C10.6968 17.96 8.38333 18.4723 6.92694 19.5259C5.71543 20.3991 5.10646 21.6847 5.06457 23.4472Z" fill="rgb(18, 64, 90)"/>
          </g>
          <defs>
          <clipPath id="clip0_1085_1106">
          <rect width="28" height="28" fill="white"/>
          </clipPath>
          </defs>
          </svg>

      </Link>
      {/* <Button href={'/auth/register'} style={{backgroundColor: '#171717'}} className={CLASSES.items_center}>
        Register
      </Button> */}
    </div>
  )
}

export default ButtonsSection