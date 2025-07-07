import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Néstor Bermejillo | Game Developer",
  description: "Game Development student specializing in Unity 3D, VR and competitive programming. 3D modeling expert with Maya/Blender. Madrid-based developer.",
  keywords: [
    "Unity Developer",
    "Unreal Developer",
    "3D Artist",
    "Game Programmer",
    "VR Development",
    "Competitive Programming",
    "Algorithms",
    "Néstor Bermejillo",
    "Madrid Game Dev"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}