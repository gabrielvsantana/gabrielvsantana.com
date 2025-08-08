import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, createContext, useContext } from "react";

type Language = "en" | "pt" | "es";

type BlogContent = {
  title: string;
  comingSoon: string;
  backHome: string;
  posts: {
    hello: {
      title: string;
      summary: string;
    };
    nonprofit: {
      title: string;
      summary: string;
    };
  };
  readSoon: string;
};

const blogContent: Record<Language, BlogContent> = {
  en: {
    title: "Blog",
    comingSoon: "Coming Soon",
    backHome: "← Home",
    posts: {
      hello: {
        title: "Hello, World",
        summary: "Why I'm building things in public and sharing my journey as a self-taught creator."
      },
      nonprofit: {
        title: "Instituto Tim Beddows",
        summary: "The story behind building an institute for arts education and cultural programs."
      }
    },
    readSoon: "Read (soon)"
  },
  pt: {
    title: "Blog",
    comingSoon: "Em Breve",
    backHome: "← Início",
    posts: {
      hello: {
        title: "Olá, Mundo",
        summary: "Por que estou construindo coisas em público e compartilhando minha jornada como criador autodidata."
      },
      nonprofit: {
        title: "Instituto Tim Beddows",
        summary: "A história por trás da construção de um instituto para educação artística e programas culturais."
      }
    },
    readSoon: "Ler (em breve)"
  },
  es: {
    title: "Blog",
    comingSoon: "Próximamente",
    backHome: "← Inicio",
    posts: {
      hello: {
        title: "Hola, Mundo",
        summary: "Por qué estoy construyendo cosas en público y compartiendo mi viaje como creador autodidacta."
      },
      nonprofit: {
        title: "Instituto Tim Beddows",
        summary: "La historia detrás de la construcción de un instituto para educación artística y programas culturales."
      }
    },
    readSoon: "Leer (pronto)"
  }
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: BlogContent;
}>({
  language: "en",
  setLanguage: () => {},
  t: blogContent.en,
});

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
});

function BlogIndex() {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "en"
  );

  useEffect(() => {
    document.title = language === "en" 
      ? "Blog — Gabriel V. Santana"
      : language === "pt"
      ? "Blog — Gabriel V. Santana"
      : "Blog — Gabriel V. Santana";
    
    localStorage.setItem("language", language);
  }, [language]);

  const contextValue = {
    language,
    setLanguage,
    t: blogContent[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="min-h-screen bg-base-200 text-base-content">
        <BlogNavbar />

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{contextValue.t.title}</h1>
              <p className="text-lg opacity-70">{contextValue.t.comingSoon}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <BlogPostCard 
                title={contextValue.t.posts.hello.title}
                summary={contextValue.t.posts.hello.summary}
                readLabel={contextValue.t.readSoon}
                slug="hello"
              />
              <BlogPostCard 
                title={contextValue.t.posts.nonprofit.title}
                summary={contextValue.t.posts.nonprofit.summary}
                readLabel={contextValue.t.readSoon}
                slug="nonprofit"
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

function BlogNavbar() {
  const { t } = useContext(LanguageContext);
  
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-lg font-semibold">
          GVS
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <Link to="/" className="btn btn-ghost">
          {t.backHome}
        </Link>
      </div>

      <div className="navbar-end gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
}

function BlogPostCard({ title, summary, readLabel }: {
  title: string;
  summary: string;
  readLabel: string;
  slug: string;
}) {
  return (
    <article className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <h2 className="card-title text-xl mb-3">{title}</h2>
        <p className="text-base-content/80 leading-relaxed mb-4">{summary}</p>
        <div className="card-actions">
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => alert('Coming soon! 🚀')}
          >
            {readLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  const { language } = useContext(LanguageContext);
  
  const footerText = language === "en" 
    ? "Built with care • All rights reserved"
    : language === "pt"
    ? "Feito com carinho • Todos os direitos reservados"
    : "Hecho con cariño • Todos los derechos reservados";

  return (
    <footer className="footer footer-center p-8 mt-32 bg-base-300 text-base-content/80">
      <aside>
        <p className="font-medium">
          © {new Date().getFullYear()} Gabriel V. Santana
        </p>
        <p className="text-sm opacity-70">
          {footerText}
        </p>
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

  const currentLang = languages.find(lang => lang.code === language);

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
