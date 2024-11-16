import { AuthProps, HeaderProps, HomeProps } from '@types';

export const CONFIG = {
  'openGraph': {},
};

export const HEADER_CONTENT: HeaderProps = {
  'logo': {
    'src': '/images/logo.svg',
    'alt': 'Logo de Grayola',
    'width': 141,
    'height': 31,
  },
  'buttons': [
    {
      'label': 'Iniciar sesión',
      'href': '/login',
      'title': 'Ingresar a formulario de inicio de sesión',
      'style': 'Secondary',
    },
    {
      'label': 'Registrarse',
      'href': '/register',
      'title': 'Ingresar a formulario de registro',
      'style': 'Primary',
    },
  ],
};

export const HOME_CONTENT: HomeProps = {
  'title': 'Gestiona todos tus proyectos desde un solo Dashboard',
  'description':
    'Simplifica y optimiza las operaciones de tu negocio con una plataforma confiable y fácil de usar.',
  'button': {
    'label': 'Conocer más',
    'href': '/dashboard',
    'title': 'Conocer más acerca del dashboard',
    'style': 'Primary',
  },
};

export const LOGIN_CONTENT: AuthProps = {
  'logo': {
    'src': '/images/logo-variant.svg',
    'alt': 'Logo de Grayola',
    'width': 132,
    'height': 68,
  },
  'title': 'Iniciar sesión',
  'description': '¡Bienvenido de vuelta a Grayola! Accede a tu cuenta y continúa creando proyectos.',
  'subtitle': 'Crea proyectos de manera fácil y eficiente, optimizando tu tiempo y recursos',
  'button': {
    'label': 'Volver al inicio',
    'title': 'Volver a la página principal',
    'href': '/',
    'style': 'Secondary'
  }
};

export const REGISTER_CONTENT: AuthProps = {
  'logo': {
    'src': '/images/logo-variant.svg',
    'alt': 'Logo de Grayola',
    'width': 132,
    'height': 68,
  },
  'title': 'Registrarse',
  'description': '¡Bienvenido a Grayola! Regístrate y comienza a crear proyectos increíbles.',
  'subtitle': 'Descubre la plataforma ideal para crear proyectos de manera eficiente y sin complicaciones.',
  'button': {
    'label': 'Volver al inicio',
    'title': 'Volver a la página principal',
    'href': '/',
    'style': 'Secondary'
  }
};

