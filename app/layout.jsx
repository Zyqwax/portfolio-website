import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Enes Samed Gözlü | Portföy',
  description: "Yazılım öğrencisi Enes Samed Gözlü'nün portföy sitesi. Yaratıcı projeler, yazılım geliştirme deneyimleri ve teknoloji hakkındaki bilgiler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content="Enes Samed Gözlü'nün portföy sitesi. Yazılım öğrencisi ve frontend, backend teknolojilerinde yetkin, yaratıcı projeler ve deneyimler." />
        <meta name='keywords' content='Enes Samed Gözlü, yazılım öğrencisi, frontend, backend, React, Next.js, Python, Django, portföy, yazılım geliştirme, web geliştirme' />
        <meta name='author' content='Enes Samed Gözlü' />
        <meta property='og:title' content='Enes Samed Gözlü - Portföy' />
        <meta property='og:description' content="Yazılım öğrencisi Enes Samed Gözlü'nün portföy sitesi. Yaratıcı projeler, yazılım geliştirme deneyimleri ve teknoloji hakkındaki bilgiler." />
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:url' content='https://enessamedgozlu.me/' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
