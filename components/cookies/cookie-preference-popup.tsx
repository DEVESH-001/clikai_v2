"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import {
  getCookieConsent,
  setCookiePreferences,
  type CookiePreferences,
} from "@/actions/cookies";

interface CookiePreferencesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePreferencesPopup({
  isOpen,
  onClose,
}: CookiePreferencesPopupProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const loadPreferences = async () => {
      const consent = await getCookieConsent();
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
      setIsLoading(false);
    };
    if (isOpen) {
      loadPreferences();
    }
  }, [isOpen]);

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savePreferences = async () => {
    await setCookiePreferences(preferences);
    onClose();
    window.location.reload();
  };

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-4">
          <h2
            id="cookie-preferences-title"
            className="text-xl font-bold dark:text-white"
          >
            Cookie Preferences
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            aria-label="Close cookie preferences"
          >
            <X size={20} />
          </button>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Necessary Cookies
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    These cookies are essential for the website to function
                    properly.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    These cookies help us understand how visitors interact with
                    our website through Google Analytics, Hotjar, and similar
                    tools.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={() => handlePreferenceChange("analytics")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Marketing Cookies
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    These cookies are used for marketing purposes and to deliver
                    personalized content through HubSpot, LinkedIn, and other
                    platforms.
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
          </>
        )}
      </div>
    </motion.div>
  );

  if (!isOpen || !mounted) return null;

  return createPortal(modalContent, document.body);
}


//old
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { X } from "lucide-react";
// import { CookiePreferences, getCookiePreferences, setCookiePreferences } from "@/actions/cookies";

// interface CookiePreferencesPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function CookiePreferencesPopup({
//   isOpen,
//   onClose,
// }: CookiePreferencesPopupProps) {
//   const [preferences, setPreferences] = useState<CookiePreferences>({
//     analytics: false,
//     marketing: false,
//   });

//   useEffect(() => {
//     const loadPreferences = async () => {
//       const savedPreferences = await getCookiePreferences();
//       setPreferences(savedPreferences);
//     };
//     loadPreferences();
//   }, []);

//   const handlePreferenceChange = (key: keyof CookiePreferences) => {
//     setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const savePreferences = async () => {
//     await setCookiePreferences(preferences);
//     onClose();
//     // Reload page to apply new preferences
//     window.location.reload();
//   };

//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//     >
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md dark:bg-gray-800">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Cookie Preferences</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//           >
//             <X size={20} />
//           </button>
//         </div>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold">Necessary Cookies</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 These cookies are essential for the website to function
//                 properly.
//               </p>
//             </div>
//             <Switch checked={true} disabled />
//           </div>
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold">Analytics Cookies</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 These cookies help us understand how visitors interact with our
//                 website through Google Analytics, Hotjar, and similar tools.
//               </p>
//             </div>
//             <Switch
//               checked={preferences.analytics}
//               onCheckedChange={() => handlePreferenceChange("analytics")}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold">Marketing Cookies</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 These cookies are used for marketing purposes and to deliver
//                 personalized content through HubSpot, LinkedIn, and other
//                 platforms.
//               </p>
//             </div>
//             <Switch
//               checked={preferences.marketing}
//               onCheckedChange={() => handlePreferenceChange("marketing")}
//             />
//           </div>
//         </div>
//         <div className="mt-6 flex justify-end">
//           <Button
//             onClick={savePreferences}
//             className="bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             Save Preferences
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
