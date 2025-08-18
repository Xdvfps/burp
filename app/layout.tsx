// /app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { BackgroundWave } from "@/components/background-wave";
import Link from "next/link";
import { CustomLogo, XLogo, DiscordLogo } from "@/components/logos";

export const metadata: Metadata = {
  title: "ConvAI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="antialiased w-full h-full flex flex-col">
        <div className="flex flex-col flex-grow w-full items-center justify-center sm:px-4">
          <nav className="sm:fixed w-full top-0 left-0 grid grid-cols-2 py-4 px-8">
            <div className="flex">
              <Link href="/" prefetch={true}>
                <CustomLogo className="h-[60px] w-auto hover:opacity-75" />
              </Link>
            </div>

            <div className="flex gap-4 justify-end">
              <Link
                href="https://x.com/omniburp"
                target="_blank"
                rel="noopener noreferrer"
                className="py-0.5"
                aria-label="Visit our X profile"
              >
                <XLogo className="w-5 h-5 hover:text-gray-500 text-[#24292f]" />
              </Link>
              <Link
                href="https://discord.gg/U3YBQwQX"
                target="_blank"
                rel="noopener noreferrer"
                className="py-0.5"
                aria-label="Join our Discord server"
              >
                <DiscordLogo className="w-5 h-5 hover:text-gray-500 text-[#24292f]" />
              </Link>
            </div>
          </nav>
          {children}
          <BackgroundWave />
        </div>
      </body>
    </html>
  );
}