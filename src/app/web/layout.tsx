import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elson Ramos - Web Developer",
  description: "Elson Ramos is a Ontario-based web developer who specializes in creating performant full stack apps using Node.js, React and React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
