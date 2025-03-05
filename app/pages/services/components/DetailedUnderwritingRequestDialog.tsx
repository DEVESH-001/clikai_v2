"use client";

import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GeistSans } from "geist/font/sans";

interface DetailedUnderwritingRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DetailedUnderwritingRequestDialog: React.FC<
  DetailedUnderwritingRequestDialogProps
> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted", { email, phone });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-[425px] ${GeistSans.className}`}>
        <DialogHeader>
          <DialogTitle>Request Detailed Underwriting</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* Remove the file input fields from the form */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedUnderwritingRequestDialog;
