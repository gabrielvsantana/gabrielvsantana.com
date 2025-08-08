import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, createContext, useContext } from "react";

type Language = "en" | "pt" | "es";

type Content = {
  navbar: {
    about: string;
    work: string;
    impact: string;
    blog: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    description: string;
    cta: {
      collaborate: string;
      viewCode: string;
      readThoughts: string;
    };
  };
  about: {
    title: string;
    intro: string;
    selfTaught: string;
    nonprofit: string;
    stats: {
      learningStyle: {
        title: string;
        value: string;
        desc: string;
      };
      approach: {
        title: string;
        value: string;
        desc: string;
      };
    };
  };
  work: {
    title: string;
    programming: {
      title: string;
      subtitle: string;
      text: string;
      cta: string;
    };
    music: {
      title: string;
      subtitle: string;
      text: string;
      cta: string;
    };
    film: {
      title: string;
      subtitle: string;
      text: string;
      cta: string;
    };
  };
  languages: {
    title: string;
    description: string;
    experience: string;
    native: string;
    selfTaught: string;
    lived: string;
    countries: string;
    countriesDesc: string;
    countriesList: string;
    timezone: string;
    timezoneDesc: string;
    timezoneRange: string;
    continents: string;
    countries15: string;
    timezones12: string;
    location: string;
  };
  nonprofit: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      text1: string;
      text2: string;
      cta: {
        getInvolved: string;
        readUpdates: string;
      };
    };
    programs: {
      arts: {
        title: string;
        desc: string;
      };
      education: {
        title: string;
        desc: string;
      };
      community: {
        title: string;
        desc: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    email: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

const content: Record<Language, Content> = {
  en: {
    navbar: {
      about: "About",
      work: "Work",
      impact: "Impact",
      blog: "Blog",
    },
    hero: {
      tagline: "Problem Solver • Self-taught Learner",
      subtitle: "Programmer • Musician • Filmmaker • Non-profit founder",
      description:
        "Turning complex problems into elegant solutions through code, creativity, and community impact.",
      cta: {
        collaborate: "Let's collaborate",
        viewCode: "View my code",
        readThoughts: "Read my thoughts",
      },
    },
    about: {
      title: "About Me",
      intro:
        "I'm Gabriel V. Santana — a natural problem solver who thrives on learning and creating. What drives me is the challenge of understanding complex systems and turning ideas into reality.",
      selfTaught:
        "I'm primarily self-taught across programming, music, film, and languages — a journey that taught me how to learn quickly and adapt to new technologies and creative challenges. This autodidactic approach has shaped my perspective on problem-solving and innovation.",
      nonprofit:
        "Beyond individual work, I founded a non-profit focused on education, culture, and the arts, believing that access to knowledge and creative expression can transform communities.",
      stats: {
        learningStyle: {
          title: "Learning Style",
          value: "Self-taught",
          desc: "Continuous learner & problem solver",
        },
        approach: {
          title: "Approach",
          value: "Solution-focused",
          desc: "Clean architecture & reliability",
        },
      },
    },
    work: {
      title: "What I Do",
      programming: {
        title: "Programming",
        subtitle: "Full-stack Development",
        text: "Specializing in TypeScript, React, and Node.js. I focus on building scalable applications with clean architecture, excellent developer experience, and rock-solid reliability.",
        cta: "View my code",
      },
      music: {
        title: "Music",
        subtitle: "Composition & Guitar",
        text: "Creating original compositions that blend different textures and tell stories through sound. From intimate acoustic pieces to complex arrangements.",
        cta: "Listen to demos",
      },
      film: {
        title: "Film",
        subtitle: "Writing & Directing",
        text: "Crafting visual stories with small crews and strong ideas. Focused on authentic emotions and compelling narratives that resonate with audiences.",
        cta: "Watch my reels",
      },
    },
    languages: {
      title: "Languages & Culture",
      description:
        "Native Portuguese speaker, self-taught in English and Spanish. I've worked and lived internationally, gaining cultural perspectives that enrich my creative and professional work.",
      experience: "London • Buenos Aires • São Paulo",
      native: "Native",
      selfTaught: "Self-taught",
      lived: "International Experience",
      countries: "Global Reach",
      countriesDesc:
        "Collaborated with professionals across 15+ countries and multiple continents",
      countriesList:
        "India • Ukraine • Poland • Brazil • Argentina • Uruguay • Chile • Colombia • Venezuela • Mexico • USA • UK • Spain • El Salvador",
      timezone: "Time Zone Mastery",
      timezoneDesc:
        "Based in São Paulo metropolitan area (UTC-3), I successfully manage projects across 12+ hour differences, from Pacific Time (UTC-8) to India Standard Time (UTC+5:30)",
      timezoneRange: "UTC-8 to UTC+5:30",
      continents: "4 Continents",
      countries15: "15+ Countries",
      timezones12: "12+ Hour Range",
      location: "São Paulo Metro Area",
    },
    nonprofit: {
      title: "Instituto Tim Beddows",
      subtitle:
        "Using technology and creativity to expand access to education and the arts",
      mission: {
        title: "Our Mission",
        text1:
          "I'm building Instituto Tim Beddows, an institute dedicated to making arts education and cultural programs accessible to everyone, regardless of background or resources.",
        text2:
          "Through community workshops, mentorship programs, and cultural initiatives, we're creating opportunities for learning and creative expression.",
        cta: {
          getInvolved: "Get involved",
          readUpdates: "Read our updates",
        },
      },
      programs: {
        arts: {
          title: "Arts Programs",
          desc: "Creative workshops and mentorship",
        },
        education: {
          title: "Education",
          desc: "Learning opportunities for all ages",
        },
        community: {
          title: "Community",
          desc: "Building connections through culture",
        },
      },
    },
    contact: {
      title: "Let's Connect",
      description:
        "Whether it's a collaboration, commission, or just to say hello — I'd love to hear from you.",
      email: "Email me",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Gabriel V. Santana",
      builtWith: "Built with care • All rights reserved",
    },
  },
  pt: {
    navbar: {
      about: "Sobre",
      work: "Trabalho",
      impact: "Impacto",
      blog: "Blog",
    },
    hero: {
      tagline: "Solucionador de Problemas • Autodidata",
      subtitle: "Programador • Músico • Cineasta • Fundador de ONG",
      description:
        "Transformando problemas complexos em soluções elegantes através de código, criatividade e impacto comunitário.",
      cta: {
        collaborate: "Vamos colaborar",
        viewCode: "Ver meu código",
        readThoughts: "Ler meus pensamentos",
      },
    },
    about: {
      title: "Sobre Mim",
      intro:
        "Eu sou Gabriel V. Santana — um solucionador natural de problemas que prospera aprendendo e criando. O que me motiva é o desafio de entender sistemas complexos e transformar ideias em realidade.",
      selfTaught:
        "Sou principalmente autodidata em programação, música, cinema e idiomas — uma jornada que me ensinou a aprender rapidamente e me adaptar a novas tecnologias e desafios criativos. Essa abordagem autodidática moldou minha perspectiva sobre resolução de problemas e inovação.",
      nonprofit:
        "Além do trabalho individual, fundei uma organização sem fins lucrativos focada em educação, cultura e artes, acreditando que o acesso ao conhecimento e expressão criativa pode transformar comunidades.",
      stats: {
        learningStyle: {
          title: "Estilo de Aprendizado",
          value: "Autodidata",
          desc: "Aprendiz contínuo e solucionador de problemas",
        },
        approach: {
          title: "Abordagem",
          value: "Focado em soluções",
          desc: "Arquitetura limpa e confiabilidade",
        },
      },
    },
    work: {
      title: "O Que Eu Faço",
      programming: {
        title: "Programação",
        subtitle: "Desenvolvimento Full-stack",
        text: "Especializado em TypeScript, React e Node.js. Foco na construção de aplicações escaláveis com arquitetura limpa, excelente experiência do desenvolvedor e confiabilidade sólida.",
        cta: "Ver meu código",
      },
      music: {
        title: "Música",
        subtitle: "Composição e Violão",
        text: "Criando composições originais que misturam diferentes texturas e contam histórias através do som. De peças acústicas intimistas a arranjos complexos.",
        cta: "Escutar demos",
      },
      film: {
        title: "Cinema",
        subtitle: "Roteiro e Direção",
        text: "Criando histórias visuais com equipes pequenas e ideias fortes. Focado em emoções autênticas e narrativas convincentes que ressoam com o público.",
        cta: "Assistir meus reels",
      },
    },
    languages: {
      title: "Idiomas e Cultura",
      description:
        "Falante nativo de português, autodidacta em inglês e espanhol. Trabalhei e morei internacionalmente, ganhando perspectivas culturais que enriquecem meu trabalho criativo e profissional.",
      experience: "Londres • Buenos Aires • São Paulo",
      native: "Nativo",
      selfTaught: "Autodidacta",
      lived: "Experiência Internacional",
      countries: "Alcance Global",
      countriesDesc:
        "Colaborei com profissionais em mais de 15 países e múltiplos continentes",
      countriesList:
        "Índia • Ucrânia • Polônia • Brasil • Argentina • Uruguai • Chile • Colômbia • Venezuela • México • EUA • Reino Unido • Espanha • El Salvador",
      timezone: "Maestria em Fusos Horários",
      timezoneDesc:
        "Baseado na região metropolitana de São Paulo (UTC-3), gerencio projetos com sucesso através de diferenças de mais de 12 horas, do Horário do Pacífico (UTC-8) ao Horário Padrão da Índia (UTC+5:30)",
      timezoneRange: "UTC-8 a UTC+5:30",
      continents: "4 Continentes",
      countries15: "15+ Países",
      timezones12: "12+ Horas de Diferença",
      location: "Região Metro de SP",
    },
    nonprofit: {
      title: "Instituto Tim Beddows",
      subtitle:
        "Usando tecnologia e criatividade para expandir acesso à educação e artes",
      mission: {
        title: "Nossa Missão",
        text1:
          "Estou construindo o Instituto Tim Beddows, um instituto dedicado a tornar a educação artística e programas culturais acessíveis a todos, independentemente de origem ou recursos.",
        text2:
          "Através de workshops comunitários, programas de mentoria e iniciativas culturais, estamos criando oportunidades para aprendizado e expressão criativa.",
        cta: {
          getInvolved: "Participe",
          readUpdates: "Leia nossas atualizações",
        },
      },
      programs: {
        arts: {
          title: "Programas Artísticos",
          desc: "Workshops criativos e mentoria",
        },
        education: {
          title: "Educação",
          desc: "Oportunidades de aprendizado para todas as idades",
        },
        community: {
          title: "Comunidade",
          desc: "Construindo conexões através da cultura",
        },
      },
    },
    contact: {
      title: "Vamos nos Conectar",
      description:
        "Seja uma colaboração, comissão, ou só para dizer oi — adoraria ouvir de você.",
      email: "Me envie um email",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Gabriel V. Santana",
      builtWith: "Feito com carinho • Todos os direitos reservados",
    },
  },
  es: {
    navbar: {
      about: "Sobre mí",
      work: "Trabajo",
      impact: "Impacto",
      blog: "Blog",
    },
    hero: {
      tagline: "Solucionador de Problemas • Autodidacta",
      subtitle: "Programador • Músico • Cineasta • Fundador de ONG",
      description:
        "Transformando problemas complejos en soluciones elegantes a través de código, creatividad e impacto comunitario.",
      cta: {
        collaborate: "Colaboremos",
        viewCode: "Ver mi código",
        readThoughts: "Leer mis pensamientos",
      },
    },
    about: {
      title: "Sobre Mí",
      intro:
        "Soy Gabriel V. Santana — un solucionador natural de problemas que prospera aprendiendo y creando. Lo que me motiva es el desafío de entender sistemas complejos y transformar ideas en realidad.",
      selfTaught:
        "Soy principalmente autodidacta en programación, música, cine e idiomas — un viaje que me enseñó a aprender rápidamente y adaptarme a nuevas tecnologías y desafíos creativos. Este enfoque autodidacta ha moldeado mi perspectiva sobre la resolución de problemas e innovación.",
      nonprofit:
        "Más allá del trabajo individual, fundé una organización sin fines de lucro enfocada en educación, cultura y artes, creyendo que el acceso al conocimiento y expresión creativa puede transformar comunidades.",
      stats: {
        learningStyle: {
          title: "Estilo de Aprendizaje",
          value: "Autodidacta",
          desc: "Aprendiz continuo y solucionador de problemas",
        },
        approach: {
          title: "Enfoque",
          value: "Enfocado en soluciones",
          desc: "Arquitectura limpia y confiabilidad",
        },
      },
    },
    work: {
      title: "Lo Que Hago",
      programming: {
        title: "Programación",
        subtitle: "Desarrollo Full-stack",
        text: "Especializado en TypeScript, React y Node.js. Me enfoco en construir aplicaciones escalables con arquitectura limpia, excelente experiencia del desarrollador y confiabilidad sólida.",
        cta: "Ver mi código",
      },
      music: {
        title: "Música",
        subtitle: "Composición y Guitarra",
        text: "Creando composiciones originales que mezclan diferentes texturas y cuentan historias a través del sonido. Desde piezas acústicas íntimas hasta arreglos complejos.",
        cta: "Escuchar demos",
      },
      film: {
        title: "Cine",
        subtitle: "Guión y Dirección",
        text: "Creando historias visuales con equipos pequeños e ideas fuertes. Enfocado en emociones auténticas y narrativas convincentes que resuenan con la audiencia.",
        cta: "Ver mis reels",
      },
    },
    languages: {
      title: "Idiomas y Cultura",
      description:
        "Hablante nativo de portugués, autodidacta en inglés y español. He trabajado y vivido internacionalmente, ganando perspectivas culturales que enriquecen mi trabajo creativo y profesional.",
      experience: "Londres • Buenos Aires • São Paulo",
      native: "Nativo",
      selfTaught: "Autodidacta",
      lived: "Experiencia Internacional",
      countries: "Alcance Global",
      countriesDesc:
        "He colaborado con profesionales en más de 15 países y múltiples continentes",
      countriesList:
        "India • Ucrania • Polonia • Brasil • Argentina • Uruguay • Chile • Colombia • Venezuela • México • EUA • Reino Unido • España • El Salvador",
      timezone: "Maestría en Zonas Horarias",
      timezoneDesc:
        "Basado en el área metropolitana de São Paulo (UTC-3), gestiono proyectos exitosamente a través de diferencias de más de 12 horas, desde Hora del Pacífico (UTC-8) hasta Hora Estándar de India (UTC+5:30)",
      timezoneRange: "UTC-8 a UTC+5:30",
      continents: "4 Continentes",
      countries15: "15+ Países",
      timezones12: "12+ Horas de Diferencia",
      location: "Área Metro de SP",
    },
    nonprofit: {
      title: "Instituto Tim Beddows",
      subtitle:
        "Usando tecnología y creatividad para expandir acceso a educación y artes",
      mission: {
        title: "Nuestra Misión",
        text1:
          "Estoy construyendo el Instituto Tim Beddows, un instituto dedicado a hacer que la educación artística y programas culturales sean accesibles para todos, sin importar origen o recursos.",
        text2:
          "A través de talleres comunitarios, programas de mentoría e iniciativas culturales, estamos creando oportunidades para el aprendizaje y expresión creativa.",
        cta: {
          getInvolved: "Participa",
          readUpdates: "Lee nuestras actualizaciones",
        },
      },
      programs: {
        arts: {
          title: "Programas Artísticos",
          desc: "Talleres creativos y mentoría",
        },
        education: {
          title: "Educación",
          desc: "Oportunidades de aprendizaje para todas las edades",
        },
        community: {
          title: "Comunidad",
          desc: "Construyendo conexiones a través de la cultura",
        },
      },
    },
    contact: {
      title: "Conectemos",
      description:
        "Ya sea una colaboración, comisión, o solo para saludar — me encantaría saber de ti.",
      email: "Envíame un email",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Gabriel V. Santana",
      builtWith: "Hecho con cariño • Todos los derechos reservados",
    },
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Content;
}>({
  language: "en",
  setLanguage: () => {},
  t: content.en,
});

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "en"
  );

  useEffect(() => {
    document.title =
      language === "en"
        ? "Gabriel V. Santana — Programmer • Artist • Filmmaker"
        : language === "pt"
        ? "Gabriel V. Santana — Programador • Artista • Cineasta"
        : "Gabriel V. Santana — Programador • Artista • Cineasta";

    localStorage.setItem("language", language);

    document.documentElement.style.scrollBehavior = "smooth";

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const navbarHeight = 80;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);

  const contextValue = {
    language,
    setLanguage,
    t: content[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="min-h-screen bg-base-200 text-base-content">
        <Navbar />

        <main className="space-y-32">
          <Hero />

          <section id="about" className="container mx-auto px-4 scroll-mt-20">
            <AboutSection />
          </section>

          <section id="work" className="container mx-auto px-4 scroll-mt-20">
            <WorkSection />
          </section>

          <section
            id="languages"
            className="container mx-auto px-4 scroll-mt-20"
          >
            <LanguagesSection />
          </section>

          <section id="nonprofit" className="bg-base-100 py-16 scroll-mt-20">
            <NonprofitSection />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

function Navbar() {
  const { t } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-lg font-semibold">
          GVS
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-1">
          <a className="btn btn-ghost" href="#about">
            {t.navbar.about}
          </a>
          <a className="btn btn-ghost" href="#work">
            {t.navbar.work}
          </a>
          <a className="btn btn-ghost" href="#nonprofit">
            {t.navbar.impact}
          </a>
          <Link to="/blog" className="btn btn-ghost">
            {t.navbar.blog}
          </Link>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <LanguageSelector />
        <ThemeToggle />
        <button
          className="btn btn-ghost md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden w-full bg-base-100 border-t border-base-300">
          <ul className="menu p-2">
            <a
              className="btn btn-ghost justify-start"
              href="#about"
              onClick={() => setOpen(false)}
            >
              {t.navbar.about}
            </a>
            <a
              className="btn btn-ghost justify-start"
              href="#work"
              onClick={() => setOpen(false)}
            >
              {t.navbar.work}
            </a>
            <a
              className="btn btn-ghost justify-start"
              href="#nonprofit"
              onClick={() => setOpen(false)}
            >
              {t.navbar.impact}
            </a>
            <Link
              to="/blog"
              className="btn btn-ghost justify-start"
              onClick={() => setOpen(false)}
            >
              {t.navbar.blog}
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

function Hero() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="hero min-h-[80vh] bg-gradient-to-br from-base-200 to-base-300">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <div className="text-sm font-medium text-primary mb-2">
              {t.hero.tagline}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gabriel V. Santana
            </h1>
          </div>
          <p className="mt-6 text-xl md:text-2xl opacity-90 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="mt-4 text-lg opacity-70 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a className="btn btn-primary btn-lg" href="#contact">
              {t.hero.cta.collaborate}
            </a>
            <a
              className="btn btn-outline btn-lg"
              href="https://github.com/gabrielvsantana"
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.cta.viewCode}
            </a>
            <Link to="/blog" className="btn btn-ghost btn-lg">
              {t.hero.cta.readThoughts}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.about.title}</h2>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">{t.about.intro}</p>
          <p className="mb-4">{t.about.selfTaught}</p>
          <p>{t.about.nonprofit}</p>
        </div>
        <div className="space-y-4">
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-figure text-primary">
              <div className="text-2xl">🚀</div>
            </div>
            <div className="stat-title">
              {t.about.stats.learningStyle.title}
            </div>
            <div className="stat-value text-lg">
              {t.about.stats.learningStyle.value}
            </div>
            <div className="stat-desc">{t.about.stats.learningStyle.desc}</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-figure text-secondary">
              <div className="text-2xl">🎯</div>
            </div>
            <div className="stat-title">{t.about.stats.approach.title}</div>
            <div className="stat-value text-lg">
              {t.about.stats.approach.value}
            </div>
            <div className="stat-desc">{t.about.stats.approach.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkSection() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.work.title}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Card
          emoji="🧑‍💻"
          title={t.work.programming.title}
          subtitle={t.work.programming.subtitle}
          text={t.work.programming.text}
          skills={["TypeScript", "React", "Node.js", "System Design"]}
          cta={{
            label: t.work.programming.cta,
            href: "https://github.com/gabrielvsantana",
          }}
        />
        <Card
          emoji="🎸"
          title={t.work.music.title}
          subtitle={t.work.music.subtitle}
          text={t.work.music.text}
          skills={["Composition", "Guitar", "Arrangement", "Audio Production"]}
          cta={{ label: t.work.music.cta, href: "#contact" }}
        />
        <Card
          emoji="🎬"
          title={t.work.film.title}
          subtitle={t.work.film.subtitle}
          text={t.work.film.text}
          skills={[
            "Screenwriting",
            "Directing",
            "Producing",
            "Post-production",
          ]}
          cta={{ label: t.work.film.cta, href: "#contact" }}
        />
      </div>
    </div>
  );
}

function LanguagesSection() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t.languages.title}
      </h2>

      {/* Languages & Experience Combined */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {/* Languages Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">
              <span className="text-2xl mr-2">💬</span>
              Languages
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇧🇷</span>
                  <span className="font-semibold">Português</span>
                </div>
                <span className="badge badge-primary">
                  {t.languages.native}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="font-semibold">English</span>
                </div>
                <span className="badge badge-outline">
                  {t.languages.selfTaught}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇦🇷</span>
                  <span className="font-semibold">Español</span>
                </div>
                <span className="badge badge-outline">
                  {t.languages.selfTaught}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* International Experience */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">
              <span className="text-2xl mr-2">✈️</span>
              {t.languages.lived}
            </h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                <span className="text-2xl">🇬🇧</span>
                <span className="font-semibold">London</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                <span className="text-2xl">🇦🇷</span>
                <span className="font-semibold">Buenos Aires</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <span className="text-2xl">🇧🇷</span>
                <div>
                  <div className="font-semibold">São Paulo</div>
                  <div className="text-xs opacity-70">
                    {t.languages.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Global Reach */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">
              <span className="text-2xl mr-2">🌍</span>
              {t.languages.countries}
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {t.languages.countries15}
                </div>
                <div className="text-xs opacity-70">Collaborated</div>
              </div>
              <div className="text-center p-3 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-secondary">
                  {t.languages.continents}
                </div>
                <div className="text-xs opacity-70">Reached</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-3">
              {t.languages.countriesDesc}
            </p>

            <div className="text-xs opacity-60 leading-relaxed">
              {t.languages.countriesList}
            </div>
          </div>
        </div>

        {/* Time Zone Mastery */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">
              <span className="text-2xl mr-2">🕐</span>
              {t.languages.timezone}
            </h3>

            {/* Time Zone Visual */}
            <div className="text-center p-4 bg-gradient-to-r from-base-200 to-base-300 rounded-lg mb-4">
              <div className="text-xl font-bold text-accent">
                {t.languages.timezones12}
              </div>
              <div className="text-sm opacity-70">Coverage</div>
              <div className="text-xs mt-2 font-mono">
                {t.languages.timezoneRange}
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              {t.languages.timezoneDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NonprofitSection() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.nonprofit.title}</h2>
          <p className="text-lg opacity-80">{t.nonprofit.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t.nonprofit.mission.title}
            </h3>
            <p className="mb-4">{t.nonprofit.mission.text1}</p>
            <p className="mb-6">{t.nonprofit.mission.text2}</p>
            <div className="flex gap-3 flex-wrap">
              <a className="btn btn-primary" href="#contact">
                {t.nonprofit.mission.cta.getInvolved}
              </a>
              <Link to="/blog" className="btn btn-outline">
                {t.nonprofit.mission.cta.readUpdates}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
              <div className="text-2xl">🎨</div>
              <div>
                <h4 className="font-semibold">
                  {t.nonprofit.programs.arts.title}
                </h4>
                <p className="text-sm opacity-70">
                  {t.nonprofit.programs.arts.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
              <div className="text-2xl">📚</div>
              <div>
                <h4 className="font-semibold">
                  {t.nonprofit.programs.education.title}
                </h4>
                <p className="text-sm opacity-70">
                  {t.nonprofit.programs.education.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
              <div className="text-2xl">🤝</div>
              <div>
                <h4 className="font-semibold">
                  {t.nonprofit.programs.community.title}
                </h4>
                <p className="text-sm opacity-70">
                  {t.nonprofit.programs.community.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props: {
  emoji: string;
  title: string;
  subtitle: string;
  text: string;
  skills: string[];
  cta?: { label: string; href: string };
}) {
  const { emoji, title, subtitle, text, skills, cta } = props;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">{emoji}</div>
          <div>
            <h3 className="card-title text-xl">{title}</h3>
            <p className="text-sm opacity-70">{subtitle}</p>
          </div>
        </div>
        <p className="mb-4">{text}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Skills & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="badge badge-outline badge-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {cta && (
          <div className="card-actions">
            <a
              className="btn btn-primary btn-sm"
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-3xl mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg mb-6">{t.contact.description}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                className="btn btn-primary"
                href="mailto:gabrielsantana.it@gmail.com"
              >
                <span className="text-lg">✉️</span>
                {t.contact.email}
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/gabrielvsantana"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-lg">💼</span>
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="footer footer-center p-8 mt-32 bg-base-300 text-base-content/80">
      <aside>
        <p className="font-medium">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <p className="text-sm opacity-70">{t.footer.builtWith}</p>
      </aside>
    </footer>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="btn btn-ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: "en" as Language, flag: "🇬🇧", name: "English" },
    { code: "pt" as Language, flag: "🇧🇷", name: "Português" },
    { code: "es" as Language, flag: "🇦🇷", name: "Español" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost"
        title="Change language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={`flex items-center gap-2 ${
                language === lang.code ? "active" : ""
              }`}
              onClick={() => {
                setLanguage(lang.code);
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
