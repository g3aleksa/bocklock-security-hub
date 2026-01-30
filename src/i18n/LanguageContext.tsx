import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'bocklock-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const getInitialLanguage = (): Language => {
    // First check URL parameter
    if (lang && ['en', 'de', 'sr'].includes(lang)) {
      return lang as Language;
    }
    
    // Then check localStorage
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['en', 'de', 'sr'].includes(stored)) {
      return stored as Language;
    }
    
    // Default to English
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    
    // Update URL to reflect new language
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|de|sr)/, '');
    const newPath = `/${newLang}${pathWithoutLang || ''}`;
    navigate(newPath);
  };

  const getLocalizedPath = (path: string): string => {
    // Remove any existing language prefix
    const cleanPath = path.replace(/^\/(en|de|sr)/, '');
    return `/${language}${cleanPath}`;
  };

  // Sync language with URL changes
  useEffect(() => {
    if (lang && ['en', 'de', 'sr'].includes(lang)) {
      setLanguageState(lang as Language);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  }, [lang]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
