import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "@/context/color-context";
import { PointsProvider } from "@/context/points-context";
import { MessageProvider } from "@/context/message-context";
import { TimerProvider } from "@/context/timer-context";
import { APP_TITLE, APP_DESCRIPTION, APP_LANGUAGE } from "@/constants/constantes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang={APP_LANGUAGE}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ColorProvider>
          <PointsProvider>
            <TimerProvider>
              <MessageProvider>
                {children}
              </MessageProvider>
            </TimerProvider>
          </PointsProvider>
        </ColorProvider>
      </body>
    </html>
  );
}
