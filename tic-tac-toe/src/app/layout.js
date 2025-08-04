import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "@/context/color-context";
import { PointsProvider } from "@/context/points-context";
import { MessageProvider } from "@/context/message-context";
import { TimerProvider } from "@/context/timer-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tic Tac Toe Game",
  description: "Jogo da velha responsivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
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
