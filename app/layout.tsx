import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <title>Tobams group</title>
      </head>
      <body>        
        <ChakraProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}