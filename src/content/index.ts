import {
  AuthProps,
  HeaderProps,
  HomeProps,
  RegisterPagesProps,
  Roles,
  SelectOptionsProps,
  SideBarsProps,
} from '@types';

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
  'socialMedia': [
    {
      'icon': {
        'name': 'linkedin',
        'size': 30,
      },
      'href': 'https://www.linkedin.com/company/grayola',
      'title': 'Ingresar al perfil oficial de linkedin',
      ariaLabel: 'Botón para ingresar al perfil oficial de linkedin',
    },
    {
      'icon': {
        'name': 'instagram',
        'size': 30,
      },
      'href': 'https://www.instagram.com/grayola.io/',
      'title': 'Ingresar al perfil oficial de instagram',
      ariaLabel: 'Botón para ingresar al perfil oficial de instagram',
    },
  ],
  'image': {
    'src': '/images/home.svg',
    'alt': 'Grayola imagen',
    'width': 340,
    'height': 200,
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
    'style': 'Secondary',
  },
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
  'subtitle':
    'Descubre la plataforma ideal para crear proyectos de manera eficiente y sin complicaciones.',
  'button': {
    'label': 'Volver al inicio',
    'title': 'Volver a la página principal',
    'href': '/',
    'style': 'Secondary',
  },
};

export const VERIFY_CONTENT: RegisterPagesProps = {
  'title': 'Verificación',
  'description': 'Revisa tu correo y confirma tu cuenta para comenzar a usar Grayola.',
};

export const CREATE_CONTENT: RegisterPagesProps = {
  'title': 'Crear cuenta',
  'description': 'Crea tu cuenta con tu nombre y rol para comenzar a disfrutar de Grayola.',
};

export const DASHBOARD_MENU: SideBarsProps = {
  'logo': {
    'src': '/images/logo.svg',
    'alt': 'Logo de Grayola',
    'width': 141,
    'height': 31,
  },
  'items': [
    {
      'icon': {
        'name': 'home',
        'size': 18,
      },
      'label': 'Dashboard',
      'title': 'Ingresar al dashboard',
      'href': '/dashboard',
    },
    {
      'icon': {
        'name': 'folder',
        'size': 18,
      },
      'label': 'Proyectos',
      'title': 'Ingresar al dashboard',
      'href': '/dashboard/projects',
    },
  ],
  'button': {
    'label': 'Cerrar sesión',
    'style': 'Primary',
    'icon': {
      'name': 'logOut',
      'size': 16,
    },
  },
};

export const ROLES_OPTIONS: SelectOptionsProps[] = [
  {
    'id': 'default',
    'label': 'Selecciona uno de los roles disponibles',
  },
  {
    'id': 'customer',
    'label': 'Cliente',
  },
  {
    'id': 'project_manager',
    'label': 'Project Manager',
  },
  {
    'id': 'designer',
    'label': 'Diseñador',
  },
];

export const ROLES: Roles = {
  'customer' : 'Cliente',
  'project_manager': 'Project Manager',
  'designer': 'Diseñador'
};