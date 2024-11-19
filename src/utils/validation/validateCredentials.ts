import { ValidationResult } from '@types';

export function validateCredentials(email: string, password: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  if (!emailRegex.test(email)) {
    return { success: false, error: 'Formato de correo electrónico inválido' };
  }

  if (!passwordRegex.test(password)) {
    return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
  }

  return { success: true, error: null };
}
