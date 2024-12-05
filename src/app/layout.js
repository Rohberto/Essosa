
import localFont from "next/font/local";
import "./globals.css";
import "./minicollection.css";
import "./shop.css";
import "./about.css";
import "./order.css";
import Navbar from "./Components/Navbar";
import Head from 'next/head';
import ClientScrollProvider from "./Utils/locomotive";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Demo = localFont({
  src: "./fonts/Demo/Demo_Fonts/Fontspring-DEMO-theseasons-reg.otf",
  variable: "--font-demo-reg",
  weight: "regular"
})
const demoBold = localFont({
  src: "./fonts/Demo/Demo_Fonts/Fontspring-DEMO-theseasons-bd.otf",
  variable: "--font-demo-bold",
  weight: "bold"
})
const Season = localFont({
  src: "./fonts/Seasons/Demo_Fonts/Fontspring-DEMO-theseasons-reg.otf",
  variable: "--font-season-reg",
  weight: "regular"
})
const seasonBold = localFont({
  src: "./fonts/Seasons/Demo_Fonts/Fontspring-DEMO-theseasons-bd.otf",
  variable: "--font-season-bold",
  weight: "bold"
})



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        {/* Google Font Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${Demo.variable} ${demoBold.variable} ${Season.variable} ${seasonBold.variable}`}>
 
       <Navbar/>
        {children}
     
      </body>

    </html>
  );
}
