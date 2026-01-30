import { Link } from 'react-router-dom';
import { Check, X, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const { t, getLocalizedPath } = useLanguage();

  const tiers = [
    {
      ...t.pricing.tiers.basic,
      highlighted: false,
    },
    {
      ...t.pricing.tiers.standard,
      highlighted: false,
    },
    {
      ...t.pricing.tiers.premium,
      highlighted: true,
    },
  ];

  const comparisonFeatures = [
    {
      name: t.pricing.comparison.features.hardware,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: t.pricing.comparison.features.installation,
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: t.pricing.comparison.features.training,
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: t.pricing.comparison.features.monitoring,
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: t.pricing.comparison.features.maintenance,
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: t.pricing.comparison.features.support,
      basic: t.pricing.comparison.support.email,
      standard: t.pricing.comparison.support.priority,
      premium: t.pricing.comparison.support.dedicated,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            {t.pricing.hero.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t.pricing.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={cn(
                  'relative border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
                  tier.highlighted
                    ? 'border-accent shadow-lg scale-105 md:scale-110'
                    : 'border-border'
                )}
              >
                {tier.highlighted && 'recommended' in tier && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      <Star className="h-4 w-4" />
                      {tier.recommended}
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-heading font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {tier.unit}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={cn(
                      'w-full',
                      tier.highlighted
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                  >
                    <Link to={getLocalizedPath('/contact')}>
                      {tier.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            {t.pricing.comparison.title}
          </h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading font-bold text-foreground">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-foreground">
                    {t.pricing.tiers.basic.name}
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-foreground">
                    {t.pricing.tiers.standard.name}
                  </th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-foreground bg-accent/10 rounded-t-lg">
                    {t.pricing.tiers.premium.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.standard}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-accent/10">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-medium text-accent">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            {t.pricing.cta.title}
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-10">
            {t.pricing.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10"
          >
            <Link to={getLocalizedPath('/contact')}>
              {t.pricing.cta.button}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
