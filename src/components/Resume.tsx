import { Download, Eye } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Resume
          </h2>

          <p className="text-xl text-white max-w-2xl mx-auto">
            Complete overview of my professional experience, education, and skills
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-8"
        >
          {/* Resume Preview Image */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsPreviewOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsPreviewOpen(true);
              }
            }}
            className="aspect-[8.5/11] bg-white rounded-lg mb-8 overflow-hidden border border-border cursor-pointer transition hover:opacity-90"
            aria-label="Open resume preview"
          >
            <img
              src="/resume.jpg"
              alt="Sara Alrifai Resume Preview"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Preview Resume */}
            <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto glass hover:glow-primary transition-smooth"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  Preview Resume
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto pt-4 glass border-primary/30">
                <DialogHeader className="mb-2">
                  <DialogTitle className="text-lg">
                    Resume Preview
                  </DialogTitle>
                </DialogHeader>

                <div className="w-full flex justify-center">
                  <img
                    src="/resume.jpg"
                    alt="Sara Alrifai Resume"
                    className="w-full max-w-4xl h-auto rounded-lg bg-white"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Download Resume */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gradient-primary hover:glow-primary text-lg px-8 py-6 rounded-full transition-smooth"
            >
              <a
                href="/resume.pdf"
                download="Sara_Alrifai_Resume.pdf"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
//
export default Resume;