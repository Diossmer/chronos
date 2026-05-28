import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Plus, Check, ShieldAlert } from 'lucide-react';
import { Task, EnergyLevel } from '../data/mockData';

interface Props {
  energyState: EnergyLevel;
  tasks: Task[];
  isBurnoutBlocked: boolean;
  triggerBurnoutBarrier: () => void;
  closeDay: () => void;
}

export default function Flow2Tasks({ energyState, tasks, isBurnoutBlocked, triggerBurnoutBarrier, closeDay }: Props) {
  return (
    <>
      <div className={`w-full max-w-4xl flex-1 flex flex-col p-4 z-10 ${isBurnoutBlocked ? 'blur-tension' : ''}`}>
        <header className="flex justify-between items-center mb-10 glass-panel p-8 futuristic-border">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-day)] futuristic-text tracking-wide">Carga Cognitiva Optimizada</h2>
            <p className="text-xl opacity-80 tracking-widest futuristic-text-subtle">Reserva biológica en estado: <span className="text-[var(--color-dawn)] font-bold drop-shadow-md">{energyState}</span></p>
          </div>
          <button onClick={closeDay} className="flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--color-alert-soft)] text-[var(--color-alert-soft)] hover:bg-[var(--color-alert-soft)] hover:text-white transition-all hover:shadow-[0_0_20px_var(--color-alert-soft)] futuristic-text">
            <Moon size={22} /> Desconexión Biológica
          </button>
        </header>

        <div className="flex-1 overflow-y-auto space-y-6 pr-6">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div key={task.id} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 flex justify-between items-center organic-shape futuristic-border mb-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold futuristic-text tracking-wider">{task.title}</h3>
                  <p className="text-lg opacity-80 flex items-center gap-3 futuristic-text-subtle">
                    {task.type === 'Descanso' && <Check size={20} className="text-[var(--color-dawn)] drop-shadow-[0_0_10px_var(--color-dawn)]" />}
                    <span>Tipo: {task.type}</span> 
                    <span className="opacity-50">|</span> 
                    <span>Peso Quántico: {task.cognitiveLoad}/5</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 mb-6">
          <button onClick={triggerBurnoutBarrier} className="w-full glass-panel p-6 flex justify-center items-center gap-3 hover:bg-white/10 transition-colors organic-shape border-dashed border-2 border-[var(--color-alert-soft)] futuristic-text text-[var(--color-alert-soft)] hover:shadow-[0_0_30px_var(--color-alert-soft)]">
            <Plus size={28} className="animate-pulse" /> Añadir Revisión de Presupuestos (Alta Carga)
          </button>
        </div>
      </div>

      {isBurnoutBlocked && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 bg-black/60 backdrop-blur-md">
          <div className="bg-[var(--color-bg)] text-[var(--color-alert-soft)] p-16 rounded-[40px] border-2 border-[var(--color-alert-soft)] flex flex-col items-center shadow-[0_0_150px_rgba(255,0,60,0.5)]">
            <ShieldAlert size={80} className="mb-8 animate-pulse drop-shadow-[0_0_20px_var(--color-alert-soft)]" />
            <h2 className="text-5xl mb-8 futuristic-text text-center leading-tight">Barrera Anti-Burnout<br/>Activada</h2>
            <p className="text-2xl text-center opacity-90 space-y-4 futuristic-text-subtle">
              <span className="block text-white">Carga cognitiva excedida.</span>
              <span className="block">Generando espacio de descompresión temporal...</span>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
