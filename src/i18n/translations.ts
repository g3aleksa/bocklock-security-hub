export type Language = 'en' | 'de' | 'sr';

// Define a more flexible type for translations
export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    pricing: string;
    contact: string;
    getInTouch: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      viewPricing: string;
      contactUs: string;
    };
    trust: {
      banks: string;
      monitoring: string;
      certified: string;
      experience: string;
    };
    features: {
      title: string;
      subtitle: string;
      hardware: { title: string; description: string };
      installation: { title: string; description: string };
      monitoring: { title: string; description: string };
      custom: { title: string; description: string };
    };
    whyUs: {
      title: string;
      subtitle: string;
      reliability: { title: string; description: string };
      expertise: { title: string; description: string };
      engineering: { title: string; description: string };
    };
    testimonials: {
      title: string;
      subtitle: string;
      testimonial1: { quote: string; name: string; position: string; company: string };
      testimonial2: { quote: string; name: string; position: string; company: string };
      testimonial3: { quote: string; name: string; position: string; company: string };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  about: {
    hero: { title: string; subtitle: string };
    mission: { title: string; description: string };
    story: { title: string; description: string };
    expertise: {
      title: string;
      iso: string;
      vds: string;
      german: string;
      international: string;
    };
    values: {
      title: string;
      security: { title: string; description: string };
      reliability: { title: string; description: string };
      discretion: { title: string; description: string };
      innovation: { title: string; description: string };
    };
    team: {
      title: string;
      subtitle: string;
      member1: { name: string; position: string; bio: string };
      member2: { name: string; position: string; bio: string };
      member3: { name: string; position: string; bio: string };
      member4: { name: string; position: string; bio: string };
    };
  };
  pricing: {
    hero: { title: string; subtitle: string };
    tiers: {
      basic: {
        name: string;
        price: string;
        unit: string;
        description: string;
        features: readonly string[];
        cta: string;
      };
      standard: {
        name: string;
        price: string;
        unit: string;
        description: string;
        features: readonly string[];
        cta: string;
      };
      premium: {
        name: string;
        price: string;
        unit: string;
        description: string;
        features: readonly string[];
        cta: string;
        recommended: string;
      };
    };
    comparison: {
      title: string;
      features: {
        hardware: string;
        installation: string;
        training: string;
        monitoring: string;
        maintenance: string;
        support: string;
      };
      support: {
        email: string;
        priority: string;
        dedicated: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  contact: {
    hero: { title: string; subtitle: string };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      language: string;
      submit: string;
      success: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      address: string;
      addressValue: string;
      hours: string;
      hoursValue: string;
    };
    alternative: {
      title: string;
      description: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    legal: string;
    privacy: string;
    terms: string;
    followUs: string;
    copyright: string;
  };
}

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      pricing: 'Pricing',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
    },
    // Home Page
    home: {
      hero: {
        title: 'High-Security Locking Solutions for Banks',
        subtitle: 'BockLock delivers, installs, and manages unbreakable security locks and access systems tailored for financial institutions.',
        viewPricing: 'View Pricing',
        contactUs: 'Contact Us',
      },
      trust: {
        banks: '100+ Banks Secured',
        monitoring: '24/7 Monitoring',
        certified: 'ISO Certified',
        experience: '10+ Years Experience',
      },
      features: {
        title: 'Our Security Solutions',
        subtitle: 'Comprehensive protection for your financial institution',
        hardware: {
          title: 'High-Security Hardware',
          description: 'State-of-the-art locks and access control systems engineered to meet the highest banking security standards.',
        },
        installation: {
          title: 'Professional Installation',
          description: 'Expert installation and management services ensuring seamless integration with your existing security infrastructure.',
        },
        monitoring: {
          title: '24/7 Remote Monitoring',
          description: 'Round-the-clock surveillance and instant alert systems to protect your assets at all times.',
        },
        custom: {
          title: 'Custom Vault Solutions',
          description: 'Tailored security solutions for vaults, safes, and specialized secure areas in your institution.',
        },
      },
      whyUs: {
        title: 'Why Choose BockLock',
        subtitle: 'Trusted by leading financial institutions across Europe',
        reliability: {
          title: 'Unmatched Reliability',
          description: 'Our systems boast a 99.99% uptime guarantee, ensuring your security never sleeps.',
        },
        expertise: {
          title: 'Banking Expertise',
          description: 'Over a decade of specialized experience securing banks and financial institutions.',
        },
        engineering: {
          title: 'German Engineering',
          description: 'Precision-engineered solutions meeting the strictest European security standards.',
        },
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Trusted by security professionals worldwide',
        testimonial1: {
          quote: 'BockLock transformed our security infrastructure. Their attention to detail and 24/7 support gives us complete peace of mind.',
          name: 'Hans Mueller',
          position: 'Chief Security Officer',
          company: 'Deutsche Volksbank',
        },
        testimonial2: {
          quote: 'The installation was seamless, and the monitoring system has prevented multiple security incidents. Highly recommended.',
          name: 'Sarah Thompson',
          position: 'Security Director',
          company: 'Central European Bank',
        },
        testimonial3: {
          quote: 'Professional, reliable, and always available. BockLock is our trusted partner for all security needs.',
          name: 'Milan Petrović',
          position: 'Operations Manager',
          company: 'Banka Intesa Serbia',
        },
      },
      cta: {
        title: 'Ready to Secure Your Institution?',
        subtitle: 'Contact us today for a free security assessment and customized quote.',
        button: 'Contact Us Today',
      },
    },
    // About Page
    about: {
      hero: {
        title: 'About BockLock',
        subtitle: 'Your Trusted Security Partner for Banks',
      },
      mission: {
        title: 'Our Mission',
        description: 'To provide the highest level of physical and electronic security for financial institutions through innovative locking solutions and full lifecycle management.',
      },
      story: {
        title: 'Our Story',
        description: 'Founded in 2015, BockLock began with a simple mission: to revolutionize bank security. Starting in Belgrade, we quickly expanded across Europe, becoming the trusted partner for over 100 financial institutions. Our commitment to German engineering standards and continuous innovation has made us the leader in high-security solutions for the banking sector.',
      },
      expertise: {
        title: 'Certifications & Expertise',
        iso: 'ISO 27001 Certified',
        vds: 'VdS Approved',
        german: 'German Engineering Standards',
        international: 'International Presence',
      },
      values: {
        title: 'Our Core Values',
        security: {
          title: 'Security First',
          description: 'Every decision we make prioritizes the protection of your assets.',
        },
        reliability: {
          title: 'Reliability',
          description: 'Dependable solutions that work flawlessly, every time.',
        },
        discretion: {
          title: 'Discretion',
          description: 'Confidential partnerships built on trust and professionalism.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Continuously advancing our technology to stay ahead of threats.',
        },
      },
      team: {
        title: 'Our Leadership Team',
        subtitle: 'Experts dedicated to your security',
        member1: {
          name: 'Dr. Stefan Bock',
          position: 'CEO & Founder',
          bio: '20+ years in security systems, former consultant for major European banks.',
        },
        member2: {
          name: 'Ingrid Hoffmann',
          position: 'Chief Technology Officer',
          bio: 'Expert in electronic security systems with a background in German engineering.',
        },
        member3: {
          name: 'Marko Nikolić',
          position: 'Head of Operations',
          bio: 'Leads our installation and monitoring teams across Southeast Europe.',
        },
        member4: {
          name: 'Anna Becker',
          position: 'Client Relations Director',
          bio: 'Ensures every client receives personalized, premium service.',
        },
      },
    },
    // Pricing Page
    pricing: {
      hero: {
        title: 'Transparent Pricing',
        subtitle: 'Bank Security Solutions Tailored to Your Needs',
      },
      tiers: {
        basic: {
          name: 'Basic',
          price: 'From €2,500',
          unit: 'per unit',
          description: 'Hardware sales only',
          features: [
            'High-security lock hardware',
            'Documentation & manuals',
            'Standard warranty',
            'Email support',
          ],
          cta: 'Get Started',
        },
        standard: {
          name: 'Standard',
          price: 'From €8,500',
          unit: 'per installation',
          description: 'Hardware + Installation & Training',
          features: [
            'Everything in Basic',
            'Professional installation',
            'Staff training',
            'Extended warranty',
            'Priority support',
          ],
          cta: 'Choose Standard',
        },
        premium: {
          name: 'Premium',
          price: 'Custom Quote',
          unit: 'full management',
          description: 'Complete Security Management',
          features: [
            'Everything in Standard',
            '24/7 remote monitoring',
            'Preventive maintenance',
            'Key management services',
            'Dedicated account manager',
            'Incident response team',
          ],
          cta: 'Request Quote',
          recommended: 'Recommended',
        },
      },
      comparison: {
        title: 'Feature Comparison',
        features: {
          hardware: 'High-Security Hardware',
          installation: 'Professional Installation',
          training: 'Staff Training',
          monitoring: '24/7 Monitoring',
          maintenance: 'Preventive Maintenance',
          support: 'Support Level',
        },
        support: {
          email: 'Email',
          priority: 'Priority',
          dedicated: 'Dedicated',
        },
      },
      cta: {
        title: 'Most Banks Choose Premium',
        subtitle: 'For complete peace of mind and comprehensive protection',
        button: 'Request a Quote',
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: 'Get in Touch',
        subtitle: 'Let\'s discuss your security needs',
      },
      form: {
        name: 'Full Name',
        namePlaceholder: 'John Smith',
        email: 'Email Address',
        emailPlaceholder: 'john@yourbank.com',
        phone: 'Phone Number',
        phonePlaceholder: '+1 234 567 890',
        company: 'Company / Bank Name',
        companyPlaceholder: 'Your Institution',
        message: 'Message',
        messagePlaceholder: 'Tell us about your security needs...',
        language: 'Preferred Language',
        submit: 'Send Message',
        success: 'Thank you! We\'ll be in touch within 24 hours.',
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        addressValue: 'Knez Mihailova 42, Belgrade, Serbia',
        hours: 'Working Hours',
        hoursValue: 'Mon - Fri: 8:00 - 18:00 CET',
      },
      alternative: {
        title: 'Prefer to Call?',
        description: 'Our security experts are ready to discuss your needs.',
      },
    },
    // Footer
    footer: {
      description: 'High-security locking solutions and access control systems for banks and financial institutions.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      followUs: 'Follow Us',
      copyright: '© 2026 BockLock. All rights reserved.',
    },
  },
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      pricing: 'Preise',
      contact: 'Kontakt',
      getInTouch: 'Kontaktieren Sie Uns',
    },
    // Home Page
    home: {
      hero: {
        title: 'Hochsicherheits-Schließlösungen für Banken',
        subtitle: 'BockLock liefert, installiert und verwaltet unknackbare Sicherheitsschlösser und Zugangssysteme für Finanzinstitute.',
        viewPricing: 'Preise Ansehen',
        contactUs: 'Kontaktieren Sie Uns',
      },
      trust: {
        banks: '100+ Banken Gesichert',
        monitoring: '24/7 Überwachung',
        certified: 'ISO Zertifiziert',
        experience: '10+ Jahre Erfahrung',
      },
      features: {
        title: 'Unsere Sicherheitslösungen',
        subtitle: 'Umfassender Schutz für Ihr Finanzinstitut',
        hardware: {
          title: 'Hochsicherheits-Hardware',
          description: 'Modernste Schlösser und Zugangskontrollsysteme, die höchsten Banksicherheitsstandards entsprechen.',
        },
        installation: {
          title: 'Professionelle Installation',
          description: 'Fachkundige Installation und Verwaltungsservices für nahtlose Integration in Ihre bestehende Sicherheitsinfrastruktur.',
        },
        monitoring: {
          title: '24/7 Fernüberwachung',
          description: 'Rund-um-die-Uhr-Überwachung und sofortige Alarmsysteme zum Schutz Ihrer Vermögenswerte.',
        },
        custom: {
          title: 'Individuelle Tresorlösungen',
          description: 'Maßgeschneiderte Sicherheitslösungen für Tresore, Safes und Spezialbereiche in Ihrer Institution.',
        },
      },
      whyUs: {
        title: 'Warum BockLock Wählen',
        subtitle: 'Vertraut von führenden Finanzinstituten in ganz Europa',
        reliability: {
          title: 'Unübertroffene Zuverlässigkeit',
          description: 'Unsere Systeme garantieren eine Verfügbarkeit von 99,99%, damit Ihre Sicherheit nie schläft.',
        },
        expertise: {
          title: 'Bank-Expertise',
          description: 'Über ein Jahrzehnt spezialisierte Erfahrung in der Sicherung von Banken und Finanzinstituten.',
        },
        engineering: {
          title: 'Deutsche Ingenieurskunst',
          description: 'Präzisionslösungen, die den strengsten europäischen Sicherheitsstandards entsprechen.',
        },
      },
      testimonials: {
        title: 'Was Unsere Kunden Sagen',
        subtitle: 'Vertraut von Sicherheitsexperten weltweit',
        testimonial1: {
          quote: 'BockLock hat unsere Sicherheitsinfrastruktur transformiert. Ihre Detailgenauigkeit und 24/7-Support geben uns völlige Ruhe.',
          name: 'Hans Mueller',
          position: 'Sicherheitschef',
          company: 'Deutsche Volksbank',
        },
        testimonial2: {
          quote: 'Die Installation war nahtlos, und das Überwachungssystem hat mehrere Sicherheitsvorfälle verhindert. Sehr empfehlenswert.',
          name: 'Sarah Thompson',
          position: 'Sicherheitsdirektorin',
          company: 'Zentraleuropäische Bank',
        },
        testimonial3: {
          quote: 'Professionell, zuverlässig und immer erreichbar. BockLock ist unser vertrauenswürdiger Partner für alle Sicherheitsbedürfnisse.',
          name: 'Milan Petrović',
          position: 'Betriebsleiter',
          company: 'Banka Intesa Serbien',
        },
      },
      cta: {
        title: 'Bereit, Ihre Institution zu Sichern?',
        subtitle: 'Kontaktieren Sie uns heute für eine kostenlose Sicherheitsbewertung und ein individuelles Angebot.',
        button: 'Kontaktieren Sie Uns Heute',
      },
    },
    // About Page
    about: {
      hero: {
        title: 'Über BockLock',
        subtitle: 'Ihr Vertrauenswürdiger Sicherheitspartner für Banken',
      },
      mission: {
        title: 'Unsere Mission',
        description: 'Das höchste Niveau an physischer und elektronischer Sicherheit für Finanzinstitute durch innovative Schließlösungen und vollständiges Lebenszyklusmanagement zu bieten.',
      },
      story: {
        title: 'Unsere Geschichte',
        description: 'Gegründet 2015, begann BockLock mit einer einfachen Mission: die Banksicherheit zu revolutionieren. Beginnend in Belgrad, expandierten wir schnell in ganz Europa und wurden zum vertrauenswürdigen Partner für über 100 Finanzinstitute. Unser Engagement für deutsche Ingenieursstandards und kontinuierliche Innovation hat uns zum Marktführer für Hochsicherheitslösungen im Bankensektor gemacht.',
      },
      expertise: {
        title: 'Zertifizierungen & Expertise',
        iso: 'ISO 27001 Zertifiziert',
        vds: 'VdS Zugelassen',
        german: 'Deutsche Ingenieursstandards',
        international: 'Internationale Präsenz',
      },
      values: {
        title: 'Unsere Kernwerte',
        security: {
          title: 'Sicherheit Zuerst',
          description: 'Jede Entscheidung priorisiert den Schutz Ihrer Vermögenswerte.',
        },
        reliability: {
          title: 'Zuverlässigkeit',
          description: 'Zuverlässige Lösungen, die jedes Mal einwandfrei funktionieren.',
        },
        discretion: {
          title: 'Diskretion',
          description: 'Vertrauliche Partnerschaften auf Vertrauen und Professionalität gebaut.',
        },
        innovation: {
          title: 'Innovation',
          description: 'Kontinuierliche Weiterentwicklung unserer Technologie, um Bedrohungen voraus zu sein.',
        },
      },
      team: {
        title: 'Unser Führungsteam',
        subtitle: 'Experten, die sich Ihrer Sicherheit widmen',
        member1: {
          name: 'Dr. Stefan Bock',
          position: 'CEO & Gründer',
          bio: '20+ Jahre in Sicherheitssystemen, ehemaliger Berater für große europäische Banken.',
        },
        member2: {
          name: 'Ingrid Hoffmann',
          position: 'Chief Technology Officer',
          bio: 'Expertin für elektronische Sicherheitssysteme mit Hintergrund in deutscher Ingenieurskunst.',
        },
        member3: {
          name: 'Marko Nikolić',
          position: 'Leiter Betrieb',
          bio: 'Leitet unsere Installations- und Überwachungsteams in Südosteuropa.',
        },
        member4: {
          name: 'Anna Becker',
          position: 'Direktorin Kundenbeziehungen',
          bio: 'Stellt sicher, dass jeder Kunde personalisierten, Premium-Service erhält.',
        },
      },
    },
    // Pricing Page
    pricing: {
      hero: {
        title: 'Transparente Preise',
        subtitle: 'Banksicherheitslösungen Auf Ihre Bedürfnisse Zugeschnitten',
      },
      tiers: {
        basic: {
          name: 'Basis',
          price: 'Ab €2.500',
          unit: 'pro Einheit',
          description: 'Nur Hardware-Verkauf',
          features: [
            'Hochsicherheits-Schloss-Hardware',
            'Dokumentation & Handbücher',
            'Standardgarantie',
            'E-Mail-Support',
          ],
          cta: 'Loslegen',
        },
        standard: {
          name: 'Standard',
          price: 'Ab €8.500',
          unit: 'pro Installation',
          description: 'Hardware + Installation & Schulung',
          features: [
            'Alles in Basis',
            'Professionelle Installation',
            'Mitarbeiterschulung',
            'Erweiterte Garantie',
            'Prioritäts-Support',
          ],
          cta: 'Standard Wählen',
        },
        premium: {
          name: 'Premium',
          price: 'Individuelles Angebot',
          unit: 'Vollständige Verwaltung',
          description: 'Komplettes Sicherheitsmanagement',
          features: [
            'Alles in Standard',
            '24/7 Fernüberwachung',
            'Präventive Wartung',
            'Schlüsselmanagement-Services',
            'Dedizierter Account-Manager',
            'Incident-Response-Team',
          ],
          cta: 'Angebot Anfordern',
          recommended: 'Empfohlen',
        },
      },
      comparison: {
        title: 'Funktionsvergleich',
        features: {
          hardware: 'Hochsicherheits-Hardware',
          installation: 'Professionelle Installation',
          training: 'Mitarbeiterschulung',
          monitoring: '24/7 Überwachung',
          maintenance: 'Präventive Wartung',
          support: 'Support-Level',
        },
        support: {
          email: 'E-Mail',
          priority: 'Priorität',
          dedicated: 'Dediziert',
        },
      },
      cta: {
        title: 'Die Meisten Banken Wählen Premium',
        subtitle: 'Für vollständige Ruhe und umfassenden Schutz',
        button: 'Angebot Anfordern',
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: 'Kontaktieren Sie Uns',
        subtitle: 'Lassen Sie uns Ihre Sicherheitsbedürfnisse besprechen',
      },
      form: {
        name: 'Vollständiger Name',
        namePlaceholder: 'Max Mustermann',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'max@ihrebank.de',
        phone: 'Telefonnummer',
        phonePlaceholder: '+49 123 456 789',
        company: 'Firma / Bankname',
        companyPlaceholder: 'Ihre Institution',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie uns von Ihren Sicherheitsbedürfnissen...',
        language: 'Bevorzugte Sprache',
        submit: 'Nachricht Senden',
        success: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.',
      },
      info: {
        title: 'Kontaktinformationen',
        phone: 'Telefon',
        email: 'E-Mail',
        address: 'Adresse',
        addressValue: 'Knez Mihailova 42, Belgrad, Serbien',
        hours: 'Geschäftszeiten',
        hoursValue: 'Mo - Fr: 8:00 - 18:00 MEZ',
      },
      alternative: {
        title: 'Lieber Anrufen?',
        description: 'Unsere Sicherheitsexperten sind bereit, Ihre Bedürfnisse zu besprechen.',
      },
    },
    // Footer
    footer: {
      description: 'Hochsicherheits-Schließlösungen und Zugangskontrollsysteme für Banken und Finanzinstitute.',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      followUs: 'Folgen Sie Uns',
      copyright: '© 2026 BockLock. Alle Rechte vorbehalten.',
    },
  },
  sr: {
    // Navigation
    nav: {
      home: 'Početna',
      about: 'O Nama',
      pricing: 'Cene',
      contact: 'Kontakt',
      getInTouch: 'Kontaktirajte Nas',
    },
    // Home Page
    home: {
      hero: {
        title: 'Visokosigurnosna Zaključavanja za Banke',
        subtitle: 'BockLock isporučuje, instalira i upravlja neprobojinim sigurnosnim bravama i pristupnim sistemima prilagođenim finansijskim institucijama.',
        viewPricing: 'Pogledajte Cene',
        contactUs: 'Kontaktirajte Nas',
      },
      trust: {
        banks: '100+ Osiguranih Banaka',
        monitoring: '24/7 Monitoring',
        certified: 'ISO Sertifikovano',
        experience: '10+ Godina Iskustva',
      },
      features: {
        title: 'Naša Sigurnosna Rešenja',
        subtitle: 'Sveobuhvatna zaštita za vašu finansijsku instituciju',
        hardware: {
          title: 'Visokosigurnosni Hardver',
          description: 'Najmodernije brave i sistemi kontrole pristupa dizajnirani da ispune najviše bankarske sigurnosne standarde.',
        },
        installation: {
          title: 'Profesionalna Instalacija',
          description: 'Stručna instalacija i usluge upravljanja koje obezbeđuju besprekorno integrisanje sa vašom postojećom sigurnosnom infrastrukturom.',
        },
        monitoring: {
          title: '24/7 Daljinski Monitoring',
          description: 'Nadzor bez prestanka i trenutni alarmni sistemi za zaštitu vaše imovine u svakom trenutku.',
        },
        custom: {
          title: 'Prilagođena Rešenja za Trezore',
          description: 'Rešenja bezbednosti prilagođena za trezore, sefove i specijalizovane sigurne zone u vašoj instituciji.',
        },
      },
      whyUs: {
        title: 'Zašto Izabrati BockLock',
        subtitle: 'Poverenje vodećih finansijskih institucija širom Evrope',
        reliability: {
          title: 'Nenadmašna Pouzdanost',
          description: 'Naši sistemi garantuju 99,99% dostupnosti, osiguravajući da vaša bezbednost nikada ne spava.',
        },
        expertise: {
          title: 'Bankarska Ekspertiza',
          description: 'Preko decenije specijalizovanog iskustva u osiguravanju banaka i finansijskih institucija.',
        },
        engineering: {
          title: 'Nemačko Inženjerstvo',
          description: 'Precizno dizajnirana rešenja koja ispunjavaju najstrožije evropske sigurnosne standarde.',
        },
      },
      testimonials: {
        title: 'Šta Kažu Naši Klijenti',
        subtitle: 'Poverenje sigurnosnih profesionalaca širom sveta',
        testimonial1: {
          quote: 'BockLock je transformisao našu sigurnosnu infrastrukturu. Njihova pažnja prema detaljima i 24/7 podrška nam daju potpuni mir.',
          name: 'Hans Mueller',
          position: 'Direktor Bezbednosti',
          company: 'Deutsche Volksbank',
        },
        testimonial2: {
          quote: 'Instalacija je bila besprekorna, a sistem monitoringa je sprečio više sigurnosnih incidenata. Toplo preporučujem.',
          name: 'Sarah Thompson',
          position: 'Direktorka Sigurnosti',
          company: 'Centralnoevropska Banka',
        },
        testimonial3: {
          quote: 'Profesionalni, pouzdani i uvek dostupni. BockLock je naš pouzdan partner za sve sigurnosne potrebe.',
          name: 'Milan Petrović',
          position: 'Operativni Menadžer',
          company: 'Banka Intesa Srbija',
        },
      },
      cta: {
        title: 'Spremni da Osigurate Vašu Instituciju?',
        subtitle: 'Kontaktirajte nas danas za besplatnu procenu sigurnosti i prilagođenu ponudu.',
        button: 'Kontaktirajte Nas Danas',
      },
    },
    // About Page
    about: {
      hero: {
        title: 'O BockLock-u',
        subtitle: 'Vaš Pouzdan Sigurnosni Partner za Banke',
      },
      mission: {
        title: 'Naša Misija',
        description: 'Pružiti najviši nivo fizičke i elektronske sigurnosti za finansijske institucije kroz inovativna rešenja zaključavanja i upravljanje celokupnim životnim ciklusom.',
      },
      story: {
        title: 'Naša Priča',
        description: 'Osnovan 2015. godine, BockLock je započeo sa jednostavnom misijom: revolucionisati bankarsku sigurnost. Počevši u Beogradu, brzo smo se proširili širom Evrope, postajući pouzdan partner za preko 100 finansijskih institucija. Naša posvećenost nemačkim inženjerskim standardima i kontinuiranoj inovaciji učinila nas je liderom u visokosigurnosnim rešenjima za bankarski sektor.',
      },
      expertise: {
        title: 'Sertifikati i Ekspertiza',
        iso: 'ISO 27001 Sertifikovano',
        vds: 'VdS Odobreno',
        german: 'Nemački Inženjerski Standardi',
        international: 'Međunarodna Prisutnost',
      },
      values: {
        title: 'Naše Osnovne Vrednosti',
        security: {
          title: 'Sigurnost Prvo',
          description: 'Svaka odluka koju donosimo prioritizuje zaštitu vaše imovine.',
        },
        reliability: {
          title: 'Pouzdanost',
          description: 'Pouzdana rešenja koja besprekorno funkcionišu, svaki put.',
        },
        discretion: {
          title: 'Diskrecija',
          description: 'Poverljiva partnerstva izgrađena na poverenju i profesionalnosti.',
        },
        innovation: {
          title: 'Inovacija',
          description: 'Kontinuirano unapređujemo našu tehnologiju da bismo bili korak ispred pretnji.',
        },
      },
      team: {
        title: 'Naš Liderski Tim',
        subtitle: 'Stručnjaci posvećeni vašoj sigurnosti',
        member1: {
          name: 'Dr Stefan Bock',
          position: 'Izvršni Direktor i Osnivač',
          bio: '20+ godina u sigurnosnim sistemima, bivši konsultant za velike evropske banke.',
        },
        member2: {
          name: 'Ingrid Hoffmann',
          position: 'Direktor Tehnologije',
          bio: 'Ekspert za elektronske sigurnosne sisteme sa pozadinom u nemačkom inženjerstvu.',
        },
        member3: {
          name: 'Marko Nikolić',
          position: 'Rukovodilac Operacija',
          bio: 'Vodi naše timove za instalaciju i monitoring širom Jugoistočne Evrope.',
        },
        member4: {
          name: 'Anna Becker',
          position: 'Direktor Odnosa sa Klijentima',
          bio: 'Osigurava da svaki klijent dobije personalizovanu, premium uslugu.',
        },
      },
    },
    // Pricing Page
    pricing: {
      hero: {
        title: 'Transparentne Cene',
        subtitle: 'Bankarska Sigurnosna Rešenja Prilagođena Vašim Potrebama',
      },
      tiers: {
        basic: {
          name: 'Osnovni',
          price: 'Od €2.500',
          unit: 'po jedinici',
          description: 'Samo prodaja hardvera',
          features: [
            'Visokosigurnosni hardver brava',
            'Dokumentacija i priručnici',
            'Standardna garancija',
            'E-mail podrška',
          ],
          cta: 'Započnite',
        },
        standard: {
          name: 'Standardni',
          price: 'Od €8.500',
          unit: 'po instalaciji',
          description: 'Hardver + Instalacija i Obuka',
          features: [
            'Sve iz Osnovnog',
            'Profesionalna instalacija',
            'Obuka osoblja',
            'Proširena garancija',
            'Prioritetna podrška',
          ],
          cta: 'Izaberite Standardni',
        },
        premium: {
          name: 'Premium',
          price: 'Po dogovoru',
          unit: 'kompletno upravljanje',
          description: 'Kompletno Upravljanje Sigurnošću',
          features: [
            'Sve iz Standardnog',
            '24/7 daljinski monitoring',
            'Preventivno održavanje',
            'Usluge upravljanja ključevima',
            'Posvećen account manager',
            'Tim za odgovor na incidente',
          ],
          cta: 'Zatražite Ponudu',
          recommended: 'Preporučeno',
        },
      },
      comparison: {
        title: 'Poređenje Funkcija',
        features: {
          hardware: 'Visokosigurnosni Hardver',
          installation: 'Profesionalna Instalacija',
          training: 'Obuka Osoblja',
          monitoring: '24/7 Monitoring',
          maintenance: 'Preventivno Održavanje',
          support: 'Nivo Podrške',
        },
        support: {
          email: 'E-mail',
          priority: 'Prioritet',
          dedicated: 'Posvećen',
        },
      },
      cta: {
        title: 'Većina Banaka Bira Premium',
        subtitle: 'Za potpuni mir i sveobuhvatnu zaštitu',
        button: 'Zatražite Ponudu',
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: 'Kontaktirajte Nas',
        subtitle: 'Razgovarajmo o vašim sigurnosnim potrebama',
      },
      form: {
        name: 'Puno Ime',
        namePlaceholder: 'Petar Petrović',
        email: 'E-mail Adresa',
        emailPlaceholder: 'petar@vasabanka.rs',
        phone: 'Broj Telefona',
        phonePlaceholder: '+381 11 123 4567',
        company: 'Kompanija / Naziv Banke',
        companyPlaceholder: 'Vaša Institucija',
        message: 'Poruka',
        messagePlaceholder: 'Recite nam o vašim sigurnosnim potrebama...',
        language: 'Preferirani Jezik',
        submit: 'Pošaljite Poruku',
        success: 'Hvala vam! Javićemo vam se u roku od 24 sata.',
      },
      info: {
        title: 'Kontakt Informacije',
        phone: 'Telefon',
        email: 'E-mail',
        address: 'Adresa',
        addressValue: 'Knez Mihailova 42, Beograd, Srbija',
        hours: 'Radno Vreme',
        hoursValue: 'Pon - Pet: 8:00 - 18:00',
      },
      alternative: {
        title: 'Preferirate Poziv?',
        description: 'Naši sigurnosni stručnjaci su spremni da razgovaraju o vašim potrebama.',
      },
    },
    // Footer
    footer: {
      description: 'Visokosigurnosna rešenja zaključavanja i sistemi kontrole pristupa za banke i finansijske institucije.',
      quickLinks: 'Brzi Linkovi',
      legal: 'Pravne Informacije',
      privacy: 'Politika Privatnosti',
      terms: 'Uslovi Korišćenja',
      followUs: 'Pratite Nas',
      copyright: '© 2026 BockLock. Sva prava zadržana.',
    },
  },
} as const;

export type Translations = TranslationStrings;
