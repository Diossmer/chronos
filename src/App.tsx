import { useState, useEffect } from 'react';
import { initialTasks, Task, GodTime } from './data/mockData';
import Particles from './components/Particles';

import Flow1Init from './components/Flow1Init';
import Flow2Tasks from './components/Flow2Tasks';
import Flow3Close from './components/Flow3Close';

export default function App() {
  const [energyState, setEnergyState] = useState<GodTime | null>(null);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isBurnoutBlocked, setIsBurnoutBlocked] = useState(false);
  const [isDayClosed, setIsDayClosed] = useState(false);

  useEffect(() => {
    if (energyState) {
      const reordered = [...initialTasks].sort((a, b) => {
        if (energyState === 'Chronos (Lineal)') return a.temporalGravity - b.temporalGravity;
        if (energyState === 'Kairós (Oportuno)') return b.temporalGravity - a.temporalGravity;
        return 0; // Aión
      });
      setTasks(reordered);
    }
  }, [energyState]);

  const triggerBurnoutBarrier = () => {
    setIsBurnoutBlocked(true);
    setTimeout(() => {
      setIsBurnoutBlocked(false);
      setTasks(prev => [...prev, { id: 'estasis', title: 'Espacio de Estasis Temporal', temporalGravity: 0, type: 'Estasis' }]);
    }, 4000); // 4 segundos para leer el texto de Moiras
  };

  const closeDay = () => {
    setIsDayClosed(true);
  };

  const resetToHome = () => {
    setEnergyState(null);
    setIsDayClosed(false);
  };

  return (
    <div className={`w-full h-full flex flex-col items-center p-8 transition-all duration-1000 relative overflow-hidden ${isDayClosed ? 'fade-night' : ''}`}>
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
          goBack={resetToHome}
        />
      )}

      {isDayClosed && (
        <Flow3Close resetApp={resetToHome} />
      )}
    </div>
  );
}
