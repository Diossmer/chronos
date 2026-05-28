export type EnergyLevel = 'Pico' | 'Estable' | 'Agotamiento';

export interface Task {
  id: string;
  title: string;
  cognitiveLoad: number;
  type: 'Analítica' | 'Creativa' | 'Mecánica' | 'Descanso';
}

export const initialTasks: Task[] = [
  { id: 't1', title: 'Planificación Estratégica', cognitiveLoad: 5, type: 'Analítica' },
  { id: 't2', title: 'Diseño de Interfaz UX', cognitiveLoad: 4, type: 'Creativa' },
  { id: 't3', title: 'Responder Correos Asíncronos', cognitiveLoad: 2, type: 'Mecánica' },
  { id: 't4', title: 'Reunión de Sincronización', cognitiveLoad: 3, type: 'Mecánica' },
];

export const burnoutTriggerTask: Task = {
  id: 't-burnout',
  title: 'Revisión de Presupuestos (Alta Carga)',
  cognitiveLoad: 5,
  type: 'Analítica',
};
