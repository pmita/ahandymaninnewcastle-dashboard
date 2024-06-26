import type { Metadata } from "next";
// UTILS
import { roboto, poppins } from "@/utils/fonts";
// CONTEXT
import { AuthContextProvider } from "@/context/AuthContext";
// UTILS
import { cn } from "@/utils/helpers";
// STYLES
import '@/styles/global.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body 
        className={cn(
          "min-h-screen bg-secondary font-roboto antialiased",
          roboto.variable,
          poppins.variable
        
        )}
      >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
