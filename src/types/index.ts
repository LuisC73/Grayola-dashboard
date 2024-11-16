// General

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Components
export interface ButtonProps {
  label: string;
  icon?: string;
  ariaLabel?: string;
  style: 'Primary' | 'Secondary';
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

export interface InputProps {
  id: string;
  type: 'text' | 'email' | 'password';
  label: string;
  parentMethod?: () => void;
}

export interface SelectProps extends Omit<InputProps, 'type'> {
  options: string[];
}

// Content

export interface HomeProps {
  title: string;
  description: string;
  button: ButtonLinkProps;
  image?: ImageProps;
}

export interface AuthProps {
  logo: ImageProps;
  title: string;
  description: string;
  subtitle: string;
  button: ButtonLinkProps;
}