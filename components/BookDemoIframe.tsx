// "use client"

// import { useState, useEffect } from "react"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
// import { Loader2 } from "lucide-react"


// interface BookDemoModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export function BookDemoIframeModal({ isOpen, onClose }: BookDemoModalProps) {
//   const [open, setOpen] = useState(isOpen)
//   const [isLoading, setIsLoading] = useState(true)
//   // Direct link to the HubSpot form
//   const formUrl = "https://share.hsforms.com/2d2eqnS8QRfiGXBPqcmP9Xg2mcb1"

//   useEffect(() => {
//     setOpen(isOpen)
//   }, [isOpen])

//   const handleOpenChange = (open: boolean) => {
//     setOpen(open)
//     if (!open) onClose()
//   }

//   const handleIframeLoad = () => {
//     setIsLoading(false)
//   }

//   return (
//     <Dialog open={open} onOpenChange={handleOpenChange} >
//       <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-center">Secure Your Spot</DialogTitle>
//           <DialogDescription className="text-center">
//           Fill in Your Details & Pick a Time! 
//           </DialogDescription>
//         </DialogHeader>
       
//         <div className="py-4 relative" style={{ height: "600px" }}>
//           {isLoading && (
//             <div className="flex flex-col items-center justify-center py-8 absolute inset-0 bg-white z-10">
//               <Loader2 className="h-8 w-8 animate-spin text-primary" />
//               <p className="mt-2 text-sm text-muted-foreground">Loading form...</p>
//             </div>
//           )}
//           <iframe
//             src={formUrl}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             marginHeight={0}
//             marginWidth={0}
//             style={{ border: "none" }}
//             onLoad={handleIframeLoad}
//             title="Book a Demo Form"
//             sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoIframeModal({ isOpen, onClose }: BookDemoModalProps) {
  const [open, setOpen] = useState(isOpen)
  const [isLoading, setIsLoading] = useState(true)
  // Direct link to the HubSpot form
  const formUrl = "https://share.hsforms.com/2d2eqnS8QRfiGXBPqcmP9Xg2mcb1"

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) onClose()
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] w-[92vw] max-h-[85vh] h-auto overflow-y-auto p-3 sm:p-4 md:p-6 mt-16 sm:mt-10 md:mt-6 rounded-xl">
        <DialogHeader className="pb-2 sm:pb-3">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center">Secure Your Spot</DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base">
            Fill in your details and select a convenient time for your personalized demo.
          </DialogDescription>
        </DialogHeader>

        <div className="py-2 relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh]">
          {isLoading && (
            <div className="flex flex-col items-center justify-center absolute inset-0 bg-background z-10">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
              {/* <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Loading HubSpot form...</p> */}
            </div>
          )}
          <iframe
            src={formUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              minHeight: "300px",
              overflow: "hidden",
            }}
            onLoad={handleIframeLoad}
            title="Book a Demo Form"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="bg-transparent"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

