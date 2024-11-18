import { ChangeEvent, FormEvent, ReactNode } from 'react';

// General
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Components ui
export interface AlertProps {
  type: 'Error' | 'Info';
  title: string;
  description: string;
}

export interface AlertModalProps extends AlertProps {
  onClose: () => void;
}

export interface ButtonProps {
  label: string;
  icon?: IconProps;
  ariaLabel?: string;
  style: 'Primary' | 'Secondary';
  isSubmit?: boolean;
  parentMethod?: () => void;
}

export interface ButtonLinkProps {
  label: string;
  href: string;
  title: string;
  style: 'Primary' | 'Secondary';
}

export interface HeaderProps {
  logo: ImageProps;
  buttons?: ButtonLinkProps[];
}

export interface IconProps {
  name: string;
  size: number;
  color?: string;
}

export interface IconLinkProps {
  icon: IconProps;
  href: string;
  title: string;
  ariaLabel: string;
}

export interface InputProps {
  id: string;
  type: 'text' | 'email' | 'password';
  label: string;
  isRequired: boolean;
  parentMethod?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export interface SelectOptionsProps {
  id: string;
  label: string;
} 

export interface SelectProps extends Omit<InputProps, 'type' | 'parentMethod'> {
  initialOption: string;
  options: SelectOptionsProps[];
  parentMethod?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface SideBarsProps {
  logo: ImageProps;
  items: { icon: IconProps; label: string; title: string; href: string }[];
  button: ButtonProps;
}

// Components forms
export interface LoginFormProps {
  onLogin: (e: FormEvent) => void;
  onEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string | null;
}

export interface RegisterFormProps extends Omit<LoginFormProps, 'onLogin'> {
  onRegister: (e: FormEvent) => void;
}

export interface CreateUserFormProps {
  onCreate: (e: FormEvent) => void;
  onName: (e: ChangeEvent<HTMLInputElement>) => void;
  onRole: (e: ChangeEvent<HTMLSelectElement>) => void;
  errorMsg: string | null;
}

export interface CreateProjectFormProps {
  onSubmit: (e: FormEvent) => void;
  changeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  changeDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string | null;
}

export interface EditProjectFormProps extends CreateProjectFormProps {
  changeDesigner: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: DesignerProps[];
}

// Content
export interface HomeProps {
  title: string;
  description: string;
  button: ButtonLinkProps;
  socialMedia: IconLinkProps[];
  image: ImageProps;
}

export interface AuthProps {
  logo: ImageProps;
  title: string;
  description: string;
  subtitle: string;
  button: ButtonLinkProps;
}

export interface RegisterPagesProps {
  title: string;
  description: string;
}

// User
export type roleType = 'customer' | 'project_manager' | 'designer';

export interface DesignerProps {
  id: string;
  name: string;
  email: string;
}

export interface User {
  name: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  file: string;
  assigned_role: roleType;
}

// Context
export interface UserContextProps {
  user: User;
  setUserData: (name: string, role: string) => void;
}