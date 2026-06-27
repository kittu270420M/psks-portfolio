import Reveal, { SectionTitle } from './Reveal';
import { Bug, Fingerprint, Lock, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Bug, label: 'Malware Analysis', val: 'Reverse Engineering' },
  { icon: Fingerprint, label: 'Digital Forensics', val: 'Evidence & Recovery' },
  { icon: Lock, label: 'Secure Systems', val: 'Defense by Design' },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="WHO I AM" title="About Me" />

        {/* horizontal intro card */}
        <Reveal delay={0.1}>
          <div className="glass-strong neon-border rounded-3xl p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                  <span className="font-display font-semibold text-xl">VIT-AP University</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a <span className="text-cyan-300 font-semibold">Cybersecurity
                  Engineering student at VIT-AP</span>, driven by a deep curiosity for how
                  systems break — and how to defend them. My focus lies in
                  <span className="text-white font-medium"> malware analysis</span>,
                  <span className="text-white font-medium"> digital forensics</span>, and
                  <span className="text-white font-medium"> secure system development</span>.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  I love turning complex threats into intelligent, automated defenses —
                  building tools that detect, dissect, and neutralize malicious code,
                  bridging engineering precision with security intuition.
                </p>
              </div>

              {/* vertical divider */}
              <div className="hidden lg:block lg:col-span-1 justify-self-center w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

              <div className="lg:col-span-4 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={0.15 + i * 0.1}>
                    <div className="group glass rounded-2xl p-4 flex items-center gap-3 hover:bg-white/[0.06] transition-colors">
                      <div className="shrink-0 w-11 h-11 rounded-xl glass-strong grid place-items-center group-hover:scale-110 transition-transform">
                        <s.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{s.label}</p>
                        <p className="text-xs text-gray-400">{s.val}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
