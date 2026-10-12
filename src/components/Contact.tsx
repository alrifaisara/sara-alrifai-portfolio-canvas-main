import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    email: 's2alrifa@uwaterloo.ca',
    phone: '+1 (647) 544-2890',
    location: 'Mississauga, Ontario, Canada',
    github: 'https://github.com/alrifaisara',
    linkedin: 'https://www.linkedin.com/in/sara-alrifai-a514a9314/',
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
      color: 'text-green-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      action: '#',
      color: 'text-red-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'alrifaisara',
      action: contactInfo.github,
      color: 'text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Sara Alrifai',
      action: contactInfo.linkedin,
      color: 'text-blue-500',
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Contact
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities in engineering and technology
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="glass hover:glow-primary transition-smooth group h-full">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:glow-accent transition-smooth ${method.color}`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {method.label}
                  </h3>

                  {/* Value */}
                  <p className="text-muted-foreground text-sm mb-4 break-words">
                    {method.value}
                  </p>

                  {/* Connect Button */}
                  {method.action !== '#' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-primary hover:text-primary transition-smooth"
                      asChild
                    >
                      <a
                        href={method.action}
                        target={
                          method.action.startsWith('http')
                            ? '_blank'
                            : '_self'
                        }
                        rel={
                          method.action.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        Connect
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2026 Sara Alrifai.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;