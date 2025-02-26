"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface CookiePreferencesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePreferencesPopup({
  isOpen,
  onClose,
}: CookiePreferencesPopupProps) {
  const [mounted, setMounted] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    localStorage.setItem("cookieConsent", "customized");
    onClose();
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            style={{ height: "100vh", width: "100vw" }}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[10000]">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-[90%] max-w-md bg-white rounded-lg shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Cookie Preferences</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Necessary Cookies</h3>
                    <p className="text-sm text-gray-500">
                      These cookies are essential for the website to function
                      properly.
                    </p>
                  </div>
                  <Switch checked={preferences.necessary} disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Analytics Cookies</h3>
                    <p className="text-sm text-gray-500">
                      These cookies help us improve our website by collecting
                      usage information.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={() => handlePreferenceChange("analytics")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Marketing Cookies</h3>
                    <p className="text-sm text-gray-500">
                      These cookies are used to deliver personalized
                      advertisements.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={() => handlePreferenceChange("marketing")}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end pt-4 border-t">
                <Button
                  onClick={savePreferences}
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  Save Preferences
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
