import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      const pos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= pos) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 px-6' : ''
        }`}
      >
        <button onClick={() => go('Home')} className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-lg tracking-wider">
            PS<span className="text-cyan-400">KS</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l ? 'text-cyan-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              {l}
              {active === l && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-indigo-400"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-5 mt-2 glass-strong rounded-2xl overflow-hidden"
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => go(l)}
                className={`block w-full text-left px-6 py-3.5 text-sm border-b border-white/5 last:border-0 ${
                  active === l ? 'text-cyan-300' : 'text-gray-300'
                }`}
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
