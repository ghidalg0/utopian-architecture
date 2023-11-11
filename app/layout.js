import { Architects_Daughter } from "next/font/google";
import "./globals.css";

const archi = Architects_Daughter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Utopian Architecture",
  description:
    "Explore visionary landscapes, where dream and design converge seamlessly, unveiling a utopian tapestry of architectural innovation and boundless possibilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archi.className}>{children}</body>
    </html>
  );
}
