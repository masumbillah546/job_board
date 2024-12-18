import localFont from 'next/font/local'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/styles.scss'
import './globals.css'
import Header from '../components/header'
// import { store } from "../store";
// import { Provider } from "react-redux";
import { ThemeProvider } from '../context/ThemeContext'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'BD Job Board',
  description: 'Discover thousands of job opportunities with all the information you need',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
