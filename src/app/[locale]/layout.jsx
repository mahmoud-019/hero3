
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import"./globals.css"
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export const metadata = {
  title: 'hero one',
  description: '...',
}

export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = getLangDir(locale);
  return (
    <html lang={locale} dir={direction} >
      <body className='  pt-[90px] max-md:pt-28 max-sm:pt-32 '>
        
        <NextIntlClientProvider  messages={messages} >
          
        <Header/>
        <main>
       {children}
        </main>
        
          
          
          <Footer/>
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}