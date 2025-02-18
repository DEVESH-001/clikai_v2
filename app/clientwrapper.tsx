"use client";

import { useState, useEffect } from "react";
import { CookiePreferencesPopup } from "@/components/cookie-preferences-pop-up";

const CHATBASE_SCRIPT_ID = "9pIzyyNSJ1VBc6J_w4KUZ";

export default function ClientWrapper() {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);

  useEffect(() => {
    if (!document.getElementById(CHATBASE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = CHATBASE_SCRIPT_ID;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <CookiePreferencesPopup
        isOpen={showCookiePreferences}
        onClose={() => setShowCookiePreferences(false)}
      />
    </>
  );
}
