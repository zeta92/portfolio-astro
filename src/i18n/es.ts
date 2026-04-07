import type { Translations } from './en';

export const es: Translations = {
  meta: {
    title: 'Luis Tiburcio — Ingeniero Fullstack Senior',
    description:
      'Portfolio de Luis Tiburcio De la Cruz Fernandez, Ingeniero Fullstack Senior con más de 12 años construyendo productos web de alto rendimiento.',
  },

  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    contact: 'Contacto',
    hire: 'Contrátame',
    langSwitch: 'EN',
  },

  hero: {
    tag: 'Ingeniero Fullstack Senior',
    headline1: 'Construyendo los',
    headline2: 'sistemas',
    headline3: 'que mueven la web.',
    body: '12 años creando productos de alto rendimiento — desde plataformas Web3 y wallets crypto hasta dispositivos AR/VR y Ad-Tech. Ahora mismo, dando forma al futuro de los Design Systems en Happening.',
    meta1: 'Happening · Remoto',
    meta2: 'Almería, España',
    meta3: 'Abierto a nuevos retos',
    scroll: 'Scroll',
  },

  about: {
    label: 'Sobre mí',
    heading1: '12+ años',
    heading2: 'en producción.',
    body1:
      'Soy <strong>Luis Tiburcio</strong>, desarrollador fullstack con alma frontend. He pasado de cofundar startups a ser CTO, y hoy doy forma al Design System del futuro en <strong>Happening</strong>.',
    body2:
      'Mi stack vive donde <strong>React, Next.js, Vue.js y Web3</strong> se encuentran con infraestructura cloud escalable. Me obsesiona la arquitectura, la DX y hacer cosas que funcionen de verdad a escala.',
    stats: {
      years: 'Años de experiencia',
      companies: 'Empresas con impacto',
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
    heading: 'Trayectoria',
    count: '09 posiciones · 2013 → hoy',
    pressLabel: 'En prensa',
    jobs: [
      {
        period: '2025 — Hoy',
        company: 'Happening',
        role: 'Ingeniero Fullstack Senior',
        subtitle: 'Happening — Design Systems · IA y Automatización',
        desc: 'Formo parte del equipo de Design System, donde construimos una librería de componentes de nueva generación con pipelines Figma-to-code automatizados usando Figma Code Connect. Integro herramientas de IA en todo el flujo de diseño a desarrollo para acelerar tiempos de entrega y garantizar consistencia a escala.',
        tags: ['Vue.js', 'React.js', 'Figma Code Connect', 'Design Systems', 'Figma', 'Herramientas IA', 'Librerías de Componentes'],
        accent: [0, 1, 2, 3],
      },
      {
        period: '2023 — 2025',
        company: 'Chiliz · Socios.com',
        role: 'Frontend Tech Lead',
        subtitle: 'Chiliz / Socios.com — Crypto · Deporte · Web3',
        desc: 'Lideré el equipo Frontend de Socios.com — la plataforma de fan engagement líder mundial con más de 2,3M de usuarios. Diseñé y lancé la nueva app móvil y web, impulsé la integración del wallet Web3 y aseguré una arquitectura escalable. Bajo mi etapa, Socios se convirtió en la primera plataforma deportiva certificada bajo el marco MiCA de la UE.',
        tags: ['Next.js', 'React Native', 'Web3', 'DFNS', 'Styled Components', 'CircleCI', 'CodePush'],
        accent: [0, 1, 2],
      },
      {
        period: '2021 — 2023',
        company: 'Bridder',
        role: 'CTO',
        subtitle: 'Bridder — Ad-Tech',
        desc: 'Dirigí el desarrollo de una plataforma Ad-Tech para gestionar campañas publicitarias de marcas y streamers en Twitch. Creamos extensiones personalizadas de Twitch y monté toda la infraestructura cloud en AWS.',
        tags: ['React.js', 'Node.js', 'GraphQL', 'MongoDB', 'Strapi', 'AWS'],
        accent: [0, 1, 2],
      },
      {
        period: '2019 — 2021',
        company: 'Wave Application',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Wave Location Technologies — Geolocalización · Safety Tech',
        desc: 'Desarrollé <em>Sister</em> — una app de seguridad para mujeres con localización en tiempo real, botón de pánico e integración policial, con precisión de 2 metros sobre infraestructura AWS. La idea surgió tras una encuesta a 35.000 mujeres: el 83% se siente insegura al volver sola a casa por la noche. Amazon Web Services la destacó como caso de éxito.',
        tags: ['React', 'Redux', 'Node.js', 'Firebase', 'AWS S3', 'CloudFront'],
        accent: [0],
      },
      {
        period: '2018 — 2019',
        company: 'Solera',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Solera Global Data & Content — Datos',
        desc: 'Lideré la migración de una plataforma legacy de Backbone a React, mejorando la mantenibilidad y actualizando toda la capa frontend. Convertí código heredado en componentes reutilizables y bien estructurados.',
        tags: ['React', 'Backbone', 'Webpack', 'Node.js', 'ES6'],
        accent: [0],
      },
      {
        period: '2016 — 2018',
        company: 'Streye / Droiders',
        role: 'Desarrollador y Tech Lead',
        subtitle: 'Streye / Droiders — AR/VR/XR · Google Glass',
        desc: 'Construí soluciones AR/VR/XR siendo el distribuidor online exclusivo mundial de Google Glass Enterprise — las mayores ventas globales desde su lanzamiento en 2017. Diseñé un portal cloud para gestionar headsets en remoto en entornos industriales y médicos. Nuestra plataforma permitió la primera operación quirúrgica con Google Glass en España. Captación de €1,5M de inversores en Hong Kong.',
        tags: ['WebRTC', 'Three.js', 'Angular', 'Socket.IO', 'Node.js', 'MongoDB'],
        accent: [0, 1],
      },
      {
        period: '2015 — 2016',
        company: 'Everis',
        role: 'Desarrollador Fullstack Senior',
        subtitle: 'Everis Center — Consultoría',
        desc: 'Desarrollé una aplicación de ticketing para Vodafone con Java y Amdocs. También impartí formación sobre el framework Amdocs a desarrolladores junior del equipo.',
        tags: ['Java', 'Amdocs', 'Oracle', 'PLSQL'],
        accent: [],
      },
      {
        period: '2014 — 2015',
        company: 'NavionTruck',
        role: 'Project Manager',
        subtitle: 'NavionTruck España — Electrónica',
        desc: 'Gestioné el desarrollo de 11 tiendas e-commerce y diseñé un panel de administración centralizado con PrestaShop. Coordiné un equipo que implementó integraciones multiplataforma y automatizó las actualizaciones de inventario.',
        tags: ['Java', 'PHP', 'PrestaShop', 'JavaScript', 'Android'],
        accent: [],
      },
      {
        period: '2013 — 2014',
        company: 'Coorda Networks',
        role: 'Cofundador y Desarrollador',
        subtitle: 'Coorda Networks — Software Factory',
        desc: 'Cofundé la empresa y desarrollé <em>Coobox</em>, un motor de e-commerce para gestionar tiendas online. Lideré la migración del stack de PHP 4.0 a tecnologías modernas.',
        tags: ['PHP 5.4', 'HTML', 'CSS', 'JavaScript'],
        accent: [],
      },
    ],
  },

  contact: {
    label: 'Trabajemos juntos',
    heading1: 'Hablemos',
    heading2: 'ya.',
    body: 'Disponible para roles de Senior Frontend, Tech Lead y CTO. Trabajo en remoto desde España.',
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
