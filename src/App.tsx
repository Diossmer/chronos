import { useState, useEffect } from 'react';
import { initialTasks, Task, EnergyLevel } from './data/mockData';
import Particles from './components/Particles';

import Flow1Init from './components/Flow1Init';
import Flow2Tasks from './components/Flow2Tasks';
import Flow3Close from './components/Flow3Close';

export default function App() {
  const [energyState, setEnergyState] = useState<EnergyLevel | null>(null);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isBurnoutBlocked, setIsBurnoutBlocked] = useState(false);
  const [isDayClosed, setIsDayClosed] = useState(false);

  useEffect(() => {
    if (energyState) {
      const reordered = [...initialTasks].sort((a, b) => {
        if (energyState === 'Pico') return b.cognitiveLoad - a.cognitiveLoad;
        if (energyState === 'Agotamiento') return a.cognitiveLoad - b.cognitiveLoad;
        return 0; // Estable
      });
      setTasks(reordered);
    }
  }, [energyState]);

  const triggerBurnoutBarrier = () => {
    setIsBurnoutBlocked(true);
    setTimeout(() => {
      setIsBurnoutBlocked(false);
      setTasks(prev => [...prev, { id: 'pausa', title: 'Respiración / Pausa Visual', cognitiveLoad: 1, type: 'Descanso' }]);
    }, 2500);
  };

  const closeDay = () => {
    setIsDayClosed(true);
  };

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-1000 relative overflow-hidden ${isDayClosed ? 'fade-night' : ''}`}>
      <Particles isDayClosed={isDayClosed} />

      {!energyState && !isDayClosed && (
        <Flow1Init setEnergyState={setEnergyState} />
      )}

      {energyState && !isDayClosed && (
        <Flow2Tasks 
          energyState={energyState}
          tasks={tasks}
          isBurnoutBlocked={isBurnoutBlocked}
          triggerBurnoutBarrier={triggerBurnoutBarrier}
          closeDay={closeDay}
        />
      )}

      {isDayClosed && (
        <Flow3Close />
      )}

      {/* Lista de Integrantes Minimalista */}
      <div className="fixed bottom-6 left-6 text-left opacity-80 text-gray-200 futuristic-text-subtle text-sm pointer-events-none hover:opacity-100 transition-opacity z-50 drop-shadow-md">
        <p className="mb-2 text-[var(--color-dawn)] font-bold">NODO DE INNOVACIÓN</p>
        <p>Juan Henriquez - 27913162</p>
        <p>Frederick Durán - 30346056</p>
        <p>Diossmer Villamizar - 21310567</p>
        <p>Yesmir Guzman - 20130682</p>
        <p>Jasmar Chirino - 15165088</p>
        <p>Eliezer González - 30667160</p>
      </div>
    </div>
  );
}
