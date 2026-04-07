import type { Translations } from './en';

export const es: Translations = {
  meta: {
    title: 'Luis Tiburcio — Ingeniero Senior de Software Fullstack',
    description:
      'Portfolio de Luis Tiburcio De la Cruz Fernandez, Ingeniero Senior de Software Fullstack con 12+ años construyendo productos web de alto rendimiento.',
  },

  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    contact: 'Contacto',
    hire: 'Contrátame',
    langSwitch: 'EN',
  },

  hero: {
    tag: 'Ingeniero Senior de Software Fullstack',
    headline1: 'Construyendo los',
    headline2: 'sistemas',
    headline3: 'que mueven la web.',
    body: '12 años entregando productos de alto rendimiento — desde plataformas Web3 y wallets crypto hasta dispositivos AR/VR y Ad-Tech. Actualmente construyendo el futuro de los Design Systems en Happening.',
    meta1: 'Happening · Remoto',
    meta2: 'Almería, España',
    meta3: 'Abierto a nuevos retos',
    scroll: 'Scroll',
  },

  about: {
    label: 'Sobre mí',
    heading1: '12+ años',
    heading2: 'entregando.',
    body1:
      'Soy <strong>Luis Tiburcio</strong>, desarrollador fullstack con alma frontend. He pasado de cofundar startups a ocupar el puesto de CTO, y hoy construyo el Design System del futuro en <strong>Happening</strong>.',
    body2:
      'Mi stack vive donde <strong>React, Next.js, Vue.js y Web3</strong> se encuentran con la infraestructura cloud escalable. Me importa profundamente la arquitectura, la DX y entregar cosas que realmente funcionen a escala.',
    stats: {
      years: 'Años de experiencia',
      companies: 'Empresas entregadas',
      leadership: 'Roles de liderazgo',
      users: 'Usuarios en plataforma',
    },
    skillGroups: {
      frontend: 'Frontend',
      designSystems: 'Design Systems y Herramientas',
      backend: 'Backend y APIs',
      cloud: 'Cloud y DevOps',
      data: 'Bases de datos',
      realtime: 'Tiempo real y Web3',
    },
  },

  experience: {
    label: 'Experiencia',
    heading: 'Historial Laboral',
    count: '09 posiciones · 2013 → presente',
    jobs: [
      {
        period: '2025 — Hoy',
        company: 'Happening',
        role: 'Ingeniero Senior de Software Fullstack',
        subtitle: 'Happening — Design Systems · IA y Automatización',
        desc: 'Trabajo en el equipo de Design System construyendo una librería de componentes de nueva generación con pipelines automatizados de Figma a código usando Figma Code Connect. Integración de herramientas de IA en todo el flujo de diseño a desarrollo para acelerar la entrega y garantizar consistencia a escala.',
        tags: ['Vue.js', 'React.js', 'Figma Code Connect', 'Design Systems', 'Figma', 'Herramientas IA', 'Librerías de Componentes'],
        accent: [0, 1, 2, 3],
      },
      {
        period: '2023 — 2025',
        company: 'Chiliz · Socios.com',
        role: 'Frontend Tech Lead',
        subtitle: 'Chiliz / Socios.com — Crypto · Deporte · Web3',
        desc: 'Lideré el equipo Frontend en Socios.com — la plataforma de fan engagement líder mundial con más de 2,3M de usuarios. Diseñé y entregué la nueva app móvil y web, impulsé la integración del wallet Web3 y garanticé una arquitectura escalable. Durante este período, Socios se convirtió en la primera plataforma deportiva certificada bajo el marco MiCA de la UE.',
        tags: ['Next.js', 'React Native', 'Web3', 'DFNS', 'Styled Components', 'CircleCI', 'CodePush'],
        accent: [0, 1, 2],
      },
      {
        period: '2021 — 2023',
        company: 'Bridder',
        role: 'Director de Tecnología (CTO)',
        subtitle: 'Bridder — Ad-Tech',
        desc: 'Dirigí el desarrollo de una plataforma Ad-Tech que permite a marcas y streamers gestionar campañas publicitarias en Twitch. Lideré la creación de extensiones personalizadas de Twitch y gestioné la infraestructura cloud en AWS.',
        tags: ['React.js', 'Node.js', 'GraphQL', 'MongoDB', 'Strapi', 'AWS'],
        accent: [0, 1, 2],
      },
      {
        period: '2019 — 2021',
        company: 'Wave Application',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Wave Location Technologies — Geolocalización · Safety Tech',
        desc: 'Desarrollé <em>Sister</em> — una app de seguridad para mujeres con localización en tiempo real, botón de pánico e integración policial, con precisión de 2 metros via infraestructura AWS. Nació de datos que muestran que el 83% de las españolas se sienten inseguras caminando solas de noche. Destacada por Amazon Web Services.',
        tags: ['React', 'Redux', 'Node.js', 'Firebase', 'AWS S3', 'CloudFront'],
        accent: [0],
      },
      {
        period: '2018 — 2019',
        company: 'Solera',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Solera Global Data & Content — Datos',
        desc: 'Lideré la migración de una plataforma legacy basada en Backbone a React, mejorando la mantenibilidad y modernizando la experiencia frontend. Refactoricé código heredado en componentes reutilizables.',
        tags: ['React', 'Backbone', 'Webpack', 'Node.js', 'ES6'],
        accent: [0],
      },
      {
        period: '2016 — 2018',
        company: 'Streye / Droiders',
        role: 'Desarrollador y Líder de Equipo',
        subtitle: 'Streye / Droiders — AR/VR/XR · Google Glass',
        desc: 'Desarrollé soluciones AR/VR/XR como distribuidor online exclusivo mundial de Google Glass Enterprise — las mayores ventas globales desde su lanzamiento en 2017. Diseñé un portal cloud para gestión remota de headsets en entornos industriales y médicos. España realizó su primera operación quirúrgica con Google Glass usando la plataforma de Droiders. Captación de €1,5M de inversores de Hong Kong.',
        tags: ['WebRTC', 'Three.js', 'Angular', 'Socket.IO', 'Node.js', 'MongoDB'],
        accent: [0, 1],
      },
      {
        period: '2015 — 2016',
        company: 'Everis',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Everis Center — Consultoría',
        desc: 'Desarrollé una aplicación de ticketing para Vodafone usando Java y Amdocs. Impartí formaciones sobre el framework Amdocs para desarrolladores junior.',
        tags: ['Java', 'Amdocs', 'Oracle', 'PLSQL'],
        accent: [],
      },
      {
        period: '2014 — 2015',
        company: 'NavionTruck',
        role: 'Project Manager',
        subtitle: 'NavionTruck España — Electrónica',
        desc: 'Gestioné el desarrollo de 11 tiendas e-commerce y diseñé un panel admin centralizado con PrestaShop. Lideré un equipo implementando integraciones multiplataforma y actualizaciones de inventario automatizadas.',
        tags: ['Java', 'PHP', 'PrestaShop', 'JavaScript', 'Android'],
        accent: [],
      },
      {
        period: '2013 — 2014',
        company: 'Coorda Networks',
        role: 'CO-Fundador y Desarrollador',
        subtitle: 'Coorda Networks — Software Factory',
        desc: 'Cofundé y desarrollé <em>Coobox</em>, un motor de e-commerce para gestión de tiendas online. Lideré la migración de PHP 4.0 a un stack moderno.',
        tags: ['PHP 5.4', 'HTML', 'CSS', 'JavaScript'],
        accent: [],
      },
    ],
  },

  contact: {
    label: 'Trabajemos juntos',
    heading1: 'Hablemos',
    heading2: 'ya.',
    body: 'Abierto a conversaciones de Senior Frontend, Tech Lead y CTO. 100% remoto desde España.',
    links: {
      email: 'Email',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
    },
  },

  footer: {
    copy: '© 2026 Luis Tiburcio De la Cruz Fernandez',
    made: 'Diseñado con',
    stack: 'Claude × Cursor × Vercel',
  },
};
