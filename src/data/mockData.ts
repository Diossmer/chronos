export type GodTime = 'Chronos (Lineal)' | 'Kairós (Oportuno)' | 'Aión (Eterno)';

export interface Task {
  id: string;
  title: string;
  temporalGravity: number;
  type: 'Decreto' | 'Profecía' | 'Mortal' | 'Estasis';
}

export const initialTasks: Task[] = [
  { id: 't1', title: 'Forjar la Gran Estrategia', temporalGravity: 5, type: 'Decreto' },
  { id: 't2', title: 'Alineación de Mortales (Sincronización)', temporalGravity: 3, type: 'Mortal' },
  { id: 't3', title: 'Descifrar Pergaminos (Gestión)', temporalGravity: 2, type: 'Mortal' },
  { id: 't4', title: 'Invocar Tormenta de Ideas', temporalGravity: 4, type: 'Profecía' },
];

export const burnoutTriggerTask: Task = {
  id: 't-burnout',
  title: 'Desafiar a los Dioses (Exceso Mortal)',
  temporalGravity: 5,
  type: 'Decreto',
};
