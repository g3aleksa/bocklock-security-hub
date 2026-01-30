import { Shield, Target, BookOpen, Award, CheckCircle, Lock, Eye, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, ...t.about.values.security },
    { icon: CheckCircle, ...t.about.values.reliability },
    { icon: Eye, ...t.about.values.discretion },
    { icon: Lightbulb, ...t.about.values.innovation },
  ];

  const teamMembers = [
    t.about.team.member1,
    t.about.team.member2,
    t.about.team.member3,
    t.about.team.member4,
  ];

  const certifications = [
    { icon: Award, label: t.about.expertise.iso },
    { icon: CheckCircle, label: t.about.expertise.vds },
    { icon: Lock, label: t.about.expertise.german },
    { icon: Target, label: t.about.expertise.international },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            {t.about.hero.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  {t.about.mission.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.mission.description}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Our Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  {t.about.story.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.story.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            {t.about.expertise.title}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4">
                    <cert.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{cert.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            {t.about.values.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-accent/10 mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              {t.about.team.title}
            </h2>
            <p className="text-muted-foreground">
              {t.about.team.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-20 w-20 text-accent/40" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
