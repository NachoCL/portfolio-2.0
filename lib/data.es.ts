import { IData } from '@/types';

export const DATA_ES: IData = {
  generalInfo: {
    email: 'ignaciocanadillaleon@gmail.com',
    emailSubject: 'Colaboremos en un proyecto',
    emailBody: 'Hola Ignacio, te contacto porque...',
  },
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ignacio-manuel-canadilla-leon/',
    },
  ],
  myStack: {
    frontend: [
      {
        key: 'js',
        name: 'JavaScript',
        order: 0,
        icon: '/logo/js.png',
        description: {
          text: 'Con una experiencia profunda en JavaScript, domino la sintaxis ES6+ y los patrones asíncronos. Mi experiencia incluye el desarrollo de flujos lógicos complejos y el uso de marcos modernos para crear soluciones web interactivas y de alto rendimiento que escalan eficazmente en diferentes plataformas.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'ts',
        name: 'TypeScript',
        order: 1,
        icon: '/logo/ts.png',
        description: {
          text: 'Aprovecho TypeScript para diseñar aplicaciones robustas y resistentes a errores. Al utilizar estrictamente tipado estático e interfaces avanzadas, aseguro la mantenibilidad y escalabilidad del código, reduciendo significativamente los errores en tiempo de ejecución y mejorando la colaboración entre desarrolladores en proyectos a gran escala.',
          years: '+2 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'vue',
        name: 'Vue',
        order: 2,
        icon: '/logo/vue.png',
        description: {
          text: 'Mi dominio de Vue.js abarca tanto el ecosistema heredado de Vue 2 como el moderno de Vue 3. Me especializo en crear interfaces de usuario dinámicas utilizando la API Composition, mientras gestiono estados de aplicación complejos de manera eficiente con bibliotecas como Vuex y Pinia.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'nuxt',
        name: 'Nuxt',
        order: 3,
        icon: '/logo/nuxt.png',
        description: {
          text: 'Utilizo Nuxt.js para arquitectar aplicaciones web de alto rendimiento, centrándome en el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG). Mi enfoque prioriza la optimización SEO y la carga de páginas ultrarrápida para ofrecer experiencias de usuario superiores.',
          years: '+2 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'react',
        name: 'React',
        order: 4,
        icon: '/logo/react.png',
        description: {
          text: 'Construyo interfaces de usuario responsive y basadas en componentes utilizando el ecosistema de React. Mi flujo de trabajo integra Hooks modernos y la API de Contexto para la gestión del estado, a menudo combinados con Redux para manejar flujos de datos complejos en aplicaciones web dinámicas.',
          years: '+2 años',
          project: '-',
        },
      },
      {
        key: 'next',
        name: 'Next.js',
        order: 5,
        icon: '/logo/next.png',
        description: {
          text: 'Empleo Next.js para crear aplicaciones React listas para producción con capacidades de renderizado del lado del servidor. Me centro en optimizar las rutas de renderizado y el enrutamiento para garantizar los más altos estándares de rendimiento y un viaje fluido para el usuario final.',
          years: '+2 años',
          project: '-',
        },
      },
      {
        key: 'redux',
        name: 'Redux',
        order: 6,
        icon: '/logo/redux.png',
        description: {
          text: 'Implemento Redux para mantener contenedores de estado predecibles dentro de aplicaciones JavaScript complejas. Mi experiencia se extiende a middleware como Thunk y Saga, lo que me permite manejar efectos secundarios asíncronos y lógica con precisión y estabilidad.',
          years: '+1 años',
          project: '-',
        },
      },
      {
        key: 'pinia',
        name: 'Pinia',
        order: 7,
        icon: '/logo/pinia.png',
        description: {
          text: 'Como mi solución de gestión de estado preferida para Vue, utilizo Pinia para construir stores modulares. Su diseño con seguridad de tipos permite un mejor autocompletado y un código más limpio, asegurando una arquitectura escalable que es fácil de depurar y mantener.',
          years: '+2 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'jquery',
        name: 'jQuery',
        order: 8,
        icon: '/logo/jquery.png',
        description: {
          text: 'Poseo una comprensión funcional de jQuery, esencial para mantener y modernizar sistemas heredados. Mis habilidades cubren la manipulación eficiente del DOM, el manejo de eventos y las solicitudes AJAX, cerrando la brecha entre arquitecturas antiguas y estándares de desarrollo modernos.',
          years: '+1 años',
          project: 'Radisson Hotels',
        },
      },
      {
        key: 'html',
        name: 'HTML',
        order: 9,
        icon: '/logo/html.png',
        description: {
          text: 'Diseño estructuras web semánticas y accesibles utilizando estándares HTML5. Me centro en escribir código limpio y optimizado para SEO que sirva como una base sólida para el estilo y la interactividad, asegurando el cumplimiento de las pautas modernas de accesibilidad web.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'css',
        name: 'CSS',
        order: 10,
        icon: '/logo/css.png',
        description: {
          text: 'Diseño composiciones visualmente atractivas y responsivas utilizando CSS3. Dominando sistemas de diseño modernos como Flexbox y Grid, junto con preprocesadores como Sass, aseguro una marca consistente y una adaptabilidad fluida en todos los tamaños de dispositivos y ventanas gráficas.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'tailwind',
        name: 'Tailwind CSS',
        order: 11,
        icon: '/logo/tailwind.png',
        description: {
          text: 'Utilizo Tailwind CSS para prototipar y construir diseños personalizados rápidamente sin salir del HTML. Su enfoque de utilidad primero me permite crear interfaces de usuario altamente responsivas, consistentes y mantenibles con una huella de CSS mínima.',
          years: '+2 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'sass',
        name: 'Sass',
        order: 12,
        icon: '/logo/sass.png',
        description: {
          text: 'Escribo hojas de estilo modulares y DRY utilizando Sass. Aprovechando variables, mixins y anidamiento, creo arquitecturas CSS organizadas que son fáciles de escalar y mantener, agilizando el proceso de diseño para grandes aplicaciones web.',
          years: '+2 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'bootstrap',
        name: 'Bootstrap',
        order: 13,
        icon: '/logo/bootstrap.svg',
        description: {
          text: 'Con Bootstrap acelero el desarrollo de páginas web responsive y centradas en dispositivos móviles. Confiando en su robusto sistema de cuadrícula y su extensa biblioteca de componentes preconstruidos para ofrecer interfaces de usuario consistentes y profesionales con un tiempo de desarrollo reducido.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      {
        key: 'cypress',
        name: 'Cypress',
        order: 14,
        icon: '/logo/cypress.png',
        description: {
          text: 'Implemento estrategias integrales de pruebas de extremo a extremo (end-to-end) utilizando Cypress. Al simular interacciones reales de usuarios y automatizar scripts de prueba, valido los flujos de la aplicación para garantizar la fiabilidad, detectar regresiones temprano y mantener altos estándares de calidad antes del despliegue.',
          years: '+2 años',
          project: 'Radisson Hotels',
        },
      },
      {
        key: 'jest',
        name: 'Jest',
        order: 15,
        icon: '/logo/jest.png',
        description: {
          text: 'Realizo pruebas unitarias y de integración rigurosas utilizando Jest para garantizar la estabilidad de la lógica del código. Mi enfoque en el desarrollo guiado por pruebas y la cobertura de código asegura que los componentes de JavaScript individuales funcionen correctamente de forma aislada y dentro del sistema más amplio.',
          years: '+2 años',
          project: 'Radisson Hotels',
        },
      },
    ],
    backend: [
      {
        key: 'node',
        name: 'NodeJs',
        order: 0,
        icon: '/logo/node.png',
        description: {
          text: 'Extiendo mi dominio del Frontend hacia la capa de servidor, creando endpoints API y middleware para resolver necesidades de datos específicas de la interfaz (BFF). Gestiono la lógica del lado del servidor necesaria para el SSR (Server-Side Rendering) y la integración de APIs externas.',
          years: '+1 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'nitro',
        name: 'Nitro',
        order: 1,
        icon: '/logo/nitro.png',
        description: {
          text: 'Aprovecho el motor Nitro para impulsar el renderizado del lado del servidor de próxima generación. Dentro del ecosistema Nuxt, optimizo el middleware del servidor y las salidas de despliegue para garantizar el máximo rendimiento y versatilidad en diferentes entornos.',
          years: '+1 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'graphql',
        name: 'GraphQL',
        order: 2,
        icon: '/logo/graphql.png',
        description: {
          text: 'Diseño capas de datos flexibles y eficientes utilizando GraphQL. Al permitir la obtención precisa de datos donde los clientes solicitan exactamente lo que necesitan, reduzco la sobrecarga de la red, evito la obtención excesiva y mejoro significativamente el rendimiento de las aplicaciones frontend.',
          years: '+2 años',
          project: 'Plataformas OTT',
        },
      },
      {
        key: 'java',
        name: 'Java',
        order: 3,
        icon: '/logo/java.png',
        description: {
          text: 'Poseo una comprensión fundamental de Java para el desarrollo backend empresarial. Mi experiencia cubre principios orientados a objetos y la construcción de lógica confiable del lado del servidor, lo que me permite contribuir eficazmente a arquitecturas de aplicaciones robustas y escalonadas.',
          years: '3 meses',
          project: 'Proyecto Bancario (Interno)',
        },
      },
    ],
    database: [
      {
        key: 'mysql',
        name: 'MySQL',
        order: 0,
        icon: '/logo/mysql.svg',
        description: {
          text: 'Gestiono estructuras de datos relacionales utilizando MySQL, incluyendo el diseño de esquemas normalizados, la escritura de consultas complejas y la optimización del rendimiento de la base de datos para garantizar la integridad de los datos.',
          years: '+1 años',
          project: 'Proyecto Bancario (Interno)',
        },
      },
    ],
    tools: [
      {
        key: 'git',
        name: 'Git',
        order: 0,
        icon: '/logo/git.png',
        description: {
          text: 'Utilizo Git para un control de versiones riguroso y la colaboración en equipo. Dominando las estrategias de ramificación y los flujos de trabajo de solicitudes de extracción en plataformas como GitLab, aseguro que el historial del código esté limpio, los conflictos se gestionen y las canalizaciones de despliegue permanezcan estables.',
          years: '+4 años',
          project: 'Plataformas OTT, Radisson Hotels',
        },
      },
      // {
      //   key: 'aws',
      //   name: 'AWS',
      //   order: 1,
      //   icon: '/logo/aws.png',
      //   description: {
      //     text: 'Tengo conocimientos fundamentales del ecosistema de AWS para la infraestructura en la nube. Entiendo servicios básicos como S3 para almacenamiento, Lambda para computación sin servidor y CloudFront para entrega de contenido, sentando las bases para el despliegue escalable de aplicaciones.',
      //     years: '0 años',
      //     project: '-',
      //   },
      // },
    ],
  },
  projects: [
    {
      title: 'Plataformas OTT',
      slug: 'ott-platforms',
      liveUrl: 'https://www.canalsurmas.es/',
      year: '2023 - Actualidad',
      description: `
        Plataforma OTT escalable diseñada con Nuxt 3 y TypeScript. Construido bajo estrictos principios de Arquitectura Limpia para garantizar mantenibilidad, testabilidad e independencia del framework.
      `,
      features: `
        <ul>
            <li>🏗️ Arquitectura Limpia: Estricta separación de responsabilidades (Dominio, Aplicación, Infraestructura, UI)</li>
            <li>💉 Inyección de Dependencias: Implementación de contenedor IoC usando tsyringe para gestión modular de servicios</li>
            <li>🎨 Configuración Dinámica: Adaptación del cliente en tiempo de ejecución (Client Object) vía SSR para arquitectura de producto SaaS</li>
            <li>🎬 Reproductor Multimedia Avanzado: Soporte para VOD y transmisión en vivo con DRM, DVR e integración de animaciones Lottie en tiempo real</li>
            <li>🎓 Interoperabilidad LMS: Integración fluida con plataformas de e-learning como Moodle</li>
            <li>🛒 Motor de Monetización: Flujo de comercio electrónico unificado integrando Stripe y RevenueCat para compras de suscripciones y productos</li>
            <li>🔐 Autenticación Segura: Capa de autenticación robusta utilizando tokens de actualización e interceptores personalizados</li>
            <li>⚡ UI Reactiva: Componentes de alto rendimiento y totalmente responsive construidos con TailwindCSS</li>
        </ul>
      `,
      technicalAspects: `
        <ul>
            <li>Lógica de negocio desacoplada usando Casos de Uso y Entidades de TypeScript puro</li>
            <li>Implementación de lógica compleja de sincronización de carruseles utilizando Swiper.js</li>
            <li>Configuración de estrategias de obtención de datos eficientes en Nuxt.js</li>
            <li>Estrategias de Inversión de Control (IoC) para facilitar las pruebas y la escalabilidad</li>
            <li>Estricto cumplimiento de los principios SOLID, enfocándose en la Responsabilidad Única</li>
        </ul>
      `,
      role: `
        Como Arquitecto Frontend y Desarrollador diseñé e implementé la base arquitectónica principal:<br><br>
        <ul>
            <li>✅ Configuración de Arquitectura: Establecí la estructura de directorios separando las capas Core, Infrastructure y UI</li>
            <li>🧩 Integración de DI: Configuré proveedores tsyringe dentro del contexto de Nuxt 3</li>
            <li>🛠️ Modelado de Dominio: Definí Entidades e Interfaces estrictas para el ecosistema OTT</li>
            <li>🔄 Abstracción de Lógica: Migré reglas de negocio de componentes Vue a Casos de Uso agnósticos</li>
            <li>💅 Sistema UI: Desarrollé componentes atómicos y responsive usando TailwindCSS</li>
            <li>🚀 Optimización SSR: Gestioné la pre-obtención de datos del lado del servidor para configuraciones dinámicas del cliente</li>
        </ul>
      `,
      techStack: [
        'TypeScript',
        'Arquitectura Limpia',
        'Nuxt.js',
        'Vue',
        'Pinia',
        'Rest API',
        'GraphQL',
        'Tailwind CSS',
        'Swiper.js',
        'i18n',
        'Gitlab CI/CD',
      ],
      thumbnail: '/projects/thumbnail/ott-canalsur.png',
      examples: [
        {
          image: '/projects/images/ott-canalsur.png',
          url: 'https://canalsurmas.es/',
        },
        {
          image: '/projects/images/ott-agalega.png',
          url: 'https://agalega.gal/',
        },
        {
          image: '/projects/images/ott-realmadrid.png',
          url: 'https://formacion.realmadridfundacion.org/',
        },
        {
          image: '/projects/images/ott-fcbarcelona.png',
          url: 'https://one.fcbarcelona.com/',
        },
        {
          image: '/projects/images/ott-smartplatino.png',
          url: 'https://www.smartplatino.tv/',
        },
        {
          image: '/projects/images/ott-vivoazzurro.png',
          url: 'https://www.vivoazzurrotv.it/',
        },
      ],
    },
    {
      title: 'Radisson Hotels',
      slug: 'radisson-hotels',
      techStack: [
        'Javascript',
        'Vue',
        'Microfrontends',
        'Bootstrap',
        'Jest',
        'Cypress',
        'SonarQube',
        'Gitlab CI/CD',
      ],
      thumbnail: '/projects/thumbnail/radisson-home.png',
      examples: [
        {
          image: '/projects/images/radisson-home.png',
          url: 'https://www.radissonhotels.com/en-us/',
        },
        {
          image: '/projects/images/radisson-destinations.png',
          url: '',
        },
        {
          image: '/projects/images/radisson-meetings.png',
          url: '',
        },
      ],
      liveUrl: 'https://www.radissonhotels.com/en-us/',
      year: '2021 - 2023',
      description: `
        Plataforma de reservas de nivel empresarial con alto tráfico, arquitectada con Microfrontends para soportar operaciones globales de una importante cadena hotelera internacional. El sistema gestiona flujos de reserva complejos, precios dinámicos y transacciones seguras en múltiples regiones.
      `,
      features: `
        <ul>
            <li>🌍 Motor de Reservas Global: Sistema de reservas robusto que maneja precios multidivisa y disponibilidad en tiempo real</li>
            <li>🌐 Internacionalización (i18n): Adaptación dinámica de contenido soportando múltiples idiomas y locales regionales</li>
            <li>💳 Pagos Seguros: Pasarela de pagos integrada que cumple con los estándares PCI-DSS para diversos métodos de transacción</li>
            <li>🧩 Arquitectura de Microfrontends: Estructura de aplicación modular que permite el despliegue independiente de equipos de funcionalidades</li>
            <li>🛡️ Garantía de Calidad: Alta fiabilidad del código impuesta a través de tuberías de SonarQube, Jest y Cypress</li>
        </ul>
      `,
      technicalAspects: `
        <ul>
            <li>Orquestación de micro-aplicaciones Vue.js independientes</li>
            <li>Depuración avanzada y estabilización de módulos de código heredado</li>
            <li>Implementación de reglas de negocio complejas para programas de fidelización y modificaciones de reservas</li>
            <li>Estricta integración de CI/CD utilizando GitLab para pruebas y despliegue automatizados</li>
        </ul>
      `,
      role: `
        Como Desarrollador Javascript evolucioné del mantenimiento central al desarrollo de funcionalidades, asegurando la estabilidad del sistema y el crecimiento del negocio:<br><br>
        <ul>
            <li>🐛 Estabilización de Código Heredado: Realicé análisis de causa raíz profundos y resolución de errores de producción críticos dentro de bases de código complejas y preexistentes</li>
            <li>🔍 Refactorización de Código: Apliqué la Regla del Boy Scout para mejorar incrementalmente la calidad del código y reducir la deuda técnica mientras solucionaba problemas</li>
            <li>✨ Implementación de Funcionalidades: Desarrollé flujos de reserva de extremo a extremo, incluyendo selección de habitaciones, complementos y procesamiento de pagos</li>
            <li>🤝 Integración de API: Colaboré con equipos backend para integrar servicios RESTful para reservas y perfiles de usuario</li>
            <li>🧪 Automatización de Pruebas: Aumenté la cobertura escribiendo pruebas unitarias y E2E tanto para arreglos heredados como para nuevas funcionalidades</li>
        </ul>
      `,
    },
  ],
  myExperience: [
    {
      title: 'Ingeniero Frontend',
      company: 'Plenitas',
      duration: 'Oct 2023 - Presente',
    },
    {
      title: 'Desarrollador Full-stack',
      company: 'Viewnext',
      duration: 'Jul 2023 - Oct 2023',
    },
    {
      title: 'Desarrollador Javascript',
      company: 'EY',
      duration: 'Dic 2021 - Jul 2023',
    },
  ],
  ui: {
    navbar: {
      links: [
        { name: 'Inicio', url: '/' },
        { name: 'Sobre Mí', url: '/#about-me' },
        { name: 'Experiencia', url: '/#my-experience' },
        { name: 'Proyectos', url: '/#selected-projects' },
      ],
      socialTitle: 'SOCIAL',
      menuTitle: 'MENÚ',
      contactTitle: 'PONTE EN CONTACTO',
    },
    banner: {
      role: `<span className="text-primary">INGENIERO</span><br /> <span className="ml-4">FRONTEND</span>`,
      description: `¡Hola! Soy <span className="font-medium text-foreground">Ignacio</span>. Un Ingeniero Frontend con +4 años de experiencia construyendo soluciones web de alto rendimiento, escalables y responsive.`,
      contactButton: 'Contáctame',
      yearsExperience: '4+',
      yearsText: 'Años de Experiencia',
      hoursWorked: '20+',
      hoursText: 'Herramientas y Frameworks',
    },
    aboutMe: {
      title:
        'Me dedico a escribir código limpio y escalable, enfocándome en el rendimiento y la mantenibilidad para entregar aplicaciones robustas que crezcan con el negocio.',
      subtitle: '',
      introTitle: 'Hola, soy Ignacio.',
      introDescription1:
        'Soy un Ingeniero Frontend impulsado por la pasión por resolver desafíos técnicos complejos a través de un diseño arquitectónico robusto.',
      introDescription2:
        'Si bien me especializo en crear experiencias de usuario fluidas, mi principal fortaleza radica en mi adaptabilidad. Soy agnóstico en cuanto a frameworks y prospero dominando nuevos lenguajes y herramientas para satisfacer las necesidades del proyecto. Priorizo el código limpio y el rendimiento, asegurando que cada solución que diseño sea escalable, accesible y alineada con los objetivos estratégicos del negocio.',
    },
    titles: {
      myStack: 'Mi Stack',
      experience: 'Mi Experiencia',
      selectedProjects: 'PROYECTOS SELECCIONADOS',
    },
    techModal: {
      experience: 'Experiencia: ',
      projects: 'Proyectos: ',
      button: '¡Entendido!',
    },
    generic: {
      back: 'Volver',
      techs: 'Tecnologías y Herramientas',
      description: 'Descripción',
      features: 'Características Clave',
      technicalAspects: 'Aspectos Técnicos Destacados',
      myRole: 'Mi Rol',
      design: 'Diseñado por Ignacio Cañadilla',
      pleasure: '¿Tienes un proyecto en mente? Escríbeme y hablamos.',
    },
  },
};
