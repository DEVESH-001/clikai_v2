"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [open, setOpen] = useState(isOpen);
  const formUrl = "https://share.hsforms.com/2d2eqnS8QRfiGXBPqcmP9Xg2mcb1";

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) onClose();
  };

  const openFormInNewTab = () => {
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book Your Demo
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill in your details and select a convenient time for your
            personalized demo.
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          <p className="text-center">
            Our booking form will open in a new tab where you can provide your
            information and select a time that works for you.
          </p>

          <div className="flex justify-center">
            <Image
              src="/Demo_form_image.jpg"
              alt="Demo booking illustration"
              className="rounded-lg shadow-md max-w-full h-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <DialogFooter className="flex justify-center sm:justify-center gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={openFormInNewTab} className="gap-2">
            Open Booking Form <ExternalLink size={16} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
