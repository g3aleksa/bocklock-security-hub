import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Settings, Award, Clock, CheckCircle, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const { t, getLocalizedPath } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    t.home.testimonials.testimonial1,
    t.home.testimonials.testimonial2,
    t.home.testimonials.testimonial3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8 animate-fade-in">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">
                {t.home.trust.certified}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t.home.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.home.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              >
                <Link to={getLocalizedPath('/pricing')}>
                  {t.home.hero.viewPricing}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                <Link to={getLocalizedPath('/contact')}>
                  {t.home.hero.contactUs}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: t.home.trust.banks },
              { icon: Clock, label: t.home.trust.monitoring },
              { icon: CheckCircle, label: t.home.trust.certified },
              { icon: Shield, label: t.home.trust.experience },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t.home.features.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.home.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, ...t.home.features.hardware },
              { icon: Settings, ...t.home.features.installation },
              { icon: Eye, ...t.home.features.monitoring },
              { icon: Shield, ...t.home.features.custom },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t.home.whyUs.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.home.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: CheckCircle, ...t.home.whyUs.reliability },
              { icon: Award, ...t.home.whyUs.expertise },
              { icon: Settings, ...t.home.whyUs.engineering },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-6">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t.home.testimonials.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    'transition-all duration-500',
                    activeTestimonial === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                  )}
                >
                  <Card className="border-none shadow-lg bg-card">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="h-10 w-10 text-accent/30 mb-6" />
                      <p className="text-lg md:text-xl text-foreground mb-8 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-accent font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-heading font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all',
                    activeTestimonial === index
                      ? 'bg-accent w-8'
                      : 'bg-accent/30 hover:bg-accent/50'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-10">
            {t.home.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10"
          >
            <Link to={getLocalizedPath('/contact')}>
              {t.home.cta.button}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
