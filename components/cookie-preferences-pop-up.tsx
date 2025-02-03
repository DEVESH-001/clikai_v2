"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";

interface CookiePreferencesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePreferencesPopup({
  isOpen,
  onClose,
}: CookiePreferencesPopupProps) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences here
  }, []);

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savePreferences = () => {
    // Save preferences logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cookie Preferences</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
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
                These cookies help us improve our website by collecting usage
                information.
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
                These cookies are used to deliver personalized advertisements.
              </p>
            </div>
            <Switch
              checked={preferences.marketing}
              onCheckedChange={() => handlePreferenceChange("marketing")}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={savePreferences}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
