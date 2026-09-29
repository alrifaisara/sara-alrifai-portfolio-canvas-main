import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

const Resume = () => {
  const handleDownload = () => {
    // Create a sample PDF download - in real implementation, this would link to actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume URL
    link.download = 'Sara_Alrifai_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-8"
        >
          {/* PDF Preview Area */}
          <div className="aspect-[8.5/11] bg-secondary rounded-lg mb-8 overflow-hidden border border-border">
            <img
              src="/resume.jpg"
              alt="Resume Preview"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Buttons Section */}
<div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
  {/* Preview Button */}
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="lg">
        <Eye className="h-5 w-5 mr-2" />
        Preview Resume
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl h-[80vh] pt-4">
      <DialogHeader className="mb-2">
        <DialogTitle className="text-lg">Resume Preview</DialogTitle>
      </DialogHeader>
      <div className="h-[70vh]">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg border"
          title="Resume PDF Preview"
        />
      </div>
    </DialogContent>
  </Dialog>

  {/* Download Button */}
  <Button
    onClick={handleDownload}
    size="lg"
    className="gradient-primary hover:glow-primary text-lg px-8 py-6 rounded-full transition-smooth"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </Button>
</div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;