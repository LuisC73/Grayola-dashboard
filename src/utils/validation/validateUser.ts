import { ValidationResult } from '@types';

export function validateUser(role: string): ValidationResult {
  if (role === 'default') {
    return { success: false, error: 'El rol no puede ser "default".' };
  }

  return { success: true, error: null };
}
