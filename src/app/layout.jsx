import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import localfont from "next/font/local";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tenzin Delek",
  description: "Portfolio of Tenzin Delek for development and design",
  openGraph: {
    title: "Tenzin Delek Portfolio",
    description: "Portfolio of Tenzin Delek for development and design",
    url: "https://tenzindelekportfolio.vercel.app/",
    siteName: "Tenzin Portfolio",
    images: [
      {
        url: "https://tenzindelekportfolio.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PORTFOLIO 2024",
      },
    ],
  },
};

const overused = localfont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
      weight: "800",
    },
  ],
  variable: "--font-overused",
});
const satoshilight = localfont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.ttf",
      weight: "200",
    },
  ],
  variable: "--font-satoshiregular",
});
const satoshi = localfont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});
const ppeditorial = localfont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Regular.otf",
      weight: "300",
    },
  ],
  variable: "--font-editorial",
});
const ppeditoriallight = localfont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Ultralight.otf",
      weight: "100",
    },
  ],
  variable: "--font-editoriallight",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
<Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GANALYTIC}`}></Script>
<Script id="google-analytics">
  {
 ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-WWYNXLK6SX');`
  }

</Script>
      </head> */}
      <head>
        <Script
        id="gtm"
        strategy="afterInteractive"
         dangerouslySetInnerHTML={{
          __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MJ2SH7S');`
        }}>
        
        </Script>
      </head>
      <body
        className={`${inter.className} ${overused.variable} ${ppeditoriallight.variable} ${ppeditorial.variable} ${satoshi.variable} ${satoshilight.variable}`}
      >
        <div className=" m-auto  flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
        <GoogleTagManager gtmId="GTM-5MJ2SH7S" />
      </body>
    </html>
  );
}
