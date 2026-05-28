import { motion } from 'framer-motion';
import { Hourglass } from 'lucide-react';
import { GodTime } from '../data/mockData';

interface Props {
  setEnergyState: (level: GodTime) => void;
}

export default function Flow1Init({ setEnergyState }: Props) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center flex-1 w-full p-8 z-10">
      <h1 className="text-5xl font-bold mb-16 text-center text-[var(--color-dawn)] futuristic-text leading-tight">
        [ DOMINIO DE CHRONOS ]<br/><span className="text-4xl text-[var(--color-text)]">Sincroniza el Hilo del Tiempo</span>
      </h1>
      <p className="text-xl text-gray-400 mb-8 futuristic-text-subtle text-center max-w-3xl leading-relaxed">
        <span className="text-[var(--color-day)] font-bold">Mitología Aplicada (No Corporativo)</span><br/>
        El tiempo no es una línea infinita de las Big Tech, es una fuerza antigua. Interfaz soberana para mortales.<br/>
        Declara bajo qué deidad regirás tu destino hoy para tejer tus misiones.
      </p>
      
      <div className="flex gap-8 mt-4">
        {['Chronos (Lineal)', 'Kairós (Oportuno)', 'Aión (Eterno)'].map(level => (
          <button 
            key={level} 
            onClick={() => setEnergyState(level as GodTime)} 
            className="glass-panel px-12 py-10 text-xl hover:scale-110 transition-transform flex flex-col items-center gap-6 organic-shape futuristic-text hover:shadow-[0_0_30px_var(--color-day)]"
          >
            <Hourglass className={level === 'Kairós (Oportuno)' ? 'text-[var(--color-dawn)] drop-shadow-[0_0_10px_var(--color-dawn)]' : level === 'Aión (Eterno)' ? 'text-[var(--color-day)] drop-shadow-[0_0_10px_var(--color-day)]' : 'text-[var(--color-alert-soft)] animate-pulse drop-shadow-[0_0_10px_var(--color-alert-soft)]'} size={56}/>
            <span>{level}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
