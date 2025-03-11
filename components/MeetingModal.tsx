// "use client"

// import { useEffect, useState } from "react"
// import { X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import HubspotMeetings from "./HubspotMeeting"


// interface MeetingsModalProps {
//   isOpen: boolean
//   onClose: () => void
//   meetingUrl: string
// }

// export default function MeetingsModal({ isOpen, onClose, meetingUrl }: MeetingsModalProps) {
//   const [isMounted, setIsMounted] = useState(false)

//   // Handle escape key press
//   useEffect(() => {
//     setIsMounted(true)

//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose()
//     }

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscape)
//       // Prevent scrolling when modal is open
//       document.body.style.overflow = "hidden"
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape)
//       document.body.style.overflow = "auto"
//     }
//   }, [isOpen, onClose])

//   if (!isMounted) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
//               aria-label="Close"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             <div className="p-6 pt-10">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
//               <div className="h-[600px]">
//                 <HubspotMeetings url={meetingUrl} className="w-full h-full" />
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import HubspotMeetings from "./HubspotMeeting"

interface MeetingsModalProps {
  isOpen: boolean
  onClose: () => void
  meetingUrl: string
}

export default function MeetingsModal({ isOpen, onClose, meetingUrl }: MeetingsModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Handle escape key press
  useEffect(() => {
    setIsMounted(true)

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl mt-16" // Added mt-16 for top margin
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
              <div className="h-[600px]">
                <HubspotMeetings url={meetingUrl} className="w-full h-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}