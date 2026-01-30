import { Link } from 'react-router-dom';
import { Shield, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t, getLocalizedPath } = useLanguage();

  const navLinks = [
    { path: '', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/pricing', label: t.nav.pricing },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to={getLocalizedPath('')} className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-heading font-bold">
                <span className="text-accent">Bock</span>
                <span>Lock</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={getLocalizedPath(link.path)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.contact.info.title}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                +381 11 123 4567
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                info@bocklock.com
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Knez Mihailova 42<br />Belgrade, Serbia</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link
                  to={getLocalizedPath('/privacy')}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('/terms')}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>

            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
