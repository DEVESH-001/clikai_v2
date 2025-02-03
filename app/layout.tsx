
// import { GeistSans } from "geist/font/sans";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import "@/app/globals.css";

// import { useState } from "react";
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={GeistSans.className}>
//       <body className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
'use client'
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsentBanner } from "@/components/cookie-consent";

import "@/app/globals.css";
import { useState } from "react";
import { CookiePreferencesPopup } from "@/components/cookie-preferences-pop-up";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer
          onOpenCookiePreferences={() => setShowCookiePreferences(true)}
        />
        <CookieConsentBanner
          onOpenPreferences={() => setShowCookiePreferences(true)}
        />
        <CookiePreferencesPopup
          isOpen={showCookiePreferences}
          onClose={() => setShowCookiePreferences(false)}
        />
      </body>
    </html>
  );
}

