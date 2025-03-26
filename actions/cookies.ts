"use server";

import { cookies } from "next/headers";

export type CookiePreferences = {
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsent = {
  hasConsented: boolean;
} & CookiePreferences;

export async function getCookieConsent(): Promise<CookieConsent> {
  const cookieStore = cookies();
  const consent = cookieStore.get("cookie-consent");

  if (!consent?.value) {
    return {
      hasConsented: false,
      analytics: false,
      marketing: false,
    };
  }

  try {
    return JSON.parse(consent.value);
  } catch (e) {
    console.error("Error parsing cookie consent:", e);
    return {
      hasConsented: false,
      analytics: false,
      marketing: false,
    };
  }
}

export async function setCookieConsent(consent: CookieConsent) {
  const cookieStore = cookies();
  cookieStore.set("cookie-consent", JSON.stringify(consent), {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function getCookiePreferences(): Promise<CookiePreferences> {
  const consent = await getCookieConsent();
  return {
    analytics: consent.analytics,
    marketing: consent.marketing,
  };
}

export async function setCookiePreferences(preferences: CookiePreferences) {
  const currentConsent = await getCookieConsent();
  await setCookieConsent({
    ...currentConsent,
    ...preferences,
    hasConsented: true,
  });
}
