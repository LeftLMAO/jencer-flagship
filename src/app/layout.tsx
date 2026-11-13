import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ subsets:["latin"], weight:["400","500","600"], style:["normal","italic"], variable:"--font-display" });
const sans = Plus_Jakarta_Sans({ subsets:["latin"], weight:["400","500","600"], variable:"--font-sans" });
const mono = JetBrains_Mono({ subsets:["latin"], weight:["400","500"], variable:"--font-mono" });
const arabic = IBM_Plex_Sans_Arabic({ subsets:["arabic"], weight:["400","500","600"], variable:"--font-arabic" });
export const metadata: Metadata = { title:"Jencer Food Trading | A world of good taste", description:"International ingredients for professional kitchens and food businesses across Iraq." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${display.variable} ${sans.variable} ${mono.variable} ${arabic.variable}`}>{children}</body></html>; }
