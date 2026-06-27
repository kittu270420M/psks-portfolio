import { motion } from 'framer-motion';
import { SectionTitle } from './Reveal';
import {
  Code2, Terminal, Network, Bug, Search, Wifi, ShieldHalf, Radio, FileSearch, Fingerprint,
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code2 },
  { name: 'C', icon: Terminal },
  { name: 'Wireshark', icon: Network },
  { name: 'Burp Suite', icon: Bug },
  { name: 'Nmap', icon: Search },
  { name: 'Kali Linux', icon: ShieldHalf },
  { name: 'Bettercap', icon: Radio },
  { name: 'Malware Analysis', icon: FileSearch },
  { name: 'Digital Forensics', icon: Fingerprint },
  { name: 'Network Security', icon: Wifi },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="ARSENAL" title="Skills & Tools" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,245,255,0.12), transparent 70%)' }}
              />
              <div className="relative w-12 h-12 rounded-xl glass-strong grid place-items-center group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <span className="relative text-sm font-medium text-gray-200 group-hover:text-white">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
