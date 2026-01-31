import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
] as const;

export function Header() {
  const { language, setLanguage, t, getLocalizedPath } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page (has dark hero)
  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use light text (transparent header on dark hero)
  const useLightText = isHomePage && !isScrolled;

  const navItems = [
    { path: '', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/pricing', label: t.nav.pricing },
    { path: '/contact', label: t.nav.contact },
  ];

  const currentLanguage = languages.find(l => l.code === language);

  const isActive = (path: string) => {
    const localizedPath = getLocalizedPath(path);
    return location.pathname === localizedPath || 
           (path === '' && location.pathname === `/${language}`);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : isHomePage
            ? 'bg-transparent'
            : 'bg-white shadow-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to={getLocalizedPath('')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Shield className={cn(
                "h-8 w-8 transition-transform group-hover:scale-110",
                useLightText ? "text-accent" : "text-accent"
              )} />
              <div className="absolute inset-0 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-heading font-bold">
              <span className="text-accent">Bock</span>
              <span className={cn(
                "transition-colors",
                useLightText ? "text-white" : "text-primary"
              )}>Lock</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={getLocalizedPath(item.path)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive(item.path)
                    ? 'text-accent'
                    : useLightText 
                      ? 'text-white/90 hover:text-accent'
                      : 'text-primary/80 hover:text-accent'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn(
                    "gap-2",
                    useLightText 
                      ? "text-white hover:text-accent hover:bg-white/10" 
                      : "text-primary hover:text-accent"
                  )}
                >
                  <span className="text-lg">{currentLanguage?.flag}</span>
                  <span className="text-sm">{language.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      'gap-2 cursor-pointer',
                      language === lang.code && 'bg-accent/10'
                    )}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to={getLocalizedPath('/contact')}>{t.nav.getInTouch}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                useLightText ? "text-white hover:bg-white/10" : "text-primary"
              )}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={getLocalizedPath(item.path)}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  isActive(item.path)
                    ? 'bg-accent/10 text-accent'
                    : 'text-primary/80 hover:bg-muted'
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Options in Mobile */}
            <div className="flex gap-2 px-4 py-3 border-t mt-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className="flex-1"
                >
                  <span className="mr-1">{lang.flag}</span>
                  {lang.code.toUpperCase()}
                </Button>
              ))}
            </div>

            <Button
              asChild
              className="mx-4 mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link
                to={getLocalizedPath('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.getInTouch}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
