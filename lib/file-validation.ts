export type FileValidationResult = {
  valid: boolean;
  error?: string;
};

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function validateFile(file: File): FileValidationResult {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds the maximum allowed size of ${
        MAX_FILE_SIZE / (1024 * 1024)
      }MB`,
    };
  }

  // Check file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `File type ${file.type} is not allowed. Allowed types: PDF, Excel`,
    };
  }

  // Check file name for suspicious patterns
  const fileName = file.name.toLowerCase();
  const suspiciousPatterns = [
    ".exe",
    ".js",
    ".php",
    ".asp",
    ".aspx",
    ".jsp",
    ".cgi",
    ".bat",
    ".cmd",
    ".sh",
  ];

  if (suspiciousPatterns.some((pattern) => fileName.includes(pattern))) {
    return {
      valid: false,
      error: "File name contains suspicious patterns",
    };
  }

  return { valid: true };
}

// Additional function to sanitize file names
export function sanitizeFileName(fileName: string): string {
  // Remove any path information
  const name = fileName.split(/[/\\]/).pop() || "";

  // Replace any non-alphanumeric characters except for periods, underscores, and hyphens
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}
