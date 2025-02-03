import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { GeistSans } from "geist/font/sans";

interface ResultsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  underwritingScore: number;
  riskFlags: Array<{ type: string; message: string }>;
  bestLenderFit: string;
  suggestedAdjustments: string;
}

const ResultsDialog: React.FC<ResultsDialogProps> = ({
  open,
  onOpenChange,
  underwritingScore,
  riskFlags,
  bestLenderFit,
  suggestedAdjustments,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-[425px] ${GeistSans.className}`}>
        <DialogHeader>
          <DialogTitle>Deal Analysis Results</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">Underwriting Score</h3>
            <motion.div
              className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${underwritingScore}%` }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-full bg-blue-600"
                style={{ width: `${underwritingScore}%` }}
              ></div>
            </motion.div>
            <div className="text-xs text-gray-500 mt-1">
              {underwritingScore}%
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Risk Flags</h3>
            {riskFlags.map((flag, index) => (
              <div
                key={index}
                className={`flex items-center text-xs mb-1 text-${
                  flag.type === "high"
                    ? "red"
                    : flag.type === "medium"
                    ? "orange"
                    : "green"
                }-600`}
              >
                <AlertTriangle className="w-3 h-3 mr-1" />
                <span>{flag.message}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Best Lender Fit</h3>
            <div className="flex items-center text-xs">
              <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
              <span>{bestLenderFit}</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Suggested Adjustments
            </h3>
            <p className="text-xs text-gray-700">{suggestedAdjustments}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultsDialog;
