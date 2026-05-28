import { motion } from 'framer-motion';
import { Battery } from 'lucide-react';
import { EnergyLevel } from '../data/mockData';

interface Props {
  setEnergyState: (level: EnergyLevel) => void;
}

export default function Flow1Init({ setEnergyState }: Props) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center flex-1 w-full p-8 z-10">
      <h1 className="text-5xl font-bold mb-16 text-center text-[var(--color-dawn)] futuristic-text leading-tight">
        [ PROTOCOLO CHRONOS ]<br/><span className="text-4xl text-[var(--color-text)]">Sincroniza tu Reserva Biológica</span>
      </h1>
      <div className="flex gap-8 mt-4">
        {['Pico', 'Estable', 'Agotamiento'].map(level => (
          <button 
            key={level} 
            onClick={() => setEnergyState(level as EnergyLevel)} 
            className="glass-panel px-12 py-10 text-2xl hover:scale-110 transition-transform flex flex-col items-center gap-6 organic-shape futuristic-text hover:shadow-[0_0_30px_var(--color-day)]"
          >
            <Battery className={level === 'Pico' ? 'text-[var(--color-alert-soft)] animate-pulse drop-shadow-[0_0_10px_var(--color-alert-soft)]' : level === 'Estable' ? 'text-[var(--color-day)] drop-shadow-[0_0_10px_var(--color-day)]' : 'text-[var(--color-dawn)] drop-shadow-[0_0_10px_var(--color-dawn)]'} size={56}/>
            <span>{level}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
