//file validation in UnderWriting Section

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function validateFile(file: File) {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds 10MB limit. Current size: ${(
        file.size /
        (1024 * 1024)
      ).toFixed(2)}MB`,
    };
  }

  // Check file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file type: ${file.type}. Allowed types: PDF, Excel, CSV`,
    };
  }

  // Check for suspicious file extensions
  const fileName = file.name.toLowerCase();
  const suspiciousExtensions = [".exe", ".bat", ".cmd", ".sh", ".php", ".js"];
  if (suspiciousExtensions.some((ext) => fileName.endsWith(ext))) {
    return {
      valid: false,
      error: `Suspicious file extension detected: ${fileName}`,
    };
  }

  return { valid: true, error: null };
}

export function sanitizeFileName(fileName: string) {
  // Remove path components and special characters
  return fileName
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\.\./g, "")
    .trim();
}
