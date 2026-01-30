import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: t.contact.form.success,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+381 11 123 4567',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@bocklock.com',
    },
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: t.contact.info.addressValue,
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
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
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            {t.contact.hero.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t.contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-success/10 mb-6">
                      <CheckCircle className="h-12 w-12 text-success" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      {t.contact.form.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t.contact.form.namePlaceholder}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t.contact.form.emailPlaceholder}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.phone}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder={t.contact.form.phonePlaceholder}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.contact.form.company}</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder={t.contact.form.companyPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">{t.contact.form.language}</Label>
                      <Select defaultValue={language}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">🇬🇧 English</SelectItem>
                          <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                          <SelectItem value="sr">🇷🇸 Srpski</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          {t.contact.form.submit}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  {t.contact.info.title}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alternative Contact */}
              <Card className="border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {t.contact.alternative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t.contact.alternative.description}
                  </p>
                  <a
                    href="tel:+381111234567"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    +381 11 123 4567
                  </a>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.485877539087!2d20.453755076506776!3d44.81672048279507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4e0cf4cb5%3A0x2dcb6c4f5e3f5e1a!2sKnez%20Mihailova%2C%20Beograd!5e0!3m2!1sen!2srs!4v1699999999999!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BockLock Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
