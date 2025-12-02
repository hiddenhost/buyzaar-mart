"use client";

import WhatsAppButton from "./components/whatsappButton";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
