import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ReduxProvider from '@/redux/reduxProvider'

export const metadata = {
  title: 'Nike Shop',
  description: 'A Nike Store Made by Jitender Kumar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className='scrollbar mx-auto max-w-[1280px] px-4 sm:px-10 flex flex-col justify-between min-h-screen' >
        <Navbar />
        <div className='flex flex-col flex-grow '>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </div>
        <Footer />
      </body>
    </html>
  )
}
