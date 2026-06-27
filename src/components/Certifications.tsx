import { motion } from 'framer-motion';
import { SectionTitle } from './Reveal';
import { Award, BadgeCheck } from 'lucide-react';

const certs = [
  { name: 'HCF', issuer: 'Huawei Certified', },
  { name: 'HCDA', issuer: 'Huawei Certified Developer', },
  { name: 'Wadhwani Entrepreneurship', issuer: 'Wadhwani Foundation' },
  { name: 'Simplilearn Python', issuer: 'Simplilearn' },
  { name: 'Simplilearn C', issuer: 'Simplilearn' },
  { name: 'MathWorks MATLAB', issuer: 'MathWorks' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="VERIFIED" title="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.08), transparent)' }}
              />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-strong grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white flex items-center gap-2">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{c.issuer}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-cyan-400 font-mono-cyber">
                    <BadgeCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
