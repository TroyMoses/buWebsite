import { Oswald } from 'next/font/google';
import './css/globals.css';
import ResponsiveNav from '../components/Navbar/ResponsiveNav';
import Head from './head';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/Helper/ScrollToTop';
import StarsCanvas from '../components/StarsBackground/StarsBackground';

const oswald = Oswald({
    weight:['200','300','400','500','600','700'],
    subsets:['latin']
})

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head />
            <body className={oswald.className}>
                <ResponsiveNav />
                <StarsCanvas />
                { children }
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}