import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "@/app/dashboardWrapper";
import React from "react";


export const metadata: Metadata = {
  title: "Shedly",
  description: "Manage And Track Your Projects And Tasks Very Efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <DashboardWrapper>
            {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
