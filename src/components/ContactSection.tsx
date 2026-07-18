import { Github, Linkedin, MessageCircle, Send, Mail, User } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myzpwdkj", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nouveau message de ${formData.name}: ${formData.subject || 'Contact'}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div>
    <section id="contacts" className="py-20 bg-white from-slate-900 to-gray-800 ">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#b3bbd1]">#</span>
            <span className="text-black">contacts</span>
          </h2>
          <div className="w-24 h-1 bg-[#b3bbd1] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-900 border border-gray-600 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#b3bbd1]/10 rounded-full blur-3xl group-hover:blur-xl transition-all duration-500"></div>
  
  <div className="flex items-center gap-3 mb-6">
    <Mail className="text-[#b3bbd1] group-hover:scale-110 transition-transform duration-300" size={26} />
    <h3 className="text-2xl font-bold text-white">Let's Build Something Great</h3>
  </div>

  <p className="text-slate-300 text-lg leading-relaxed mb-8">
    Open to exciting freelance projects and collaborations. If you're looking for creative, clean and user-focused solutions — I'm here to help.
  </p>

  <div className="space-y-5">
    <div className="flex items-center gap-4">
      <span className="w-3 h-3 bg-[#b3bbd1] rounded-full animate-ping"></span>
      <span className="text-white font-medium">Currently taking new projects</span>
    </div>
    <div className="flex items-center gap-4">
      <span className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></span>
      <span className="text-white font-medium">Fast & friendly communication</span>
    </div>
    <div className="flex items-center gap-4">
      <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
      <span className="text-white font-medium">Professional results, always</span>
    </div>
  </div>
</div>


            <div className="bg-slate-800/60 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail size={16} className="text-[#b3bbd1]" />
                  <span className="text-sm">mina.elaachrate@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-gray-600 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Send className="text-[#b3bbd1]" size={24} />
              <h3 className="font-bold text-white text-xl">Send me a message</h3>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                ❌ Erreur lors de l'envoi. Vérifiez la configuration Formspree ou tous les champs et réessayez.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="w-full bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-lg h-12 focus:border-[#b3bbd1] focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email *"
                    className="w-full bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-lg h-12 focus:border-[#b3bbd1] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-400 px-4 py-3 rounded-lg h-12 focus:border-[#b3bbd1] focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message... *"
                rows={5}
                className="w-full bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-400 px-4 py-3 rounded-lg focus:border-[#b3bbd1] focus:outline-none transition-colors resize-none"
              ></textarea>

              <p className="text-slate-400 text-xs">* Champs obligatoires</p>

              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#b3bbd1] hover:bg-[#9ca9c4] disabled:bg-[#b3bbd1]/50 disabled:cursor-not-allowed text-black h-12 px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#b3bbd1]/25 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitting ? 'Envoi en cours...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </section>
     <footer className=" border-t border-gray-600 pt-12 bg-[#010101]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-[#b3bbd1]">@</span>
                <span className="text-xl font-bold text-white">Mina</span>
                <span className="text-slate-400 text-sm ml-2">mina.elaachrate@gmail.com</span>
              </div>
             <p className="text-slate-300 text-base">Full Stack Developer & Web Enthusiast</p>
<p className="text-slate-400 text-sm mt-2">Building modern and useful web applications</p>

            </div>

            <div className="text-right">
              <h4 className="font-semibold text-white mb-4 text-lg">Follow Me</h4>
              <div className="flex gap-4 justify-end">
                <a 
                  href="https://github.com" 
                  className="w-12 h-12 bg-slate-800 border border-gray-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#c4ccd9] hover:border-[#c4ccd9] transition-all duration-300 hover:bg-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-12 h-12 bg-slate-800 border border-gray-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#c4ccd9] hover:border-[#c4ccd9] transition-all duration-300 hover:bg-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://discord.com" 
                  className="w-12 h-12 bg-slate-800 border border-gray-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#c4ccd9] hover:border-[#c4ccd9] transition-all duration-300 hover:bg-slate-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-slate-400 text-sm">
              © Copyright 2024. Made  by Mina
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;