import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className="h-full">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
