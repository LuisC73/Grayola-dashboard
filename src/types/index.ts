import { ChangeEvent, FormEvent, ReactNode } from "react";

// General
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Components ui
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
  parentMethod?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export interface SelectProps extends Omit<InputProps, 'type' | 'parentMethod'> {
  options: RolesOptions[];
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

// User
export type roleType = 'customer' | 'project_manager' | 'designer';

export interface RolesOptions {
  id: roleType;
  label: string;
}

export interface User {
  id: string;
  email: string;
  role: roleType;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  file: string;
  assigned_role: roleType;
}


// Custom hooks

export interface useLoginProps {
  email: string;
  password: string;
}