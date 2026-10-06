# SGI EFQM · Blueprint Builder

Sistema de Gestión Institucional del Colegio Diocesano **El Buen Pastor**, construido alrededor del modelo EFQM 2020. Centraliza procesos, subprocesos, actividades, indicadores, metas, registros y evidencias con acceso restringido a cuentas `@bup.edu.pe`.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-1f6f8b)
![Stack](https://img.shields.io/badge/stack-TanStack%20Start%20%7C%20React%20%7C%20Supabase-4f46e5)
![Seguridad](https://img.shields.io/badge/acceso-@bup.edu.pe-15803d)

## ¿Qué incluye?

- Dashboard institucional con cumplimiento, alertas, pilares EFQM y evolución histórica.
- Filtros dinámicos en cascada: año → área → proceso → subproceso → indicador.
- Módulos de estructura, indicadores, metas, registros, evidencias, usuarios y auditoría.
- Supabase Auth con correo/contraseña y Google OAuth.
- Validación estricta del dominio `@bup.edu.pe` en cliente, callback y rutas protegidas.
- Sincronización de perfiles y roles mediante `sincronizar_usuario()`.
- Migraciones SQL para esquema, datos institucionales y usuarios iniciales.

## Tecnologías

| Capa | Tecnología |
| --- | --- |
| Frontend | React 19 + TypeScript |
| Framework | TanStack Start v1 |
| Rutas | TanStack Router basado en archivos |
| Estilos | Tailwind CSS v4 |
| Componentes | Radix UI + componentes propios |
| Gráficos | Recharts |
| Backend y base de datos | Supabase / PostgreSQL |
| Autenticación | Supabase Auth + Google OAuth |
| Build | Vite + Nitro / Cloudflare |

## Requisitos

- Node.js 20 o superior.
- npm instalado.
- Proyecto Supabase configurado.
- Credenciales de Supabase disponibles como variables de entorno.

## Instalación local

```bash
git clone <url-del-repositorio>
cd blueprint-builder
npm install
```

Crea `.env` en la raíz con estas variables:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=tu-clave-publicable
VITE_SUPABASE_PROJECT_ID=tu-project-id
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_PUBLISHABLE_KEY=tu-clave-publicable
```

No publiques `.env`, claves privadas ni `SUPABASE_SERVICE_ROLE_KEY` en el frontend o en el repositorio.

## Base de datos

Ejecuta en el SQL Editor de Supabase, en este orden:

```text
drizzle/migrations/0000_sgi_schema.sql
drizzle/migrations/0001_sgi_seed.sql
drizzle/migrations/0002_sgi_users_seed.sql
```

El primer archivo crea tablas, enums, funciones y políticas RLS. Los siguientes agregan procesos, subprocesos y usuarios institucionales de inicio.

Después de crear un usuario en Supabase Auth, su correo debe existir en `public.usuarios_sgi` para recibir el rol institucional correspondiente. Si no existe, `sincronizar_usuario()` asigna el rol de lectura por defecto.

## Google OAuth

En Supabase habilita Google y configura:

- **Site URL:** URL principal de la aplicación.
- **Redirect URL:** `https://tu-dominio.com/auth/callback`.
- **Callback de Google:** `https://tu-proyecto.supabase.co/auth/v1/callback`.

La aplicación envía `hd: "bup.edu.pe"`, pero la seguridad real también se comprueba en `/auth/callback` y en el layout protegido. Una cuenta externa es cerrada inmediatamente.

## Ejecutar y validar

```bash
npm run dev
npm run lint
npm run build
```

Si el script de npm no está disponible en algún entorno, puede ejecutarse directamente:

```bash
./node_modules/.bin/vite build
```

## Estructura principal

```text
src/
├── components/sgi/       Shell, perfil y filtros del SGI
├── integrations/supabase/ Cliente y middleware de autenticación
├── lib/sgi/              Datos, métricas y reglas EFQM
└── routes/
    ├── index.tsx         Landing pública
    ├── auth/             Login y callback OAuth
    └── _authenticated/   Módulos protegidos

drizzle/migrations/       Esquema y seeds de Supabase
```

`src/routeTree.gen.ts` es generado automáticamente por TanStack Router. No debe editarse manualmente.

## Flujo de autenticación

```text
Login / Google OAuth → /auth/callback → validar @bup.edu.pe
→ sincronizar_usuario() → layout protegido → módulos SGI
```

El perfil muestra nombre, correo, rol y área. El logout revoca la sesión y devuelve a la landing pública.

## Convenciones

- Mantener la paleta institucional y los tokens de `src/styles.css`.
- No instalar `react-router-dom`; se usa TanStack Router.
- No modificar manualmente `src/routeTree.gen.ts` ni `src/integrations/supabase/client.ts`.
- No reescribir commits publicados en la rama conectada con Lovable.
- Ejecutar `npm run build` antes de entregar cambios importantes.

## Estado actual

El proyecto cuenta con autenticación institucional, rutas protegidas, perfil dinámico, filtros dependientes, métricas contextuales y migraciones iniciales de Supabase. Los seeds pueden ampliarse con la información operativa definitiva de actividades, indicadores, metas, registros y evidencias.

## Propiedad

Proyecto institucional del Colegio Diocesano El Buen Pastor, mantenido mediante Git y el flujo de trabajo de Lovable.
