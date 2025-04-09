"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle } from "lucide-react"

interface ResultsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  underwritingScore: number
  riskFlags: Array<{
    type: string
    message: string
  }>
  bestLenderFit: string
  suggestedAdjustments: string
}

export default function ResultsDialog({
  open,
  onOpenChange,
  underwritingScore,
  riskFlags,
  bestLenderFit,
  suggestedAdjustments,
}: ResultsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] w-[95vw] p-4 md:p-6 mt-16 sm:mt-12 md:mt-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Deal Analysis Results</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] sm:h-[60vh] md:h-auto pr-4">
          <div className="space-y-6">
            {/* Underwriting Score */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Underwriting Score</h3>
              <Progress value={underwritingScore} className="h-2 mb-1" />
              <p className="text-lg font-medium">{underwritingScore}%</p>
            </div>

            {/* Risk Flags */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Risk Flags</h3>
              <ul className="space-y-2">
                {riskFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`inline-block w-2 h-2 mt-2 mr-2 rounded-full ${
                        flag.type === "high" ? "bg-red-500" : flag.type === "medium" ? "bg-yellow-500" : "bg-green-500"
                      }`}
                    />
                    <span className="text-sm">{flag.message}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Lender Fit */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Best Lender Fit</h3>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-lg">{bestLenderFit}</span>
              </div>
            </div>

            {/* Suggested Adjustments */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Suggested Adjustments</h3>
              <p className="text-sm text-gray-600">{suggestedAdjustments}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

