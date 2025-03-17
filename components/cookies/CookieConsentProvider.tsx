"use client";

import type React from "react";

import { useState } from "react";
import { CookieBanner } from "./CookiesBanner";
import { CookiePreferencesPopup } from "./cookie-preference-popup";

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const openPreferences = () => setIsPreferencesOpen(true);
  const closePreferences = () => setIsPreferencesOpen(false);

  return (
    <>
      {children}
      <CookieBanner onOpenPreferences={openPreferences} />
      <CookiePreferencesPopup
        isOpen={isPreferencesOpen}
        onClose={closePreferences}
      />
    </>
  );
}
