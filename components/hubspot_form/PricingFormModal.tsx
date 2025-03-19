// //Pricing page BookDemo form

// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import HubspotForm from "./HubspotForm";

// interface PricingFormModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   formTitle: string;
//   formDescription?: string;
// }

// export function PricingFormModal({
//   isOpen,
//   onClose,
//   formTitle,
//   formDescription,
// }: PricingFormModalProps) {
//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent className="sm:max-w-[600px] w-[95vw] p-4 md:p-6 mt-12">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-center">
//             {formTitle}
//           </DialogTitle>
//           {formDescription && (
//             <DialogDescription className="text-center">
//               {formDescription}
//             </DialogDescription>
//           )}
//         </DialogHeader>
//         <div className="mt-4">
//           <HubspotForm
//             portalId="4401613"
//             formId="c2e945ca-53de-45b6-820f-8a8ded7b49e2"
//             formUrl="https://share.hsforms.com/2wulFylPeRbaCD4qN7XtJ4g2mcb1"
//             region="na1"
//             className="w-full "
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
