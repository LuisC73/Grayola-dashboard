# Grayola Dashboard


## Tecnologías

- NextJs
- Supabase
- Tailwind CSS

## Acerca del proyecto

- Proyecto fullstack de prueba técnica que permite registrar e iniciar sesión a usuarios con roles distintos. Además, los usuarios con rol cliente pueden crear proyectos, los usuarios con rol project manager pueden asignarlos a diseñadores, modificarlos y eliminarlos.

## Cómo utilizarlo

### 1. Clona el repositorio

Primero, clona o descarga el repositorio en tu máquina local:

```bash
$ git clone https://github.com/LuisC73/Grayola-dashboard.git
```

### 2. Instala las dependencias

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Crear variables de entorno

```bash
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```

### 4. Correr en local

Para preparar el componente para su uso, genera la build ejecutando:

```bash
npm run dev
```

## Autor

- Luis Miguel Castro Curequia
