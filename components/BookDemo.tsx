//LATEST

"use client"
import { BookDemoIframeModal } from "./BookDemoIframe"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {  FormInput } from "lucide-react"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [open, setOpen] = useState(isOpen)
  // Use the BookDemoIframeModal component instead
  const [showIframeModal, setShowIframeModal] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) onClose()
  }

  const handleOpenForm = () => {
    setShowIframeModal(true)
    setOpen(false)
  }

  const handleCloseIframeModal = () => {
    setShowIframeModal(false)
    onClose()
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Secure Your Spot</DialogTitle>
            <DialogDescription className="text-center">
            Fill in Your Details & Pick a Time!
            </DialogDescription>
          </DialogHeader>
            <div className="flex justify-center mt-2 ">
            <Image
              src={"/Demo_form_image.svg"}
              alt="Demo booking illustration"
              className="rounded-lg shadow-md max-w-full h-auto"
              width={200}
              height={200}
            />
            </div>
          <DialogFooter className="flex justify-center sm:justify-center gap-2 mt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleOpenForm} className="gap-2">
              Open Booking Form <FormInput size={16} />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {showIframeModal && <BookDemoIframeModal isOpen={showIframeModal} onClose={handleCloseIframeModal} />}
    </>
  )
}



//OLD
// "use client";

// import { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";
// import Image from "next/image";

// interface BookDemoModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
//   const [open, setOpen] = useState(isOpen);
//   const formUrl = "https://share.hsforms.com/2d2eqnS8QRfiGXBPqcmP9Xg2mcb1";

//   useEffect(() => {
//     setOpen(isOpen);
//   }, [isOpen]);

//   const handleOpenChange = (open: boolean) => {
//     setOpen(open);
//     if (!open) onClose();
//   };

//   const openFormInNewTab = () => {
//     window.open(formUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <Dialog open={open} onOpenChange={handleOpenChange}>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-center">
//           Secure Your Spot
//           </DialogTitle>
//           <DialogDescription className="text-center">
//           Fill in Your Details & Pick a Time!
//           </DialogDescription>
//         </DialogHeader>

//         <div className="py-6 space-y-4">
         

//           <div className="flex justify-center">
//             <Image
//               src="/Demo_form_image.svg"
//               alt="Demo booking illustration"
//               className="rounded-lg shadow-md max-w-full h-auto"
//               width={200}
//               height={200}
//             />
//           </div>
//         </div>

//         <DialogFooter className="flex justify-center sm:justify-center gap-2">
//           <Button variant="outline" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button onClick={openFormInNewTab} className="gap-2">
//             Open Booking Form <ExternalLink size={16} />
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

