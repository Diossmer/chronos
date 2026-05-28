import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Plus, Check, ShieldAlert, ArrowLeft } from 'lucide-react';
import { Task, GodTime } from '../data/mockData';

interface Props {
  energyState: GodTime;
  tasks: Task[];
  isBurnoutBlocked: boolean;
  triggerBurnoutBarrier: () => void;
  closeDay: () => void;
  goBack: () => void;
}

export default function Flow2Tasks({ energyState, tasks, isBurnoutBlocked, triggerBurnoutBarrier, closeDay, goBack }: Props) {
  return (
    <>
      <div className={`w-full max-w-4xl flex-1 flex flex-col p-4 z-10 ${isBurnoutBlocked ? 'blur-tension' : ''}`}>
        <header className="flex justify-between items-center mb-10 glass-panel p-8 futuristic-border">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-day)] futuristic-text tracking-wide">Tejido del Destino</h2>
            <p className="text-xl opacity-80 tracking-widest futuristic-text-subtle">Regido por la deidad: <span className="text-[var(--color-dawn)] font-bold drop-shadow-md">{energyState}</span></p>
          </div>
          <div className="flex gap-4">
            <button onClick={goBack} className="flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-black transition-all hover:shadow-[0_0_20px_var(--color-text)] futuristic-text">
              <ArrowLeft size={22} /> Regresar
            </button>
            <button onClick={closeDay} className="flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--color-alert-soft)] text-[var(--color-alert-soft)] hover:bg-[var(--color-alert-soft)] hover:text-white transition-all hover:shadow-[0_0_20px_var(--color-alert-soft)] futuristic-text">
              <Moon size={22} /> Invocar Eclipse
            </button>
          </div>
        </header>

        <div className="flex-1 w-full grid grid-cols-2 gap-6 content-start items-stretch">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div 
                key={task.id} 
                layout
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className={`glass-panel p-6 flex flex-col gap-4 organic-shape futuristic-border ${task.type === 'Estasis' ? 'col-span-2 border-[var(--color-dawn)] bg-[var(--color-dawn)]/10 text-center items-center' : ''}`}
              >
                <h3 className="text-xl font-bold futuristic-text tracking-wider">{task.title}</h3>
                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center w-full">
                  <span className="text-sm opacity-60">
                    {task.type === 'Estasis' && <Check size={16} className="inline mr-2 text-[var(--color-dawn)]" />}
                    Hilo: {task.type}
                  </span>
                  <div className="flex gap-1">
                    {/* Representación visual de la gravedad temporal */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i < task.temporalGravity ? 'bg-[var(--color-alert-soft)] shadow-[0_0_8px_var(--color-alert-soft)]' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 mb-6">
          <button onClick={triggerBurnoutBarrier} className="w-full glass-panel p-6 flex justify-center items-center gap-3 hover:bg-white/10 transition-colors organic-shape border-dashed border-2 border-[var(--color-alert-soft)] futuristic-text text-[var(--color-alert-soft)] hover:shadow-[0_0_30px_var(--color-alert-soft)]">
            <Plus size={28} className="animate-pulse" /> Desafiar al Oráculo (Agendar 3ra Reunión Mortal)
          </button>
        </div>
      </div>

      {isBurnoutBlocked && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 bg-black/60 backdrop-blur-md">
          <div className="bg-[var(--color-bg)] text-[var(--color-alert-soft)] p-16 rounded-[40px] border-2 border-[var(--color-alert-soft)] flex flex-col items-center shadow-[0_0_150px_rgba(255,0,60,0.5)]">
            <ShieldAlert size={80} className="mb-8 animate-pulse drop-shadow-[0_0_20px_var(--color-alert-soft)]" />
            <h2 className="text-5xl mb-8 futuristic-text text-center leading-tight">¡Furia de las Moiras!<br />(Anti-Burnout)</h2>
            <p className="text-2xl text-center opacity-90 space-y-4 futuristic-text-subtle">
              <span className="block text-white">Has intentado torcer el tiempo más allá de tu destino mortal.</span>
              <span className="block">El Hilo se fractura. Obligando a un espacio de Estasis Temporal...</span>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
