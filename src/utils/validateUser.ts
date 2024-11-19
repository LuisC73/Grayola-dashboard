import { ValidationResult } from "@/types";

export function validateUser(username: string, role: string): ValidationResult {
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

  if (!usernameRegex.test(username)) {
    return { success: false, error: 'El nombre de usuario debe tener al menos 3 caracteres y solo puede contener letras, números y guiones bajos.' };
  }

  if (role === 'default') {
    return { success: false, error: 'El rol no puede ser "default".' };
  }

  return { success: true, error: null };
}
