import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
});

const morangaBlack = localFont({
  src: [
    { path: "./fonts/MorangaBlack.woff2", weight: "900" },
    { path: "./fonts/MorangaBlack.woff", weight: "900" },
  ],
  variable: "--font-moranga-black",
});

const morangaRegular = localFont({
  src: [
    { path: "./fonts/MorangaRegular.woff2", weight: "400" },
    { path: "./fonts/MorangaRegular.woff", weight: "400" },
  ],
  variable: "--font-moranga-regular",
});
export const metadata = {
  title: "Spiky Sprouts",
  description:
    "Discover spiky wonders! Explore our curated cacti collection for all plant lovers. Shop now at Spiky Sprouts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${morangaBlack.variable} ${morangaRegular.variable} bg-primary font-geist min-w-80 bg-[url(/assets/NoiceTexture.png)] text-white/87 bg-blend-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
