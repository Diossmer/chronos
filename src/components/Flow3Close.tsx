import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

export default function Flow3Close() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl z-10 p-8 text-center space-y-12">
      <Moon size={120} className="text-[var(--color-dawn)] mb-6 drop-shadow-[0_0_40px_var(--color-dawn)]" />
      <h1 className="text-6xl font-bold text-[var(--color-text)] futuristic-text tracking-widest">DESCONEXIÓN BIOLÓGICA</h1>
      <div className="glass-panel w-full p-16 flex flex-col items-center mt-10 futuristic-border">
        <p className="text-3xl text-gray-400 mb-8 futuristic-text-subtle">Soberanía de Tiempo Mantenida</p>
        <p className="text-[140px] leading-none text-[var(--color-day)] futuristic-text drop-shadow-[0_0_60px_var(--color-day)]">85%</p>
      </div>
      <p className="mt-20 text-2xl text-[var(--color-alert-soft)] futuristic-text-subtle tracking-wide">El reloj corporativo ha sido bloqueado hasta el alba.</p>
    </motion.div>
  );
}
