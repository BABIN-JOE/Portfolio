import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "babinjoe2945@gmail.com",
      href: "mailto:babinjoe2945@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9489500524",
      href: "tel:+919489500524"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/BABIN-JOE",
      username: "@BABIN-JOE"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/babin-joe",
      username: "babin-joe"
    },
    {
      icon: ExternalLink,
      label: "Instagram",
      href: "https://www.instagram.com/yo_babin_294?igsh=OWg0OHllNnd4MTEy",
      username: "yo_babin_294"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gradient-card p-8">
            <h2 className="font-display font-semibold text-2xl mb-6">
              Send me a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-button"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="gradient-card p-8">
              <h2 className="font-display font-semibold text-2xl mb-6">
                Let's connect
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="gradient-card p-8">
              <h2 className="font-display font-semibold text-2xl mb-6">
                Follow me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response */}
            <div className="gradient-card p-8 text-center">
              <h3 className="font-semibold text-lg mb-4">Quick Response Time</h3>
              <p className="text-muted-foreground mb-4">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via phone.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">24h</div>
                  <div className="text-xs text-muted-foreground">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2h</div>
                  <div className="text-xs text-muted-foreground">Phone/SMS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="gradient-card p-12 text-center">
            <h2 className="font-display font-semibold text-2xl mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold mb-2">What's your typical project timeline?</h3>
                <p className="text-muted-foreground text-sm">
                  Project timelines vary based on complexity, but most projects are completed within 2-8 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you work with remote teams?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! I have experience working with distributed teams across different time zones.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What technologies do you specialize in?</h3>
                <p className="text-muted-foreground text-sm">
                  I specialize in React, Node.js, Python, AI/ML, and cloud technologies like AWS.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Are you available for full-time roles?</h3>
                <p className="text-muted-foreground text-sm">
                  I'm open to discussing both full-time opportunities and freelance projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;