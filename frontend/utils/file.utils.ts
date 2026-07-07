import { ALLOWED_FILE_TYPES, ALLOWED_RESUME_EXTENSIONS, MAX_FILE_SIZE } from '@/constants/brand.constants'

/** Validate a resume file — type, extension, and size */
export function validateResumeFile(file: File): { valid: boolean; error?: string } {
  if (!ALLOWED_FILE_TYPES.some((t) => t === file.type)) {
    return { valid: false, error: `File type not supported. Allowed: ${ALLOWED_RESUME_EXTENSIONS.join(', ')}` }
  }
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'File size exceeds 10MB limit' }
  }
  return { valid: true }
}

/** Get file extension from filename */
export function getFileExtension(filename: string): string {
  return filename.slice(filename.lastIndexOf('.')).toLowerCase()
}
