import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";
import Header from "@/src/components/Header";
import BodyHeader from "@/src/components/BodyHeader";
import { ReduxProvider } from "@/src/redux";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Login or Register",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          {session?.user && (
            <div className="flex flex-col gap-2">
              <Header />
              <BodyHeader />
            </div>
          )}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
